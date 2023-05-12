var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/account/account.ts
import {
  updateAccountSchema,
  UpdateAccountSettingsSchema
} from "@linode/validation/lib/account.schema";

// src/constants.ts
var API_ROOT = "https://api.linode.com/v4";
var BETA_API_ROOT = API_ROOT + "beta";

// src/request.ts
import Axios from "axios";
var baseRequest = Axios.create({
  baseURL: "https://api.linode.com/v4"
});
baseRequest.interceptors.request.use((config) => {
  const isRunningInNode = typeof process === "object";
  const newConfig = __spreadProps(__spreadValues({}, config), {
    headers: __spreadProps(__spreadValues({}, config.headers), {
      "User-Agent": "linodejs"
    })
  });
  return isRunningInNode ? newConfig : config;
});
var setToken = (token) => {
  return baseRequest.interceptors.request.use((config) => {
    return __spreadProps(__spreadValues({}, config), {
      headers: __spreadProps(__spreadValues({}, config.headers), {
        Authorization: `Bearer ${token}`
      })
    });
  });
};
var set = (field, value) => (object) => {
  return !isEmpty(value) ? __spreadProps(__spreadValues({}, object), { [field]: value }) : object;
};
var isEmpty = (v) => v === void 0 || v === null || v.length === 0 || typeof v === "object" && Object.keys(v).length === 0 && v.constructor === Object;
var setURL = (url) => set("url", url);
var setMethod = (method) => set("method", method);
var setParams = (params = {}) => set("params", params);
var setData = (data, schema, postValidationTransform) => {
  if (!schema) {
    return set("data", data);
  }
  const updatedData = typeof postValidationTransform === "function" ? postValidationTransform(data) : data;
  try {
    schema.validateSync(data, { abortEarly: false });
    return set("data", updatedData);
  } catch (error) {
    return (object) => __spreadProps(__spreadValues({}, object), {
      data: updatedData,
      validationErrors: convertYupToLinodeErrors(error)
    });
  }
};
var convertYupToLinodeErrors = (validationError) => {
  const { inner } = validationError;
  if (inner && inner.length > 0) {
    return inner.reduce((result, innerValidationError) => {
      const err = convertYupToLinodeErrors(innerValidationError);
      return Array.isArray(err) ? [...result, ...err] : [...result, err];
    }, []);
  }
  return [mapYupToLinodeAPIError(validationError)];
};
var mapYupToLinodeAPIError = ({
  message,
  path
}) => __spreadValues({
  reason: message
}, path && { field: path });
var setXFilter = (xFilter) => {
  return (object) => !isEmpty(xFilter) ? __spreadProps(__spreadValues({}, object), {
    headers: __spreadProps(__spreadValues({}, object.headers), { "X-Filter": JSON.stringify(xFilter) })
  }) : object;
};
var reduceRequestConfig = (...fns) => fns.reduceRight((result, fn) => fn(result), {
  url: "https://api.linode.com/v4",
  headers: {}
});
var requestGenerator = (...fns) => {
  const config = reduceRequestConfig(...fns);
  if (config.validationErrors) {
    return Promise.reject(
      config.validationErrors
      // All failed requests, client or server errors, should be APIError[]
    );
  }
  return baseRequest(config).then((response) => response.data);
};
var request_default = requestGenerator;

// src/account/account.ts
var getAccountInfo = () => {
  return request_default(setURL(`${API_ROOT}/account`), setMethod("GET"));
};
var getNetworkUtilization = () => request_default(
  setURL(`${API_ROOT}/account/transfer`),
  setMethod("GET")
);
var updateAccountInfo = (data) => request_default(
  setURL(`${API_ROOT}/account`),
  setMethod("PUT"),
  setData(data, updateAccountSchema)
);
var getAccountSettings = () => request_default(
  setURL(`${API_ROOT}/account/settings`),
  setMethod("GET")
);
var updateAccountSettings = (data) => request_default(
  setURL(`${API_ROOT}/account/settings`),
  setMethod("PUT"),
  setData(data, UpdateAccountSettingsSchema)
);
var cancelAccount = (data) => {
  return request_default(
    setURL(`${API_ROOT}/account/cancel`),
    setMethod("POST"),
    setData(data)
  );
};
var getAccountAgreements = () => request_default(
  setURL(`${BETA_API_ROOT}/account/agreements`),
  setMethod("GET")
);
var signAgreement = (data) => {
  return request_default(
    setURL(`${BETA_API_ROOT}/account/agreements`),
    setMethod("POST"),
    setData(data)
  );
};

// src/account/events.ts
var getEvents = (params = {}, filter = {}) => request_default(
  setURL(`${API_ROOT}/account/events`),
  setMethod("GET"),
  setXFilter(filter),
  setParams(params)
);
var getEvent = (eventId) => request_default(
  setURL(`${API_ROOT}/account/events/${eventId}`),
  setMethod("GET")
);
var markEventSeen = (eventId) => request_default(
  setURL(`${API_ROOT}/account/events/${eventId}/seen`),
  setMethod("POST")
);
var markEventRead = (eventId) => request_default(
  setURL(`${API_ROOT}/account/events/${eventId}/read`),
  setMethod("POST")
);
var getNotifications = (params, filter) => request_default(
  setURL(`${API_ROOT}/account/notifications`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filter)
);

// src/account/invoices.ts
var getInvoices = (params, filter) => request_default(
  setURL(`${API_ROOT}/account/invoices`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filter)
);
var getInvoice = (invoiceId) => request_default(
  setURL(`${API_ROOT}/account/invoices/${invoiceId}`),
  setMethod("GET")
);
var getInvoiceItems = (invoiceId, params, filter) => request_default(
  setURL(`${API_ROOT}/account/invoices/${invoiceId}/items`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filter)
);

// src/account/payments.ts
import {
  CreditCardSchema,
  ExecutePaypalPaymentSchema,
  PaymentSchema,
  StagePaypalPaymentSchema,
  PaymentMethodSchema
} from "@linode/validation/lib/account.schema";
var getPayments = (params, filter) => request_default(
  setURL(`${API_ROOT}/account/payments`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filter)
);
var makePayment = (data) => {
  if (!data.cvv) {
    delete data.cvv;
  }
  return request_default(
    setURL(`${API_ROOT}/account/payments`),
    setMethod("POST"),
    setData(data, PaymentSchema)
  );
};
var stagePaypalPayment = (data) => request_default(
  setURL(`${API_ROOT}/account/payments/paypal`),
  setMethod("POST"),
  setData(data, StagePaypalPaymentSchema)
);
var executePaypalPayment = (data) => request_default(
  setURL(`${API_ROOT}/account/payments/paypal/execute`),
  setMethod("POST"),
  setData(data, ExecutePaypalPaymentSchema)
);
var saveCreditCard = (data) => {
  return request_default(
    setURL(`${API_ROOT}/account/credit-card`),
    setMethod("POST"),
    setData(data, CreditCardSchema)
  );
};
var getPaymentMethods = (params) => {
  return request_default(
    setURL(`${API_ROOT}/account/payment-methods`),
    setMethod("GET"),
    setParams(params)
  );
};
var getPaymentMethod = (id) => {
  return request_default(
    setURL(`${API_ROOT}/account/payment-method/${id}`),
    setMethod("GET")
  );
};
var getClientToken = () => {
  return request_default(
    setURL(`${API_ROOT}/account/client-token`),
    setMethod("GET")
  );
};
var addPaymentMethod = (data) => {
  return request_default(
    setURL(`${API_ROOT}/account/payment-methods`),
    setMethod("POST"),
    setData(data, PaymentMethodSchema)
  );
};
var makeDefaultPaymentMethod = (id) => {
  return request_default(
    setURL(`${API_ROOT}/account/payment-methods/${id}/make-default`),
    setMethod("POST")
  );
};
var deletePaymentMethod = (id) => {
  return request_default(
    setURL(`${API_ROOT}/account/payment-methods/${id}`),
    setMethod("DELETE")
  );
};

// src/account/users.ts
import {
  CreateUserSchema,
  UpdateUserSchema
} from "@linode/validation/lib/account.schema";
var getUsers = (params, filters) => request_default(
  setURL(`${API_ROOT}/account/users`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filters)
);
var getUser = (username) => request_default(
  setURL(`${API_ROOT}/account/users/${username}`),
  setMethod("GET")
);
var createUser = (data) => request_default(
  setURL(`${API_ROOT}/account/users`),
  setMethod("POST"),
  setData(data, CreateUserSchema)
);
var updateUser = (username, data) => request_default(
  setURL(`${API_ROOT}/account/users/${username}`),
  setMethod("PUT"),
  setData(data, UpdateUserSchema)
);
var deleteUser = (username) => request_default(
  setURL(`${API_ROOT}/account/users/${username}`),
  setMethod("DELETE")
);
var getGrants = (username) => request_default(
  setURL(`${API_ROOT}/account/users/${username}/grants`),
  setMethod("GET")
);
var updateGrants = (username, data) => request_default(
  setURL(`${API_ROOT}/account/users/${username}/grants`),
  setMethod("PUT"),
  setData(data)
);

// src/account/oauth.ts
import {
  createOAuthClientSchema,
  updateOAuthClientSchema
} from "@linode/validation/lib/account.schema";
var getOAuthClients = (params, filter) => request_default(
  setURL(`${API_ROOT}/account/oauth-clients`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filter)
);
var getOAuthClient = (clientId) => request_default(
  setURL(`${API_ROOT}/account/oauth-clients/${clientId}`),
  setMethod("GET")
);
var createOAuthClient = (data) => request_default(
  setURL(`${API_ROOT}/account/oauth-clients`),
  setMethod("POST"),
  setData(data, createOAuthClientSchema)
);
var resetOAuthClientSecret = (clientId) => request_default(
  setURL(`${API_ROOT}/account/oauth-clients/${clientId}/reset-secret`),
  setMethod("POST")
);
var updateOAuthClient = (clientId, data) => request_default(
  setURL(`${API_ROOT}/account/oauth-clients/${clientId}`),
  setMethod("PUT"),
  setData(data, updateOAuthClientSchema)
);
var deleteOAuthClient = (clientId) => request_default(
  setURL(`${API_ROOT}/account/oauth-clients/${clientId}`),
  setMethod("DELETE")
);

// src/account/promos.ts
import { PromoCodeSchema } from "@linode/validation/lib/account.schema";
var addPromotion = (code) => request_default(
  setURL(`${API_ROOT}/account/promo-codes`),
  setMethod("POST"),
  setData({ promo_code: code }, PromoCodeSchema)
);

// src/account/maintenance.ts
var getAccountMaintenance = (params, filter) => request_default(
  setURL(`${API_ROOT}/account/maintenance`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filter)
);

// src/account/logins.ts
var getAccountLogins = (params, filter) => request_default(
  setURL(`${API_ROOT}/account/logins`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filter)
);
var getAccountLogin = (loginId) => request_default(
  setURL(`${API_ROOT}/account/logins/${loginId}`),
  setMethod("GET")
);

// src/domains/domains.ts
import {
  createDomainSchema,
  importZoneSchema,
  updateDomainSchema
} from "@linode/validation/lib/domains.schema";
var getDomains = (params, filters) => request_default(
  setURL(`${API_ROOT}/domains`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filters)
);
var getDomain = (domainId) => request_default(setURL(`${API_ROOT}/domains/${domainId}`), setMethod("GET"));
var createDomain = (data) => request_default(
  setData(data, createDomainSchema),
  setURL(`${API_ROOT}/domains`),
  setMethod("POST")
);
var updateDomain = (domainId, data) => request_default(
  setURL(`${API_ROOT}/domains/${domainId}`),
  setMethod("PUT"),
  setData(data, updateDomainSchema)
);
var deleteDomain = (domainId) => request_default(setURL(`${API_ROOT}/domains/${domainId}`), setMethod("DELETE"));
var cloneDomain = (domainId, data) => request_default(
  setData(data),
  setURL(`${API_ROOT}/domains/${domainId}/clone`),
  setMethod("POST")
);
var importZone = (data) => request_default(
  setData(data, importZoneSchema),
  setURL(`${API_ROOT}/domains/import`),
  setMethod("POST")
);

// src/domains/records.ts
import {
  createRecordSchema,
  updateRecordSchema
} from "@linode/validation/lib/records.schema";
var getDomainRecords = (domainId, params) => request_default(
  setURL(`${API_ROOT}/domains/${domainId}/records`),
  setParams(params),
  setMethod("GET")
);
var getDomainRecord = (domainId, recordId) => request_default(
  setURL(`${API_ROOT}/domains/${domainId}/records/${recordId}`),
  setMethod("GET")
);
var createDomainRecord = (domainId, data) => request_default(
  setURL(`${API_ROOT}/domains/${domainId}/records`),
  setMethod("POST"),
  setData(data, createRecordSchema)
);
var updateDomainRecord = (domainId, recordId, data) => request_default(
  setURL(`${API_ROOT}/domains/${domainId}/records/${recordId}`),
  setMethod("PUT"),
  setData(data, updateRecordSchema)
);
var deleteDomainRecord = (domainId, recordId) => request_default(
  setURL(`${API_ROOT}/domains/${domainId}/records/${recordId}`),
  setMethod("DELETE")
);

// src/firewalls/firewalls.ts
import {
  CreateFirewallSchema,
  FirewallDeviceSchema,
  UpdateFirewallSchema
} from "@linode/validation/lib/firewalls.schema";
var getFirewalls = (params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${BETA_API_ROOT}/networking/firewalls`)
);
var getFirewall = (firewallID) => request_default(
  setMethod("GET"),
  setURL(`${BETA_API_ROOT}/networking/firewalls/${firewallID}`)
);
var createFirewall = (data) => request_default(
  setMethod("POST"),
  setData(data, CreateFirewallSchema),
  setURL(`${BETA_API_ROOT}/networking/firewalls`)
);
var updateFirewall = (firewallID, data) => request_default(
  setMethod("PUT"),
  setData(data, UpdateFirewallSchema),
  setURL(`${BETA_API_ROOT}/networking/firewalls/${firewallID}`)
);
var enableFirewall = (firewallID) => updateFirewall(firewallID, { status: "enabled" });
var disableFirewall = (firewallID) => updateFirewall(firewallID, { status: "disabled" });
var deleteFirewall = (firewallID) => request_default(
  setMethod("DELETE"),
  setURL(`${BETA_API_ROOT}/networking/firewalls/${firewallID}`)
);
var getFirewallRules = (firewallID, params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${BETA_API_ROOT}/networking/firewalls/${firewallID}/rules`)
);
var updateFirewallRules = (firewallID, data) => request_default(
  setMethod("PUT"),
  setData(data),
  // Validation is too complicated for these; leave it to the API.
  setURL(`${BETA_API_ROOT}/networking/firewalls/${firewallID}/rules`)
);
var getFirewallDevices = (firewallID, params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${BETA_API_ROOT}/networking/firewalls/${firewallID}/devices`)
);
var getFirewallDevice = (firewallID, deviceID) => request_default(
  setMethod("GET"),
  setURL(
    `${BETA_API_ROOT}/networking/firewalls/${firewallID}/devices/${deviceID}`
  )
);
var addFirewallDevice = (firewallID, data) => request_default(
  setMethod("POST"),
  setURL(`${BETA_API_ROOT}/networking/firewalls/${firewallID}/devices`),
  setData(data, FirewallDeviceSchema)
);
var deleteFirewallDevice = (firewallID, deviceID) => request_default(
  setMethod("DELETE"),
  setURL(
    `${BETA_API_ROOT}/networking/firewalls/${firewallID}/devices/${deviceID}`
  )
);

// src/images/images.ts
import {
  createImageSchema,
  updateImageSchema,
  uploadImageSchema
} from "@linode/validation/lib/images.schema";
var getImage = (imageId) => request_default(setURL(`${API_ROOT}/images/${imageId}`), setMethod("GET"));
var getImages = (params = {}, filters = {}) => request_default(
  setURL(`${API_ROOT}/images`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filters)
);
var createImage = (diskId, label, description) => {
  const data = __spreadValues(__spreadValues({
    disk_id: diskId
  }, label && { label }), description && { description });
  return request_default(
    setURL(`${API_ROOT}/images`),
    setMethod("POST"),
    setData(data, createImageSchema)
  );
};
var updateImage = (imageId, label, description) => {
  const data = __spreadValues(__spreadValues({}, label && { label }), description && { description });
  return request_default(
    setURL(`${API_ROOT}/images/${imageId}`),
    setMethod("PUT"),
    setData(data, updateImageSchema)
  );
};
var deleteImage = (imageId) => {
  return request_default(
    setURL(`${API_ROOT}/images/${imageId}`),
    setMethod("DELETE")
  );
};
var uploadImage = (data) => {
  return request_default(
    setURL(`${API_ROOT}/images/upload`),
    setMethod("POST"),
    setData(data, uploadImageSchema)
  );
};

// src/kubernetes/kubernetes.ts
import { createKubeClusterSchema } from "@linode/validation/lib/kubernetes.schema";
var getKubernetesClusters = (params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${API_ROOT}/lke/clusters`)
);
var getKubernetesCluster = (clusterID) => request_default(
  setMethod("GET"),
  setURL(`${API_ROOT}/lke/clusters/${clusterID}`)
);
var createKubernetesCluster = (data) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/lke/clusters`),
  setData(data, createKubeClusterSchema)
);
var updateKubernetesCluster = (clusterID, data) => request_default(
  setMethod("PUT"),
  setURL(`${API_ROOT}/lke/clusters/${clusterID}`),
  setData(data)
);
var deleteKubernetesCluster = (clusterID) => request_default(
  setMethod("DELETE"),
  setURL(`${API_ROOT}/lke/clusters/${clusterID}`)
);
var getKubeConfig = (clusterId) => request_default(
  setMethod("GET"),
  setURL(`${API_ROOT}/lke/clusters/${clusterId}/kubeconfig`)
);
var resetKubeConfig = (clusterId) => request_default(
  setMethod("DELETE"),
  setURL(`${API_ROOT}/lke/clusters/${clusterId}/kubeconfig`)
);
var getKubernetesVersions = (params, filters) => request_default(
  setMethod("GET"),
  setXFilter(filters),
  setParams(params),
  setURL(`${API_ROOT}/lke/versions`)
);
var getKubernetesVersion = (versionID) => request_default(
  setMethod("GET"),
  setURL(`${API_ROOT}/lke/versions/${versionID}`)
);
var getKubernetesClusterEndpoints = (clusterID, params, filters) => request_default(
  setMethod("GET"),
  setXFilter(filters),
  setParams(params),
  setURL(`${API_ROOT}/lke/clusters/${clusterID}/api-endpoints`)
);
var getKubernetesClusterDashboard = (clusterID) => request_default(
  setMethod("GET"),
  setURL(`${API_ROOT}/lke/clusters/${clusterID}/dashboard`)
);
var recycleClusterNodes = (clusterID) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/lke/clusters/${clusterID}/recycle`)
);

// src/kubernetes/nodePools.ts
import { nodePoolSchema } from "@linode/validation/lib/kubernetes.schema";
var getNodePools = (clusterID, params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${API_ROOT}/lke/clusters/${clusterID}/pools`)
);
var getNodePool = (clusterID, nodePoolID) => request_default(
  setMethod("GET"),
  setURL(`${API_ROOT}/lke/clusters/${clusterID}/pools/${nodePoolID}`)
);
var createNodePool = (clusterID, data) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/lke/clusters/${clusterID}/pools`),
  setData(data, nodePoolSchema)
);
var updateNodePool = (clusterID, nodePoolID, data) => request_default(
  setMethod("PUT"),
  setURL(`${API_ROOT}/lke/clusters/${clusterID}/pools/${nodePoolID}`),
  setData(data, nodePoolSchema)
);
var deleteNodePool = (clusterID, nodePoolID) => request_default(
  setMethod("DELETE"),
  setURL(`${API_ROOT}/lke/clusters/${clusterID}/pools/${nodePoolID}`)
);
var recycleAllNodes = (clusterID, nodePoolID) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/lke/clusters/${clusterID}/pools/${nodePoolID}/recycle`)
);
var recycleNode = (clusterID, nodeID) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/lke/clusters/${clusterID}/nodes/${nodeID}/recycle`)
);

// src/linodes/actions.ts
import { RebuildLinodeSchema } from "@linode/validation/lib/linodes.schema";
var linodeBoot = (linodeId, config_id) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/boot`),
  setMethod("POST"),
  setData({ config_id })
);
var linodeReboot = (linodeId, config_id) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/reboot`),
  setMethod("POST"),
  setData({ config_id })
);
var linodeShutdown = (linodeId) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/shutdown`),
  setMethod("POST")
);
var resizeLinode = (linodeId, type, allow_auto_disk_resize = true) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/resize`),
  setMethod("POST"),
  setData({
    type,
    allow_auto_disk_resize
  })
);
var rebuildLinode = (linodeId, data) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/rebuild`),
  setMethod("POST"),
  setData(data, RebuildLinodeSchema)
);
var rescueLinode = (linodeId, devices) => {
  const _devices = __spreadValues({}, devices);
  delete _devices["sdh"];
  return request_default(
    setURL(`${API_ROOT}/linode/instances/${linodeId}/rescue`),
    setMethod("POST"),
    setData({ devices: _devices })
  );
};
var rescueMetalLinode = (linodeId) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/rescue`),
  setMethod("POST")
);
var cloneLinode = (sourceLinodeId, data) => {
  return request_default(
    setURL(`${API_ROOT}/linode/instances/${sourceLinodeId}/clone`),
    setMethod("POST"),
    setData(data)
  );
};
var startMutation = (linodeID) => {
  return request_default(
    setURL(`${API_ROOT}/linode/instances/${linodeID}/mutate`),
    setMethod("POST")
  );
};
var scheduleOrQueueMigration = (linodeID, payload) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeID}/migrate`),
  setData(payload || {}),
  setMethod("POST")
);

// src/linodes/backups.ts
import { CreateSnapshotSchema } from "@linode/validation/lib/linodes.schema";
var getLinodeBackups = (id) => request_default(
  setURL(`${API_ROOT}/linode/instances/${id}/backups`),
  setMethod("GET")
);
var enableBackups = (linodeId) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/backups/enable`),
  setMethod("POST")
);
var cancelBackups = (linodeId) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/backups/cancel`),
  setMethod("POST")
);
var takeSnapshot = (linodeId, label) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/backups`),
  setMethod("POST"),
  setData({ label }, CreateSnapshotSchema)
);
var restoreBackup = (linodeId, backupId, targetLinodeId, overwrite) => request_default(
  setURL(
    `${API_ROOT}/linode/instances/${linodeId}/backups/${backupId}/restore`
  ),
  setMethod("POST"),
  setData({ linode_id: targetLinodeId, overwrite })
);

// src/linodes/configs.ts
import {
  CreateLinodeConfigSchema,
  UpdateLinodeConfigSchema
} from "@linode/validation/lib/linodes.schema";
var getLinodeConfigs = (linodeId, params, filters) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/configs`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filters)
);
var getLinodeConfig = (linodeId, configId) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/configs/${configId}`),
  setMethod("GET")
);
var createLinodeConfig = (linodeId, data) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/configs`),
  setMethod("POST"),
  setData(data, CreateLinodeConfigSchema)
);
var deleteLinodeConfig = (linodeId, configId) => request_default(
  setMethod("DELETE"),
  setURL(`${API_ROOT}/linode/instances/${linodeId}/configs/${configId}`)
);
var updateLinodeConfig = (linodeId, configId, data) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/configs/${configId}`),
  setMethod("PUT"),
  setData(data, UpdateLinodeConfigSchema)
);

// src/linodes/disks.ts
import {
  CreateLinodeDiskSchema,
  ResizeLinodeDiskSchema,
  UpdateLinodePasswordSchema
} from "@linode/validation/lib/linodes.schema";
var getLinodeDisks = (linodeId, params, filter) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/disks`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filter)
);
var createLinodeDisk = (linodeId, data) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/disks`),
  setMethod("POST"),
  setData(data, CreateLinodeDiskSchema)
);
var getLinodeDisk = (linodeId, diskId) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/disks/${diskId}`),
  setMethod("GET")
);
var updateLinodeDisk = (linodeId, diskId, data) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/disks/${diskId}`),
  setMethod("PUT"),
  setData(data)
);
var resizeLinodeDisk = (linodeId, diskId, size) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/disks/${diskId}/resize`),
  setMethod("POST"),
  setData({ size }, ResizeLinodeDiskSchema)
);
var cloneLinodeDisk = (linodeId, diskId) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/disks/${diskId}/clone`),
  setMethod("POST")
);
var deleteLinodeDisk = (linodeId, diskId) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/disks/${diskId}`),
  setMethod("DELETE")
);
var changeLinodeDiskPassword = (linodeId, diskId, password) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/disks/${diskId}/password`),
  setMethod("POST"),
  setData({ password }, UpdateLinodePasswordSchema)
);

// src/linodes/info.ts
var getLinodeStats = (linodeId) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/stats`),
  setMethod("GET")
);
var getLinodeStatsByDate = (linodeId, year, month) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/stats/${year}/${month}`),
  setMethod("GET")
);
var getLinodeTransfer = (linodeId) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/transfer`),
  setMethod("GET")
);
var getLinodeTransferByDate = (linodeId, year, month) => request_default(
  setURL(
    `${API_ROOT}/linode/instances/${linodeId}/transfer/${year}/${month}`
  ),
  setMethod("GET")
);
var getLinodeKernels = (params, filter) => request_default(
  setURL(`${API_ROOT}/linode/kernels`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filter)
);
var getLinodeKernel = (kernelId) => request_default(
  setURL(`${API_ROOT}/linode/kernels/${kernelId}`),
  setMethod("GET")
);
var getLinodeTypes = (params) => request_default(
  setURL(`${API_ROOT}/linode/types`),
  setMethod("GET"),
  setParams(params)
);
var getType = (typeId) => request_default(setURL(`${API_ROOT}/linode/types/${typeId}`), setMethod("GET"));
var getDeprecatedLinodeTypes = () => request_default(
  setURL(`${API_ROOT}/linode/types-legacy`),
  setMethod("GET")
);

// src/linodes/ips.ts
import { IPAllocationSchema } from "@linode/validation/lib/linodes.schema";
var getLinodeIPs = (id) => request_default(
  setURL(`${API_ROOT}/linode/instances/${id}/ips`),
  setMethod("GET")
);
var allocateIPAddress = (linodeID, data) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeID}/ips`),
  setMethod("POST"),
  setData(data, IPAllocationSchema)
);
var removeIPAddress = (payload) => {
  return request_default(
    setURL(
      `${API_ROOT}/linode/instances/${payload.linodeID}/ips/${payload.IPAddress}`
    ),
    setMethod("DELETE")
  );
};
var removeIPv6Range = (payload) => {
  return request_default(
    setURL(`${API_ROOT}/networking/ipv6/ranges/${payload.IPv6Range}`),
    setMethod("DELETE")
  );
};

// src/linodes/linodes.ts
import {
  CreateLinodeSchema,
  UpdateLinodeSchema
} from "@linode/validation/lib/linodes.schema";
var getLinode = (linodeId) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}`),
  setMethod("GET")
);
var getLinodeLishToken = (linodeId) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/lish_token`),
  setMethod("POST")
);
var getLinodeVolumes = (linodeId, params = {}, filter = {}) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/volumes`),
  setMethod("GET"),
  setXFilter(filter),
  setParams(params)
);
var getLinodes = (params, filter) => request_default(
  setURL(`${API_ROOT}/linode/instances/`),
  setMethod("GET"),
  setXFilter(filter),
  setParams(params)
);
var createLinode = (data) => request_default(
  setURL(`${API_ROOT}/linode/instances`),
  setMethod("POST"),
  setData(data, CreateLinodeSchema)
);
var updateLinode = (linodeId, values) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}`),
  setMethod("PUT"),
  setData(values, UpdateLinodeSchema)
);
var deleteLinode = (linodeId) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}`),
  setMethod("DELETE")
);
var changeLinodePassword = (linodeId, root_pass) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/password`),
  setData({ root_pass }),
  setMethod("POST")
);
var getLinodeFirewalls = (linodeId, params, filter) => request_default(
  setURL(`${API_ROOT}/linode/instances/${linodeId}/firewalls`),
  setMethod("GET"),
  setXFilter(filter),
  setParams(params)
);

// src/longview/longview.ts
import { longviewClientCreate } from "@linode/validation/lib/longview.schema";
var createLongviewClient = (label) => {
  return request_default(
    setURL(`${API_ROOT}/longview/clients`),
    setData(
      {
        label
      },
      longviewClientCreate
    ),
    setMethod("POST")
  );
};
var getLongviewClients = (params, filter) => request_default(
  setURL(`${API_ROOT}/longview/clients`),
  setParams(params),
  setXFilter(filter),
  setMethod("GET")
);
var deleteLongviewClient = (id) => request_default(
  setURL(`${API_ROOT}/longview/clients/${id}`),
  setMethod("DELETE")
);
var updateLongviewClient = (id, label) => {
  return request_default(
    setURL(`${API_ROOT}/longview/clients/${id}`),
    setData(
      {
        label
      },
      longviewClientCreate
    ),
    setMethod("PUT")
  );
};
var getLongviewSubscriptions = () => request_default(
  setURL(`${API_ROOT}/longview/subscriptions`),
  setMethod("GET")
);
var getActiveLongviewPlan = () => request_default(
  setURL(`${API_ROOT}/longview/plan`),
  setMethod("GET")
);
var updateActiveLongviewPlan = (plan) => request_default(
  setURL(`${API_ROOT}/longview/plan`),
  setData(plan),
  setMethod("PUT")
);

// src/managed/managed.ts
import {
  createContactSchema,
  createCredentialSchema,
  createServiceMonitorSchema,
  updateCredentialSchema,
  updateManagedLinodeSchema,
  updatePasswordSchema
} from "@linode/validation/lib/managed.schema";
var enableManaged = () => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/account/settings/managed-enable`)
);
var getServices = (params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${API_ROOT}/managed/services`)
);
var disableServiceMonitor = (serviceID) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/managed/services/${serviceID}/disable`)
);
var enableServiceMonitor = (serviceID) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/managed/services/${serviceID}/enable`)
);
var deleteServiceMonitor = (serviceID) => request_default(
  setMethod("DELETE"),
  setURL(`${API_ROOT}/managed/services/${serviceID}`)
);
var getLinodeSettings = (params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${API_ROOT}/managed/linode-settings`)
);
var createServiceMonitor = (data) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/managed/services`),
  setData(data, createServiceMonitorSchema)
);
var updateServiceMonitor = (monitorID, data) => request_default(
  setMethod("PUT"),
  setURL(`${API_ROOT}/managed/services/${monitorID}`),
  setData(data, createServiceMonitorSchema)
);
var getCredentials = (params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${API_ROOT}/managed/credentials`)
);
var updateCredential = (credentialID, data) => request_default(
  setMethod("PUT"),
  setData(data, updateCredentialSchema),
  setURL(`${API_ROOT}/managed/credentials/${credentialID}`)
);
var updatePassword = (credentialID, data) => request_default(
  setMethod("POST"),
  setData(data, updatePasswordSchema),
  setURL(`${API_ROOT}/managed/credentials/${credentialID}/update`)
);
var deleteCredential = (credentialID) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/managed/credentials/${credentialID}/revoke`)
);
var createCredential = (data) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/managed/credentials`),
  setData(data, createCredentialSchema)
);
var getSSHPubKey = () => request_default(
  setMethod("GET"),
  setURL(`${API_ROOT}/managed/credentials/sshkey`)
);
var updateLinodeSettings = (linodeId, data) => request_default(
  setURL(`${API_ROOT}/managed/linode-settings/${linodeId}`),
  setMethod("PUT"),
  setData(data, updateManagedLinodeSchema)
);
var getManagedContacts = (params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${API_ROOT}/managed/contacts`)
);
var createContact = (data) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/managed/contacts`),
  setData(data, createContactSchema)
);
var updateContact = (contactId, data) => request_default(
  setMethod("PUT"),
  setURL(`${API_ROOT}/managed/contacts/${contactId}`),
  setData(data, createContactSchema)
);
var deleteContact = (contactId) => request_default(
  setMethod("DELETE"),
  setURL(`${API_ROOT}/managed/contacts/${contactId}`)
);
var getManagedIssues = () => request_default(
  setMethod("GET"),
  setURL(`${API_ROOT}/managed/issues`)
);
var getManagedStats = () => request_default(setMethod("GET"), setURL(`${API_ROOT}/managed/stats`));

// src/networking/networking.ts
import {
  allocateIPSchema,
  assignAddressesSchema,
  shareAddressesSchema,
  updateIPSchema
} from "@linode/validation/lib/networking.schema";
var getIPs = (params, filters) => request_default(
  setURL(`${API_ROOT}/networking/ips`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filters)
);
var getIP = (address) => request_default(
  setURL(`${API_ROOT}/networking/ips/${address}`),
  setMethod("GET")
);
var updateIP = (address, rdns = null) => request_default(
  setURL(`${API_ROOT}/networking/ips/${address}`),
  setData({ rdns }, updateIPSchema),
  setMethod("PUT")
);
var allocateIp = (payload) => request_default(
  setURL(`${API_ROOT}/networking/ips/`),
  setData(payload, allocateIPSchema),
  setMethod("POST")
);
var assignAddresses = (payload) => request_default(
  setURL(`${API_ROOT}/networking/ips/assign`),
  setMethod("POST"),
  setData(payload, assignAddressesSchema)
);
var shareAddressesv4 = (payload) => request_default(
  setURL(`${API_ROOT}/networking/ipv4/share`),
  setMethod("POST"),
  setData(payload, shareAddressesSchema)
);
var shareAddresses = (payload) => request_default(
  setURL(`${BETA_API_ROOT}/networking/ips/share`),
  setMethod("POST"),
  setData(payload, shareAddressesSchema)
);
var getIPv6Pools = (params) => request_default(
  setURL(`${API_ROOT}/networking/ipv6/pools`),
  setMethod("GET"),
  setParams(params)
);
var getIPv6Ranges = (params) => request_default(
  setURL(`${API_ROOT}/networking/ipv6/ranges`),
  setMethod("GET"),
  setParams(params)
);
var getIPv6RangeInfo = (range, params) => request_default(
  setURL(`${API_ROOT}/networking/ipv6/ranges/${range}`),
  setMethod("GET"),
  setParams(params)
);
var createIPv6Range = (payload) => {
  return request_default(
    setURL(`${API_ROOT}/networking/ipv6/ranges`),
    setMethod("POST"),
    setData(payload)
  );
};

// src/object-storage/account.ts
var cancelObjectStorage = () => request_default(setMethod("POST"), setURL(`${API_ROOT}/object-storage/cancel`));

// src/object-storage/buckets.ts
import {
  CreateBucketSchema,
  UpdateBucketAccessSchema,
  UploadCertificateSchema
} from "@linode/validation/lib/buckets.schema";
var getBucket = (clusterId, bucketName) => request_default(
  setMethod("GET"),
  setURL(`${API_ROOT}/object-storage/buckets/${clusterId}/${bucketName}`)
);
var getBuckets = (params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${API_ROOT}/object-storage/buckets`)
);
var getBucketsInCluster = (clusterId, params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${API_ROOT}/object-storage/buckets/${clusterId}`)
);
var createBucket = (data) => request_default(
  setURL(`${API_ROOT}/object-storage/buckets`),
  setMethod("POST"),
  setData(data, CreateBucketSchema)
);
var deleteBucket = ({
  cluster,
  label
}) => request_default(
  setURL(`${API_ROOT}/object-storage/buckets/${cluster}/${label}`),
  setMethod("DELETE")
);
var getObjectList = (clusterId, bucketName, params) => request_default(
  setMethod("GET"),
  setParams(params),
  setURL(
    `${API_ROOT}/object-storage/buckets/${clusterId}/${bucketName}/object-list`
  )
);
var uploadSSLCert = (clusterId, bucketName, data) => request_default(
  setMethod("POST"),
  setData(data, UploadCertificateSchema),
  setURL(`${API_ROOT}/object-storage/buckets/${clusterId}/${bucketName}/ssl`)
);
var getSSLCert = (clusterId, bucketName) => request_default(
  setMethod("GET"),
  setURL(`${API_ROOT}/object-storage/buckets/${clusterId}/${bucketName}/ssl`)
);
var deleteSSLCert = (clusterId, bucketName) => request_default(
  setMethod("DELETE"),
  setURL(`${API_ROOT}/object-storage/buckets/${clusterId}/${bucketName}/ssl`)
);
var getBucketAccess = (clusterId, bucketName) => request_default(
  setMethod("GET"),
  setURL(
    `${API_ROOT}/object-storage/buckets/${clusterId}/${bucketName}/access`
  )
);
var updateBucketAccess = (clusterId, bucketName, data) => request_default(
  setMethod("PUT"),
  setURL(
    `${API_ROOT}/object-storage/buckets/${clusterId}/${bucketName}/access`
  ),
  setData(data, UpdateBucketAccessSchema)
);

// src/object-storage/clusters.ts
var getClusters = (params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${API_ROOT}/object-storage/clusters`)
);

// src/object-storage/objects.ts
var getObjectURL = (clusterId, bucketName, name, method, options) => request_default(
  setMethod("POST"),
  setURL(
    `${API_ROOT}/object-storage/buckets/${clusterId}/${bucketName}/object-url`
  ),
  setData(__spreadValues({ name, method }, options))
);
var getObjectACL = (clusterId, bucketName, name) => request_default(
  setMethod("GET"),
  setURL(
    `${API_ROOT}/object-storage/buckets/${clusterId}/${bucketName}/object-acl?name=${name}`
  )
);
var updateObjectACL = (clusterId, bucketName, name, acl) => request_default(
  setMethod("PUT"),
  setURL(
    `${API_ROOT}/object-storage/buckets/${clusterId}/${bucketName}/object-acl`
  ),
  setData({ acl, name })
);

// src/object-storage/objectStorageKeys.ts
import { createObjectStorageKeysSchema } from "@linode/validation/lib/objectStorageKeys.schema";
var getObjectStorageKeys = (params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${API_ROOT}/object-storage/keys`)
);
var createObjectStorageKeys = (data) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/object-storage/keys`),
  setData(data, createObjectStorageKeysSchema)
);
var updateObjectStorageKey = (id, data) => request_default(
  setMethod("PUT"),
  setURL(`${API_ROOT}/object-storage/keys/${id}`),
  setData(data, createObjectStorageKeysSchema)
);
var revokeObjectStorageKey = (id) => request_default(
  setMethod("DELETE"),
  setURL(`${API_ROOT}/object-storage/keys/${id}`)
);

// src/profile/twofactor.ts
import { enableTwoFactorSchema } from "@linode/validation/lib/twofactor.schema";
var getTFAToken = () => request_default(setMethod("POST"), setURL(`${API_ROOT}/profile/tfa-enable`));
var disableTwoFactor = () => request_default(setMethod("POST"), setURL(`${API_ROOT}/profile/tfa-disable`));
var confirmTwoFactor = (tfa_code) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/profile/tfa-enable-confirm`),
  setData({ tfa_code }, enableTwoFactorSchema)
);

// src/profile/sshkeys.ts
import { createSSHKeySchema } from "@linode/validation/lib/profile.schema";
var getSSHKeys = (params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${API_ROOT}/profile/sshkeys`)
);
var getSSHKey = (keyId) => request_default(
  setMethod("GET"),
  setURL(`${API_ROOT}/profile/sshkeys/${keyId}`)
);
var createSSHKey = (data) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/profile/sshkeys`),
  setData(data, createSSHKeySchema)
);
var updateSSHKey = (keyId, data) => request_default(
  setMethod("DELETE"),
  setURL(`${API_ROOT}/profile/sshkeys/${keyId}`),
  setData(data, createSSHKeySchema)
);
var deleteSSHKey = (keyId) => request_default(
  setMethod("DELETE"),
  setURL(`${API_ROOT}/profile/sshkeys/${keyId}`)
);

// src/profile/profile.ts
import {
  SendCodeToPhoneNumberSchema,
  VerifyPhoneNumberCodeSchema,
  SecurityQuestionsSchema
} from "@linode/validation/lib/profile.schema";
import { updateProfileSchema } from "@linode/validation/lib/profile.schema";
var getProfile = () => request_default(setURL(`${API_ROOT}/profile`), setMethod("GET"));
var updateProfile = (data) => request_default(
  setURL(`${API_ROOT}/profile`),
  setMethod("PUT"),
  setData(data, updateProfileSchema)
);
var listGrants = () => request_default(setURL(`${API_ROOT}/profile/grants`));
var getMyGrants = () => request_default(setURL(`${API_ROOT}/profile/grants`), setMethod("GET"));
var getTrustedDevices = (params, filter) => request_default(
  setURL(`${API_ROOT}/profile/devices`),
  setMethod("GET"),
  setXFilter(filter),
  setParams(params)
);
var deleteTrustedDevice = (id) => request_default(setURL(`${API_ROOT}/profile/devices/${id}`), setMethod("DELETE"));
var getUserPreferences = () => {
  return request_default(
    setURL(`${API_ROOT}/profile/preferences`)
  );
};
var updateUserPreferences = (payload) => {
  return request_default(
    setURL(`${API_ROOT}/profile/preferences`),
    setData(payload),
    setMethod("PUT")
  );
};
var getLogins = (params, filter) => {
  return request_default(
    setURL(`${API_ROOT}/profile/logins`),
    setMethod("GET"),
    setXFilter(filter),
    setParams(params)
  );
};
var getSecurityQuestions = () => {
  return request_default(
    setURL(`${API_ROOT}/profile/security-questions`),
    setMethod("GET")
  );
};
var updateSecurityQuestions = (payload) => {
  return request_default(
    setURL(`${API_ROOT}/profile/security-questions`),
    setMethod("POST"),
    setData(payload, SecurityQuestionsSchema)
  );
};
var smsOptOut = () => {
  return request_default(
    setURL(`${API_ROOT}/profile/phone-number`),
    setMethod("DELETE")
  );
};
var sendCodeToPhoneNumber = (data) => {
  return request_default(
    setURL(`${API_ROOT}/profile/phone-number`),
    setMethod("POST"),
    setData(data, SendCodeToPhoneNumberSchema)
  );
};
var verifyPhoneNumberCode = (data) => {
  return request_default(
    setURL(`${API_ROOT}/profile/phone-number/verify`),
    setMethod("POST"),
    setData(data, VerifyPhoneNumberCodeSchema)
  );
};

// src/profile/appTokens.ts
var getAppTokens = (params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${API_ROOT}/profile/apps`)
);
var getAppToken = (tokenId) => request_default(
  setMethod("GET"),
  setURL(`${API_ROOT}/profile/apps/${tokenId}`)
);
var deleteAppToken = (tokenId) => request_default(
  setURL(`${API_ROOT}/profile/apps/${tokenId}`),
  setMethod("DELETE")
);

// src/profile/accessTokens.ts
import { createPersonalAccessTokenSchema } from "@linode/validation/lib/profile.schema";
var getPersonalAccessTokens = (params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${API_ROOT}/profile/tokens`)
);
var getPersonalAccessToken = (id) => request_default(setMethod("GET"), setURL(`${API_ROOT}/profile/tokens/${id}`));
var createPersonalAccessToken = (data) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/profile/tokens`),
  setData(data, createPersonalAccessTokenSchema)
);
var updatePersonalAccessToken = (tokenId, data) => request_default(
  setURL(`${API_ROOT}/profile/tokens/${tokenId}`),
  setMethod("PUT"),
  setData(data, createPersonalAccessTokenSchema)
);
var deletePersonalAccessToken = (tokenId) => request_default(
  setURL(`${API_ROOT}/profile/tokens/${tokenId}`),
  setMethod("DELETE")
);

// src/regions/regions.ts
var getRegions = (params) => request_default(
  setURL(`${API_ROOT}/regions`),
  setMethod("GET"),
  setParams(params)
);
var getRegion = (regionID) => request_default(setURL(`${API_ROOT}/regions/${regionID}`), setMethod("GET"));

// src/stackscripts/stackscripts.ts
import {
  stackScriptSchema,
  updateStackScriptSchema
} from "@linode/validation/lib/stackscripts.schema";
var getStackScripts = (params, filter) => request_default(
  setURL(`${API_ROOT}/linode/stackscripts`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filter)
);
var getStackScript = (stackscriptId) => request_default(
  setURL(`${API_ROOT}/linode/stackscripts/${stackscriptId}`),
  setMethod("GET")
);
var createStackScript = (payload) => request_default(
  setURL(`${API_ROOT}/linode/stackscripts`),
  setMethod("POST"),
  setData(payload, stackScriptSchema)
);
var updateStackScript = (stackscriptId, payload) => request_default(
  setURL(`${API_ROOT}/linode/stackscripts/${stackscriptId}`),
  setMethod("PUT"),
  setData(payload, updateStackScriptSchema)
);
var deleteStackScript = (stackscriptId) => request_default(
  setURL(`${API_ROOT}/linode/stackscripts/${stackscriptId}`),
  setMethod("DELETE")
);

// src/support/support.ts
import {
  createReplySchema,
  createSupportTicketSchema
} from "@linode/validation/lib/support.schema";
var getTickets = (params, filter) => request_default(
  setURL(`${API_ROOT}/support/tickets`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filter)
);
var getTicket = (ticketID) => request_default(
  setURL(`${API_ROOT}/support/tickets/${ticketID}`),
  setMethod("GET")
);
var getTicketReplies = (ticketId, params, filter) => request_default(
  setURL(`${API_ROOT}/support/tickets/${ticketId}/replies`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filter)
);
var createSupportTicket = (data) => request_default(
  setURL(`${API_ROOT}/support/tickets`),
  setMethod("POST"),
  setData(data, createSupportTicketSchema)
);
var closeSupportTicket = (ticketId) => request_default(
  setURL(`${API_ROOT}/support/tickets/${ticketId}/close`),
  setMethod("POST")
);
var createReply = (data) => request_default(
  setURL(`${API_ROOT}/support/tickets/${data.ticket_id}/replies`),
  setMethod("POST"),
  setData(data, createReplySchema)
);
var uploadAttachment = (ticketId, formData) => request_default(
  setURL(`${API_ROOT}/support/tickets/${ticketId}/attachments`),
  setMethod("POST"),
  setData(formData)
);

// src/tags/tags.ts
var getTags = (params, filter) => request_default(
  setURL(`${API_ROOT}/tags`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filter)
);
var createTag = (data) => request_default(setURL(`${API_ROOT}/tags`), setMethod("POST"), setData(data));
var deleteTag = (label) => request_default(setURL(`${API_ROOT}/tags/${label}`), setMethod("DELETE"));

// src/vlans/vlans.ts
var getVlans = (params, filters) => request_default(
  setURL(`${BETA_API_ROOT}/networking/vlans`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filters)
);
var getVlan = (vlanID) => request_default(
  setURL(`${BETA_API_ROOT}/networking/vlans/${vlanID}`),
  setMethod("GET")
);

// src/volumes/volumes.ts
import {
  CloneVolumeSchema,
  CreateVolumeSchema,
  ResizeVolumeSchema,
  UpdateVolumeSchema
} from "@linode/validation/lib/volumes.schema";
var getVolume = (volumeId) => request_default(setURL(`${API_ROOT}/volumes/${volumeId}`), setMethod("GET"));
var getVolumes = (params, filters) => request_default(
  setURL(`${API_ROOT}/volumes`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filters)
);
var attachVolume = (volumeId, payload) => request_default(
  setURL(`${API_ROOT}/volumes/${volumeId}/attach`),
  setMethod("POST"),
  setData(payload)
);
var detachVolume = (volumeId) => request_default(
  setURL(`${API_ROOT}/volumes/${volumeId}/detach`),
  setMethod("POST")
);
var deleteVolume = (volumeId) => request_default(setURL(`${API_ROOT}/volumes/${volumeId}`), setMethod("DELETE"));
var cloneVolume = (volumeId, data) => request_default(
  setURL(`${API_ROOT}/volumes/${volumeId}/clone`),
  setMethod("POST"),
  setData(data, CloneVolumeSchema)
);
var resizeVolume = (volumeId, data) => request_default(
  setURL(`${API_ROOT}/volumes/${volumeId}/resize`),
  setMethod("POST"),
  /**
   * Unless we require the old size, we wont be able to validate. We know 10 is the
   * absolute min so it's safe to set here.
   */
  setData(data, ResizeVolumeSchema(10))
);
var updateVolume = (volumeId, data) => request_default(
  setURL(`${API_ROOT}/volumes/${volumeId}`),
  setMethod("PUT"),
  setData(data, UpdateVolumeSchema)
);
var createVolume = (data) => request_default(
  setURL(`${API_ROOT}/volumes`),
  setMethod("POST"),
  setData(data, CreateVolumeSchema)
);

// src/volumes/migrations.ts
var getVolumesMigrationQueue = (region) => request_default(
  setURL(`${BETA_API_ROOT}/regions/${region}/migration-queue`),
  setMethod("GET")
);
var migrateVolumes = (volumes) => {
  return request_default(
    setURL(`${BETA_API_ROOT}/volumes/migrate`),
    setMethod("POST"),
    setData({ volumes })
  );
};

// src/nodebalancers/nodebalancers.ts
import {
  NodeBalancerSchema,
  UpdateNodeBalancerSchema
} from "@linode/validation/lib/nodebalancers.schema";

// src/nodebalancers/utils.ts
var combineConfigNodeAddressAndPort = (data) => __spreadProps(__spreadValues({}, data), {
  nodes: data.nodes.map((n) => ({
    address: `${n.address}:${n.port}`,
    label: n.label,
    mode: n.mode,
    weight: n.weight
  }))
});
var combineNodeBalancerConfigNodeAddressAndPort = (data) => __spreadProps(__spreadValues({}, data), {
  configs: data.configs.map((c) => __spreadProps(__spreadValues({}, c), {
    nodes: c.nodes.map((n) => ({
      address: `${n.address}:${n.port}`,
      label: n.label,
      mode: n.mode,
      weight: n.weight
    }))
  }))
});
var mergeAddressAndPort = (node) => __spreadProps(__spreadValues({}, node), {
  address: `${node.address}:${node.port}`
});

// src/nodebalancers/nodebalancers.ts
var getNodeBalancers = (params, filters) => request_default(
  setURL(`${API_ROOT}/nodebalancers`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filters)
);
var getNodeBalancer = (nodeBalancerId) => request_default(
  setURL(`${API_ROOT}/nodebalancers/${nodeBalancerId}`),
  setMethod("GET")
);
var updateNodeBalancer = (nodeBalancerId, data) => request_default(
  setURL(`${API_ROOT}/nodebalancers/${nodeBalancerId}`),
  setMethod("PUT"),
  setData(data, UpdateNodeBalancerSchema)
);
var createNodeBalancer = (data) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/nodebalancers`),
  setData(
    data,
    NodeBalancerSchema,
    combineNodeBalancerConfigNodeAddressAndPort
  )
);
var deleteNodeBalancer = (nodeBalancerId) => request_default(
  setMethod("DELETE"),
  setURL(`${API_ROOT}/nodebalancers/${nodeBalancerId}`)
);
var getNodeBalancerStats = (nodeBalancerId) => {
  return request_default(
    setURL(`${API_ROOT}/nodebalancers/${nodeBalancerId}/stats`),
    setMethod("GET")
  );
};

// src/nodebalancers/nodebalancer-configs.ts
import {
  createNodeBalancerConfigSchema,
  UpdateNodeBalancerConfigSchema
} from "@linode/validation/lib/nodebalancers.schema";
var getNodeBalancerConfigs = (nodeBalancerId) => request_default(
  setURL(`${API_ROOT}/nodebalancers/${nodeBalancerId}/configs`),
  setMethod("GET")
);
var getNodeBalancerConfig = (nodeBalancerId, configId) => request_default(
  setURL(`${API_ROOT}/nodebalancers/${nodeBalancerId}/configs/${configId}`),
  setMethod("GET")
);
var createNodeBalancerConfig = (nodeBalancerId, data) => request_default(
  setMethod("POST"),
  setURL(`${API_ROOT}/nodebalancers/${nodeBalancerId}/configs`),
  setData(
    data,
    createNodeBalancerConfigSchema,
    combineConfigNodeAddressAndPort
  )
);
var updateNodeBalancerConfig = (nodeBalancerId, configId, data) => request_default(
  setMethod("PUT"),
  setURL(`${API_ROOT}/nodebalancers/${nodeBalancerId}/configs/${configId}`),
  setData(data, UpdateNodeBalancerConfigSchema)
);
var deleteNodeBalancerConfig = (nodeBalancerId, configId) => request_default(
  setMethod("DELETE"),
  setURL(`${API_ROOT}/nodebalancers/${nodeBalancerId}/configs/${configId}`)
);

// src/nodebalancers/nodebalancer-config-nodes.ts
import { nodeBalancerConfigNodeSchema } from "@linode/validation/lib/nodebalancers.schema";
var getNodeBalancerConfigNodes = (nodeBalancerId, configId) => request_default(
  setMethod("GET"),
  setURL(
    `${API_ROOT}/nodebalancers/${nodeBalancerId}/configs/${configId}/nodes`
  )
);
var getNodeBalancerConfigNode = (nodeBalancerId, configId, nodeId) => request_default(
  setMethod("GET"),
  setURL(
    `${API_ROOT}/nodebalancers/${nodeBalancerId}/configs/${configId}/nodes/${nodeId}`
  )
);
var createNodeBalancerConfigNode = (nodeBalancerId, configId, data) => request_default(
  setMethod("POST"),
  setURL(
    `${API_ROOT}/nodebalancers/${nodeBalancerId}/configs/${configId}/nodes`
  ),
  setData(data, nodeBalancerConfigNodeSchema, mergeAddressAndPort)
);
var updateNodeBalancerConfigNode = (nodeBalancerId, configId, nodeId, data) => request_default(
  setMethod("PUT"),
  setURL(
    `${API_ROOT}/nodebalancers/${nodeBalancerId}/configs/${configId}/nodes/${nodeId}`
  ),
  setData(data, nodeBalancerConfigNodeSchema, mergeAddressAndPort)
);
var deleteNodeBalancerConfigNode = (nodeBalancerId, configId, nodeId) => request_default(
  setMethod("DELETE"),
  setURL(
    `${API_ROOT}/nodebalancers/${nodeBalancerId}/configs/${configId}/nodes/${nodeId}`
  )
);

// src/databases/databases.ts
import {
  createDatabaseSchema,
  updateDatabaseSchema
} from "@linode/validation/lib/databases.schema";
var getDatabases = (params, filters) => request_default(
  setURL(`${BETA_API_ROOT}/databases/instances`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filters)
);
var getDatabaseTypes = (params, filters) => request_default(
  setURL(`${BETA_API_ROOT}/databases/types`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filters)
);
var getDatabaseType = (typeSlug) => request_default(
  setURL(`${BETA_API_ROOT}/databases/types/${typeSlug}`),
  setMethod("GET")
);
var getDatabaseEngines = (params, filters) => request_default(
  setURL(`${BETA_API_ROOT}/databases/engines`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filters)
);
var getDatabaseEngine = (engineSlug) => request_default(
  setURL(`${BETA_API_ROOT}/databases/engines/${engineSlug}`),
  setMethod("GET")
);
var createDatabase = (engine = "mysql", data) => request_default(
  setURL(`${BETA_API_ROOT}/databases/${engine}/instances`),
  setMethod("POST"),
  setData(data, createDatabaseSchema)
);
var getEngineDatabases = (engine, params, filters) => request_default(
  setURL(`${BETA_API_ROOT}/databases/${engine}/instances`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filters)
);
var getEngineDatabase = (engine, databaseID) => request_default(
  setURL(`${BETA_API_ROOT}/databases/${engine}/instances/${databaseID}`),
  setMethod("GET")
);
var updateDatabase = (engine, databaseID, data) => request_default(
  setURL(`${BETA_API_ROOT}/databases/${engine}/instances/${databaseID}`),
  setMethod("PUT"),
  setData(data, updateDatabaseSchema)
);
var deleteDatabase = (engine, databaseID) => request_default(
  setURL(`${BETA_API_ROOT}/databases/${engine}/instances/${databaseID}`),
  setMethod("DELETE")
);
var getDatabaseBackups = (engine, databaseID, params, filters) => request_default(
  setURL(`${BETA_API_ROOT}/databases/${engine}/instances/${databaseID}/backups`),
  setMethod("GET"),
  setParams(params),
  setXFilter(filters)
);
var getDatabaseBackup = (engine, databaseID, backupID) => request_default(
  setURL(
    `${BETA_API_ROOT}/databases/${engine}/instances/${databaseID}/backups/${backupID}`
  ),
  setMethod("GET")
);
var restoreWithBackup = (engine, databaseID, backupID) => request_default(
  setURL(
    `${BETA_API_ROOT}/databases/${engine}/instances/${databaseID}/backups/${backupID}/restore`
  ),
  setMethod("POST")
);
var getDatabaseCredentials = (engine, databaseID) => request_default(
  setURL(
    `${BETA_API_ROOT}/databases/${engine}/instances/${databaseID}/credentials`
  ),
  setMethod("GET")
);
var resetDatabaseCredentials = (engine, databaseID) => request_default(
  setURL(
    `${BETA_API_ROOT}/databases/${engine}/instances/${databaseID}/credentials/reset`
  ),
  setMethod("POST")
);
var getSSLFields = (engine, databaseID) => request_default(
  setURL(`${BETA_API_ROOT}/databases/${engine}/instances/${databaseID}/ssl`),
  setMethod("GET")
);

// src/entity-transfers/transfers.ts
import { CreateTransferSchema } from "@linode/validation/lib/transfers.schema";
var getEntityTransfers = (params, filters) => request_default(
  setMethod("GET"),
  setParams(params),
  setXFilter(filters),
  setURL(`${BETA_API_ROOT}/account/entity-transfers`)
);
var getEntityTransfer = (token) => request_default(
  setMethod("GET"),
  setURL(`${BETA_API_ROOT}/account/entity-transfers/${token}`)
);
var createEntityTransfer = (data) => request_default(
  setMethod("POST"),
  setData(data, CreateTransferSchema),
  setURL(`${BETA_API_ROOT}/account/entity-transfers`)
);
var acceptEntityTransfer = (token) => request_default(
  setMethod("POST"),
  setURL(`${BETA_API_ROOT}/account/entity-transfers/${token}/accept`)
);
var cancelTransfer = (token) => request_default(
  setMethod("DELETE"),
  setURL(`${BETA_API_ROOT}/account/entity-transfers/${token}`)
);
export {
  acceptEntityTransfer,
  addFirewallDevice,
  addPaymentMethod,
  addPromotion,
  allocateIPAddress,
  allocateIp,
  assignAddresses,
  attachVolume,
  baseRequest,
  cancelAccount,
  cancelBackups,
  cancelObjectStorage,
  cancelTransfer,
  changeLinodeDiskPassword,
  changeLinodePassword,
  cloneDomain,
  cloneLinode,
  cloneLinodeDisk,
  cloneVolume,
  closeSupportTicket,
  confirmTwoFactor,
  convertYupToLinodeErrors,
  createBucket,
  createContact,
  createCredential,
  createDatabase,
  createDomain,
  createDomainRecord,
  createEntityTransfer,
  createFirewall,
  createIPv6Range,
  createImage,
  createKubernetesCluster,
  createLinode,
  createLinodeConfig,
  createLinodeDisk,
  createLongviewClient,
  createNodeBalancer,
  createNodeBalancerConfig,
  createNodeBalancerConfigNode,
  createNodePool,
  createOAuthClient,
  createObjectStorageKeys,
  createPersonalAccessToken,
  createReply,
  createSSHKey,
  createServiceMonitor,
  createStackScript,
  createSupportTicket,
  createTag,
  createUser,
  createVolume,
  deleteAppToken,
  deleteBucket,
  deleteContact,
  deleteCredential,
  deleteDatabase,
  deleteDomain,
  deleteDomainRecord,
  deleteFirewall,
  deleteFirewallDevice,
  deleteImage,
  deleteKubernetesCluster,
  deleteLinode,
  deleteLinodeConfig,
  deleteLinodeDisk,
  deleteLongviewClient,
  deleteNodeBalancer,
  deleteNodeBalancerConfig,
  deleteNodeBalancerConfigNode,
  deleteNodePool,
  deleteOAuthClient,
  deletePaymentMethod,
  deletePersonalAccessToken,
  deleteSSHKey,
  deleteSSLCert,
  deleteServiceMonitor,
  deleteStackScript,
  deleteTag,
  deleteTrustedDevice,
  deleteUser,
  deleteVolume,
  detachVolume,
  disableFirewall,
  disableServiceMonitor,
  disableTwoFactor,
  enableBackups,
  enableFirewall,
  enableManaged,
  enableServiceMonitor,
  executePaypalPayment,
  getAccountAgreements,
  getAccountInfo,
  getAccountLogin,
  getAccountLogins,
  getAccountMaintenance,
  getAccountSettings,
  getActiveLongviewPlan,
  getAppToken,
  getAppTokens,
  getBucket,
  getBucketAccess,
  getBuckets,
  getBucketsInCluster,
  getClientToken,
  getClusters,
  getCredentials,
  getDatabaseBackup,
  getDatabaseBackups,
  getDatabaseCredentials,
  getDatabaseEngine,
  getDatabaseEngines,
  getDatabaseType,
  getDatabaseTypes,
  getDatabases,
  getDeprecatedLinodeTypes,
  getDomain,
  getDomainRecord,
  getDomainRecords,
  getDomains,
  getEngineDatabase,
  getEngineDatabases,
  getEntityTransfer,
  getEntityTransfers,
  getEvent,
  getEvents,
  getFirewall,
  getFirewallDevice,
  getFirewallDevices,
  getFirewallRules,
  getFirewalls,
  getGrants,
  getIP,
  getIPs,
  getIPv6Pools,
  getIPv6RangeInfo,
  getIPv6Ranges,
  getImage,
  getImages,
  getInvoice,
  getInvoiceItems,
  getInvoices,
  getKubeConfig,
  getKubernetesCluster,
  getKubernetesClusterDashboard,
  getKubernetesClusterEndpoints,
  getKubernetesClusters,
  getKubernetesVersion,
  getKubernetesVersions,
  getLinode,
  getLinodeBackups,
  getLinodeConfig,
  getLinodeConfigs,
  getLinodeDisk,
  getLinodeDisks,
  getLinodeFirewalls,
  getLinodeIPs,
  getLinodeKernel,
  getLinodeKernels,
  getLinodeLishToken,
  getLinodeSettings,
  getLinodeStats,
  getLinodeStatsByDate,
  getLinodeTransfer,
  getLinodeTransferByDate,
  getLinodeTypes,
  getLinodeVolumes,
  getLinodes,
  getLogins,
  getLongviewClients,
  getLongviewSubscriptions,
  getManagedContacts,
  getManagedIssues,
  getManagedStats,
  getMyGrants,
  getNetworkUtilization,
  getNodeBalancer,
  getNodeBalancerConfig,
  getNodeBalancerConfigNode,
  getNodeBalancerConfigNodes,
  getNodeBalancerConfigs,
  getNodeBalancerStats,
  getNodeBalancers,
  getNodePool,
  getNodePools,
  getNotifications,
  getOAuthClient,
  getOAuthClients,
  getObjectACL,
  getObjectList,
  getObjectStorageKeys,
  getObjectURL,
  getPaymentMethod,
  getPaymentMethods,
  getPayments,
  getPersonalAccessToken,
  getPersonalAccessTokens,
  getProfile,
  getRegion,
  getRegions,
  getSSHKey,
  getSSHKeys,
  getSSHPubKey,
  getSSLCert,
  getSSLFields,
  getSecurityQuestions,
  getServices,
  getStackScript,
  getStackScripts,
  getTFAToken,
  getTags,
  getTicket,
  getTicketReplies,
  getTickets,
  getTrustedDevices,
  getType,
  getUser,
  getUserPreferences,
  getUsers,
  getVlan,
  getVlans,
  getVolume,
  getVolumes,
  getVolumesMigrationQueue,
  importZone,
  isEmpty,
  linodeBoot,
  linodeReboot,
  linodeShutdown,
  listGrants,
  makeDefaultPaymentMethod,
  makePayment,
  markEventRead,
  markEventSeen,
  migrateVolumes,
  rebuildLinode,
  recycleAllNodes,
  recycleClusterNodes,
  recycleNode,
  removeIPAddress,
  removeIPv6Range,
  rescueLinode,
  rescueMetalLinode,
  resetDatabaseCredentials,
  resetKubeConfig,
  resetOAuthClientSecret,
  resizeLinode,
  resizeLinodeDisk,
  resizeVolume,
  restoreBackup,
  restoreWithBackup,
  revokeObjectStorageKey,
  saveCreditCard,
  scheduleOrQueueMigration,
  sendCodeToPhoneNumber,
  setToken,
  shareAddresses,
  shareAddressesv4,
  signAgreement,
  smsOptOut,
  stagePaypalPayment,
  startMutation,
  takeSnapshot,
  updateAccountInfo,
  updateAccountSettings,
  updateActiveLongviewPlan,
  updateBucketAccess,
  updateContact,
  updateCredential,
  updateDatabase,
  updateDomain,
  updateDomainRecord,
  updateFirewall,
  updateFirewallRules,
  updateGrants,
  updateIP,
  updateImage,
  updateKubernetesCluster,
  updateLinode,
  updateLinodeConfig,
  updateLinodeDisk,
  updateLinodeSettings,
  updateLongviewClient,
  updateNodeBalancer,
  updateNodeBalancerConfig,
  updateNodeBalancerConfigNode,
  updateNodePool,
  updateOAuthClient,
  updateObjectACL,
  updateObjectStorageKey,
  updatePassword,
  updatePersonalAccessToken,
  updateProfile,
  updateSSHKey,
  updateSecurityQuestions,
  updateServiceMonitor,
  updateStackScript,
  updateUser,
  updateUserPreferences,
  updateVolume,
  uploadAttachment,
  uploadImage,
  uploadSSLCert,
  verifyPhoneNumberCode
};
