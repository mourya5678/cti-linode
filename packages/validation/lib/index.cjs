"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AttachVolumeSchema: () => AttachVolumeSchema,
  AutoscaleNodePoolSchema: () => AutoscaleNodePoolSchema,
  CloneVolumeSchema: () => CloneVolumeSchema,
  CreateBucketSchema: () => CreateBucketSchema,
  CreateFirewallDeviceSchema: () => CreateFirewallDeviceSchema,
  CreateFirewallSchema: () => CreateFirewallSchema,
  CreateLinodeConfigSchema: () => CreateLinodeConfigSchema,
  CreateLinodeDiskFromImageSchema: () => CreateLinodeDiskFromImageSchema,
  CreateLinodeDiskSchema: () => CreateLinodeDiskSchema,
  CreateLinodeSchema: () => CreateLinodeSchema,
  CreateSnapshotSchema: () => CreateSnapshotSchema,
  CreateTransferSchema: () => CreateTransferSchema,
  CreateUserSchema: () => CreateUserSchema,
  CreateVolumeSchema: () => CreateVolumeSchema,
  CreditCardSchema: () => CreditCardSchema,
  ExecutePaypalPaymentSchema: () => ExecutePaypalPaymentSchema,
  FirewallDeviceSchema: () => FirewallDeviceSchema,
  FirewallRuleSchema: () => FirewallRuleSchema,
  FirewallRuleTypeSchema: () => FirewallRuleTypeSchema,
  IPAllocationSchema: () => IPAllocationSchema,
  IP_ERROR_MESSAGE: () => IP_ERROR_MESSAGE,
  NodeBalancerSchema: () => NodeBalancerSchema,
  PaymentMethodSchema: () => PaymentMethodSchema,
  PaymentSchema: () => PaymentSchema,
  PromoCodeSchema: () => PromoCodeSchema,
  RebuildLinodeFromStackScriptSchema: () => RebuildLinodeFromStackScriptSchema,
  RebuildLinodeSchema: () => RebuildLinodeSchema,
  ResizeLinodeDiskSchema: () => ResizeLinodeDiskSchema,
  ResizeVolumeSchema: () => ResizeVolumeSchema,
  SecurityQuestionsSchema: () => SecurityQuestionsSchema,
  SendCodeToPhoneNumberSchema: () => SendCodeToPhoneNumberSchema,
  StagePaypalPaymentSchema: () => StagePaypalPaymentSchema,
  UpdateAccountSettingsSchema: () => UpdateAccountSettingsSchema,
  UpdateBucketAccessSchema: () => UpdateBucketAccessSchema,
  UpdateFirewallSchema: () => UpdateFirewallSchema,
  UpdateGrantSchema: () => UpdateGrantSchema,
  UpdateLinodeConfigSchema: () => UpdateLinodeConfigSchema,
  UpdateLinodeDiskSchema: () => UpdateLinodeDiskSchema,
  UpdateLinodePasswordSchema: () => UpdateLinodePasswordSchema,
  UpdateLinodeSchema: () => UpdateLinodeSchema,
  UpdateNodeBalancerConfigSchema: () => UpdateNodeBalancerConfigSchema,
  UpdateNodeBalancerSchema: () => UpdateNodeBalancerSchema,
  UpdateUserSchema: () => UpdateUserSchema,
  UpdateVolumeSchema: () => UpdateVolumeSchema,
  UploadCertificateSchema: () => UploadCertificateSchema,
  VerifyPhoneNumberCodeSchema: () => VerifyPhoneNumberCodeSchema,
  allocateIPSchema: () => allocateIPSchema,
  assignAddressesSchema: () => assignAddressesSchema,
  baseImageSchema: () => baseImageSchema,
  clusterLabelSchema: () => clusterLabelSchema,
  createContactSchema: () => createContactSchema,
  createCredentialSchema: () => createCredentialSchema,
  createDatabaseSchema: () => createDatabaseSchema,
  createDomainSchema: () => createDomainSchema,
  createImageSchema: () => createImageSchema,
  createKubeClusterSchema: () => createKubeClusterSchema,
  createNodeBalancerConfigSchema: () => createNodeBalancerConfigSchema,
  createOAuthClientSchema: () => createOAuthClientSchema,
  createObjectStorageKeysSchema: () => createObjectStorageKeysSchema,
  createPersonalAccessTokenSchema: () => createPersonalAccessTokenSchema,
  createRecordSchema: () => createRecordSchema,
  createReplySchema: () => createReplySchema,
  createSSHKeySchema: () => createSSHKeySchema,
  createServiceMonitorSchema: () => createServiceMonitorSchema,
  createSupportTicketSchema: () => createSupportTicketSchema,
  credentialLabel: () => credentialLabel,
  credentialPassword: () => credentialPassword,
  credentialUsername: () => credentialUsername,
  enableTwoFactorSchema: () => enableTwoFactorSchema,
  importZoneSchema: () => importZoneSchema,
  ipAddress: () => ipAddress,
  linodeInterfaceSchema: () => linodeInterfaceSchema,
  longviewClientCreate: () => longviewClientCreate,
  nodeBalancerConfigNodeSchema: () => nodeBalancerConfigNodeSchema,
  nodePoolSchema: () => nodePoolSchema,
  shareAddressesSchema: () => shareAddressesSchema,
  sshSettingSchema: () => sshSettingSchema,
  stackScriptSchema: () => stackScriptSchema,
  updateAccountSchema: () => updateAccountSchema,
  updateCredentialSchema: () => updateCredentialSchema,
  updateDatabaseSchema: () => updateDatabaseSchema,
  updateDomainSchema: () => updateDomainSchema,
  updateIPSchema: () => updateIPSchema,
  updateImageSchema: () => updateImageSchema,
  updateManagedLinodeSchema: () => updateManagedLinodeSchema,
  updateOAuthClientSchema: () => updateOAuthClientSchema,
  updatePasswordSchema: () => updatePasswordSchema,
  updateProfileSchema: () => updateProfileSchema,
  updateRecordSchema: () => updateRecordSchema,
  updateStackScriptSchema: () => updateStackScriptSchema,
  uploadImageSchema: () => uploadImageSchema,
  validateFirewallPorts: () => validateFirewallPorts,
  validateIP: () => validateIP
});
module.exports = __toCommonJS(src_exports);

// src/account.schema.ts
var import_yup = require("yup");
var updateAccountSchema = (0, import_yup.object)({
  email: (0, import_yup.string)().max(128, "Email must be 128 characters or less."),
  address_1: (0, import_yup.string)().max(64, "Address must be 64 characters or less."),
  city: (0, import_yup.string)().max(24, "City must be 24 characters or less."),
  company: (0, import_yup.string)().max(128, "Company must be 128 characters or less."),
  country: (0, import_yup.string)().min(2, "Country code must be two letters.").max(2, "Country code must be two letters."),
  first_name: (0, import_yup.string)().max(50, "First name must be 50 characters or less."),
  last_name: (0, import_yup.string)().max(50, "Last name must be 50 characters or less."),
  address_2: (0, import_yup.string)().max(64, "Address must be 64 characters or less."),
  phone: (0, import_yup.string)().max(32, "Phone number must be 32 characters or less."),
  state: (0, import_yup.string)().max(24, "State must be 24 characters or less."),
  tax_id: (0, import_yup.string)().max(100, "Tax ID must be 100 characters or less."),
  zip: (0, import_yup.string)().max(16, "Zip code must be 16 characters or less.")
});
var createOAuthClientSchema = (0, import_yup.object)({
  label: (0, import_yup.string)().required("Label is required.").min(1, "Label must be between 1 and 512 characters.").max(512, "Label must be between 1 and 512 characters."),
  redirect_uri: (0, import_yup.string)().required("Redirect URI is required.")
});
var updateOAuthClientSchema = (0, import_yup.object)({
  label: (0, import_yup.string)().min(1, "Label must be between 1 and 512 characters.").max(512, "Label must be between 1 and 512 characters."),
  redirect_uri: (0, import_yup.string)()
});
var StagePaypalPaymentSchema = (0, import_yup.object)({
  cancel_url: (0, import_yup.string)().required(
    "You must provide a URL to redirect on cancel."
  ),
  redirect_url: (0, import_yup.string)().required("You must provide a redirect URL."),
  usd: (0, import_yup.string)().required("USD payment amount is required.")
});
var ExecutePaypalPaymentSchema = (0, import_yup.object)({
  payer_id: (0, import_yup.string)().required("You must provide a payer ID."),
  payment_id: (0, import_yup.string)().required("You must provide a payment ID (from Paypal).")
});
var PaymentSchema = (0, import_yup.object)({
  usd: (0, import_yup.string)().required("USD payment amount is required.")
});
var CreditCardSchema = (0, import_yup.object)({
  card_number: (0, import_yup.string)().required("Credit card number is required.").min(13, "Credit card number must be between 13 and 23 characters.").max(23, "Credit card number must be between 13 and 23 characters."),
  expiry_year: (0, import_yup.number)().test(
    "length",
    "Expiration year must be 2 or 4 digits.",
    (value) => [2, 4].includes(String(value).length)
  ).required("Expiration year is required.").typeError("Expiration year must be a number.").min((/* @__PURE__ */ new Date()).getFullYear(), "Expiration year must not be in the past.").max((/* @__PURE__ */ new Date()).getFullYear() + 20, "Expiry too far in the future."),
  expiry_month: (0, import_yup.number)().required("Expiration month is required.").typeError("Expiration month must be a number.").min(1, "Expiration month must be a number from 1 to 12.").max(12, "Expiration month must be a number from 1 to 12."),
  cvv: (0, import_yup.string)().required("Security code is required.").min(3, "Security code must be between 3 and 4 characters.").max(4, "Security code must be between 3 and 4 characters.")
});
var PaymentMethodSchema = (0, import_yup.object)({
  type: (0, import_yup.mixed)().oneOf(
    ["credit_card", "payment_method_nonce"],
    "Type must be credit_card or payment_method_nonce."
  ),
  data: (0, import_yup.object)().when("type", {
    is: "credit_card",
    then: CreditCardSchema,
    otherwise: (0, import_yup.object)({
      nonce: (0, import_yup.string)().required("Payment nonce is required.")
    })
  }),
  is_default: (0, import_yup.boolean)().required(
    "You must indicate if this should be your default method of payment."
  )
});
var CreateUserSchema = (0, import_yup.object)({
  username: (0, import_yup.string)().required("Username is required.").min(3, "Username must be between 3 and 32 characters.").max(32, "Username must be between 3 and 32 characters."),
  email: (0, import_yup.string)().required("Email address is required.").email("Must be a valid email address."),
  restricted: (0, import_yup.boolean)().required(
    "You must indicate if this user should have restricted access."
  )
});
var UpdateUserSchema = (0, import_yup.object)({
  username: (0, import_yup.string)().min(3, "Username must be between 3 and 32 characters.").max(32, "Username must be between 3 and 32 characters."),
  email: (0, import_yup.string)().email("Must be a valid email address."),
  restricted: (0, import_yup.boolean)()
});
var GrantSchema = (0, import_yup.object)({
  id: (0, import_yup.number)().required("ID is required."),
  permissions: (0, import_yup.mixed)().oneOf(
    [null, "read_only", "read_write"],
    "Permissions must be null, read_only, or read_write."
  )
});
var UpdateGrantSchema = (0, import_yup.object)({
  global: (0, import_yup.object)(),
  linode: (0, import_yup.array)().of(GrantSchema),
  domain: (0, import_yup.array)().of(GrantSchema),
  nodebalancer: (0, import_yup.array)().of(GrantSchema),
  image: (0, import_yup.array)().of(GrantSchema),
  longview: (0, import_yup.array)().of(GrantSchema),
  stackscript: (0, import_yup.array)().of(GrantSchema),
  volume: (0, import_yup.array)().of(GrantSchema)
});
var UpdateAccountSettingsSchema = (0, import_yup.object)({
  network_helper: (0, import_yup.boolean)(),
  backups_enabled: (0, import_yup.boolean)(),
  managed: (0, import_yup.boolean)()
});
var PromoCodeSchema = (0, import_yup.object)({
  promo_code: (0, import_yup.string)().required("Promo code is required.").min(1, "Promo code must be between 1 and 32 characters.").max(32, "Promo code must be between 1 and 32 characters.")
});

// src/buckets.schema.ts
var import_yup2 = require("yup");
var CreateBucketSchema = (0, import_yup2.object)({
  label: (0, import_yup2.string)().required("Label is required.").matches(/^\S*$/, "Label must not contain spaces.").ensure().min(3, "Label must be between 3 and 63 characters.").max(63, "Label must be between 3 and 63 characters."),
  cluster: (0, import_yup2.string)().required("Cluster is required.")
});
var UploadCertificateSchema = (0, import_yup2.object)({
  certificate: (0, import_yup2.string)().required("Certificate is required."),
  private_key: (0, import_yup2.string)().required("Private key is required.")
});
var UpdateBucketAccessSchema = (0, import_yup2.object)({
  acl: (0, import_yup2.string)().oneOf([
    "private",
    "public-read",
    "authenticated-read",
    "public-read-write"
  ]).notRequired(),
  cors_enabled: (0, import_yup2.boolean)().notRequired()
});

// src/databases.schema.ts
var import_yup3 = require("yup");
var import_yup4 = require("yup");
var LABEL_MESSAGE = "Label must be between 3 and 32 characters";
var createDatabaseSchema = (0, import_yup4.object)({
  label: (0, import_yup4.string)().required("Label is required").min(3, LABEL_MESSAGE).max(32, LABEL_MESSAGE),
  engine: (0, import_yup4.string)().required("Database Engine is required"),
  region: (0, import_yup4.string)().required("Region is required"),
  type: (0, import_yup4.string)().required("Type is required"),
  cluster_size: (0, import_yup3.number)().oneOf([1, 3], "Nodes are required").required("Nodes are required"),
  replication_type: (0, import_yup4.string)().when("engine", {
    is: (engine) => Boolean(engine.match(/mysql|postgres/g)),
    then: (0, import_yup4.string)().when("engine", {
      is: (engine) => Boolean(engine.match(/mysql/)),
      then: (0, import_yup4.string)().oneOf(["none", "semi_synch", "asynch"])
    }).when("engine", {
      is: (engine) => Boolean(engine.match(/postgres/)),
      then: (0, import_yup4.string)().oneOf(["none", "synch", "asynch"])
    }).required("Replication Type is required"),
    otherwise: (0, import_yup4.string)().notRequired().nullable(true)
  }),
  replication_commit_type: (0, import_yup4.string)().when("engine", {
    is: (engine) => Boolean(engine.match(/postgres/)),
    then: (0, import_yup4.string)().oneOf(["off", "on", "local", "remote_write", "remote_apply"]).required(),
    otherwise: (0, import_yup4.string)().notRequired().nullable(true)
  }),
  storage_engine: (0, import_yup4.string)().when("engine", {
    is: (engine) => Boolean(engine.match(/mongodb/)),
    then: (0, import_yup4.string)().oneOf(["wiredtiger", "mmapv1"]).notRequired(),
    otherwise: (0, import_yup4.string)().notRequired().nullable(true)
  }),
  compression_type: (0, import_yup4.string)().when("engine", {
    is: (engine) => Boolean(engine.match(/mongodb/)),
    then: (0, import_yup4.string)().oneOf(["none", "snappy", "zlib"]).notRequired(),
    otherwise: (0, import_yup4.string)().notRequired().nullable(true)
  })
});
var updateDatabaseSchema = (0, import_yup4.object)({
  label: (0, import_yup4.string)().notRequired().min(3, LABEL_MESSAGE).max(32, LABEL_MESSAGE),
  allow_list: (0, import_yup4.array)().of((0, import_yup4.string)()).required("An IPv4 address is required"),
  updates: (0, import_yup4.object)().notRequired().shape({
    frequency: (0, import_yup4.string)().oneOf(["weekly", "monthly"]),
    duration: (0, import_yup3.number)(),
    hour_of_day: (0, import_yup3.number)(),
    day_of_week: (0, import_yup3.number)(),
    week_of_month: (0, import_yup3.number)().nullable(true)
  }).nullable(true)
});

// src/domains.schema.ts
var import_yup5 = require("yup");
var importZoneSchema = (0, import_yup5.object)({
  domain: (0, import_yup5.string)().required("Domain is required."),
  remote_nameserver: (0, import_yup5.string)().required("Remote nameserver is required.")
});
var domainSchemaBase = (0, import_yup5.object)().shape({
  domain: (0, import_yup5.string)().matches(
    /([a-zA-Z0-9-_]+\.)+([a-zA-Z]{2,3}\.)?([a-zA-Z]{2,16}|XN--[a-zA-Z0-9]+)/,
    "Domain is not valid."
  ),
  status: (0, import_yup5.mixed)().oneOf(["disabled", "active", "edit_mode", "has_errors"]),
  tags: (0, import_yup5.array)(),
  description: (0, import_yup5.string)().min(1, "Description must be between 1 and 253 characters.").max(253, "Description must be between 1 and 253 characters."),
  retry_sec: (0, import_yup5.number)(),
  master_ips: (0, import_yup5.array)().of((0, import_yup5.string)()),
  axfr_ips: (0, import_yup5.array)().of((0, import_yup5.string)()).typeError("Must be a comma-separated list of IP addresses."),
  expire_sec: (0, import_yup5.number)(),
  refresh_sec: (0, import_yup5.number)(),
  ttl_sec: (0, import_yup5.number)()
});
var createDomainSchema = domainSchemaBase.shape({
  domain: (0, import_yup5.string)().required("Domain is required.").matches(
    /([a-zA-Z0-9-_]+\.)+([a-zA-Z]{2,3}\.)?([a-zA-Z]{2,16}|XN--[a-zA-Z0-9]+)/,
    "Domain is not valid."
  ),
  tags: (0, import_yup5.array)().of((0, import_yup5.string)()),
  type: (0, import_yup5.mixed)().required().oneOf(["master", "slave"]),
  soa_email: (0, import_yup5.string)().when("type", {
    is: "master",
    then: (0, import_yup5.string)().required("SOA Email is required."),
    otherwise: (0, import_yup5.string)()
  }).email("SOA Email is not valid."),
  master_ips: (0, import_yup5.array)().of((0, import_yup5.string)()).when("type", {
    is: "slave",
    then: (0, import_yup5.array)().of((0, import_yup5.string)()).compact().ensure().required("At least one primary IP address is required.").min(1, "At least one primary IP address is required."),
    otherwise: (0, import_yup5.array)().of((0, import_yup5.string)())
  })
});
var updateDomainSchema = domainSchemaBase.shape({
  domainId: (0, import_yup5.number)(),
  soa_email: (0, import_yup5.string)().email("SOA Email is not valid."),
  axfr_ips: (0, import_yup5.array)().of((0, import_yup5.string)()),
  tags: (0, import_yup5.array)().of((0, import_yup5.string)())
});

// src/firewalls.schema.ts
var import_ipaddr = __toESM(require("ipaddr.js"), 1);
var import_yup6 = require("yup");
var IP_ERROR_MESSAGE = "Must be a valid IPv4 or IPv6 address or range.";
var validateIP = (ipAddress2) => {
  if (!ipAddress2) {
    return false;
  }
  const [, mask] = ipAddress2.split("/");
  try {
    if (mask) {
      import_ipaddr.default.parseCIDR(ipAddress2);
    } else {
      import_ipaddr.default.parse(ipAddress2);
    }
  } catch (err) {
    if (ipAddress2 !== "") {
      return false;
    }
  }
  return true;
};
var CreateFirewallDeviceSchema = (0, import_yup6.object)({
  linodes: (0, import_yup6.array)().of((0, import_yup6.number)()),
  nodebalancers: (0, import_yup6.array)().of((0, import_yup6.number)())
});
var ipAddress = (0, import_yup6.string)().test({
  name: "validateIP",
  message: IP_ERROR_MESSAGE,
  test: validateIP
});
var validateFirewallPorts = (0, import_yup6.string)().matches(
  /^([0-9\-]+,?\s?)+$/,
  "Ports must be an integer, range of integers, or a comma-separated list of integers."
);
var validFirewallRuleProtocol = ["ALL", "TCP", "UDP", "ICMP", "IPENCAP"];
var FirewallRuleTypeSchema = (0, import_yup6.object)().shape({
  action: (0, import_yup6.mixed)().oneOf(["ACCEPT", "DROP"]).required("Action is required"),
  protocol: (0, import_yup6.mixed)().oneOf(validFirewallRuleProtocol).required("Protocol is required."),
  ports: (0, import_yup6.string)().when("protocol", {
    is: (val) => val !== "ICMP" && val !== "IPENCAP",
    then: validateFirewallPorts,
    // Workaround to get the test to fail if ports is defined when protocol === ICMP or IPENCAP
    otherwise: (0, import_yup6.string)().test({
      name: "protocol",
      message: "Ports are not allowed for ICMP and IPENCAP protocols.",
      test: (value) => typeof value === "undefined"
    })
  }),
  addresses: (0, import_yup6.object)().shape({
    ipv4: (0, import_yup6.array)().of(ipAddress).nullable(true),
    ipv6: (0, import_yup6.array)().of(ipAddress).nullable(true)
  }).strict(true).nullable(true)
});
var FirewallRuleSchema = (0, import_yup6.object)().shape({
  inbound: (0, import_yup6.array)(FirewallRuleTypeSchema).nullable(true),
  outbound: (0, import_yup6.array)(FirewallRuleTypeSchema).nullable(true),
  inbound_policy: (0, import_yup6.mixed)().oneOf(["ACCEPT", "DROP"]).required("Inbound policy is required."),
  outbound_policy: (0, import_yup6.mixed)().oneOf(["ACCEPT", "DROP"]).required("Outbound policy is required.")
});
var CreateFirewallSchema = (0, import_yup6.object)().shape({
  label: (0, import_yup6.string)().required("Label is required.").min(3, "Label must be between 3 and 32 characters.").max(32, "Label must be between 3 and 32 characters."),
  // Label validation on the back end is more complicated, we only do basic checks here.
  tags: (0, import_yup6.array)().of((0, import_yup6.string)()),
  rules: FirewallRuleSchema
});
var UpdateFirewallSchema = (0, import_yup6.object)().shape({
  label: (0, import_yup6.string)(),
  tags: (0, import_yup6.array)().of((0, import_yup6.string)()),
  status: (0, import_yup6.string)().oneOf(["enabled", "disabled"])
  // 'deleted' is also a status but it's not settable
});
var FirewallDeviceSchema = (0, import_yup6.object)({
  type: (0, import_yup6.string)().oneOf(["linode", "nodebalancer"]).required("Device type is required."),
  id: (0, import_yup6.number)().required("ID is required.")
});

// src/images.schema.ts
var import_yup7 = require("yup");
var labelSchema = (0, import_yup7.string)().max(50, "Length must be 50 characters or less.").matches(
  /^[a-zA-Z0-9,.?\-_\s']+$/,
  "Image labels cannot contain special characters."
);
var baseImageSchema = (0, import_yup7.object)().shape({
  label: labelSchema.notRequired(),
  description: (0, import_yup7.string)().notRequired().min(1).max(65e3)
});
var createImageSchema = baseImageSchema.shape({
  disk_id: (0, import_yup7.number)().typeError("Disk is required.").required("Disk is required.")
});
var uploadImageSchema = baseImageSchema.shape({
  label: labelSchema.required("Label is required."),
  region: (0, import_yup7.string)().required("Region is required.")
});
var updateImageSchema = (0, import_yup7.object)().shape({
  label: (0, import_yup7.string)().notRequired().max(50, "Length must be 50 characters or less.").matches(
    /^[a-zA-Z0-9,.?\-_\s']+$/,
    "Image labels cannot contain special characters."
  ),
  description: (0, import_yup7.string)().notRequired().max(65e3, "Length must be 65000 characters or less.")
});

// src/kubernetes.schema.ts
var import_yup8 = require("yup");
var nodePoolSchema = (0, import_yup8.object)().shape({
  type: (0, import_yup8.string)(),
  count: (0, import_yup8.number)()
});
var AutoscaleNodePoolSchema = (0, import_yup8.object)({
  enabled: (0, import_yup8.boolean)(),
  min: (0, import_yup8.number)().when("enabled", {
    is: true,
    then: (0, import_yup8.number)().required().test(
      "min",
      "Minimum must be between 1 and 99 nodes and cannot be greater than Maximum.",
      function(min) {
        if (!min) {
          return false;
        }
        if (min < 1 || min > 99) {
          return false;
        }
        if (min > this.parent["max"]) {
          return false;
        }
        return true;
      }
    )
  }),
  max: (0, import_yup8.number)().when("enabled", {
    is: true,
    then: (0, import_yup8.number)().required().min(1, "Maximum must be between 1 and 100 nodes.").max(100, "Maximum must be between 1 and 100 nodes.")
  })
});
var clusterLabelSchema = (0, import_yup8.string)().required("Label is required.").matches(
  /^[a-zA-Z0-9-]+$/,
  "Cluster labels cannot contain special characters, spaces, or underscores."
).min(3, "Length must be between 3 and 32 characters.").max(32, "Length must be between 3 and 32 characters.");
var createKubeClusterSchema = (0, import_yup8.object)().shape({
  label: clusterLabelSchema,
  region: (0, import_yup8.string)().required("Region is required."),
  k8s_version: (0, import_yup8.string)().required("Kubernetes version is required."),
  node_pools: (0, import_yup8.array)().of(nodePoolSchema).min(1, "Please add at least one node pool.")
});

// src/linodes.schema.ts
var import_yup9 = require("yup");
var import_ipaddr2 = __toESM(require("ipaddr.js"), 1);
var validateIP2 = (ipAddress2) => {
  if (!ipAddress2) {
    return true;
  }
  try {
    import_ipaddr2.default.parseCIDR(ipAddress2);
  } catch (err) {
    return false;
  }
  return true;
};
var stackscript_data = (0, import_yup9.array)().of((0, import_yup9.object)()).nullable(true);
var linodeInterfaceSchema = (0, import_yup9.array)().of(
  (0, import_yup9.object)({
    purpose: (0, import_yup9.mixed)().oneOf(
      [null, "public", "vlan"],
      "Purpose must be null, public, or vlan."
    ),
    label: (0, import_yup9.string)().when("purpose", {
      is: "vlan",
      then: (0, import_yup9.string)().required("VLAN label is required.").min(1, "VLAN label must be between 1 and 64 characters.").max(64, "VLAN label must be between 1 and 64 characters.").matches(
        /[a-zA-Z0-9-]+/,
        "Must include only ASCII letters, numbers, and dashes"
      ),
      otherwise: (0, import_yup9.string)().notRequired().nullable(true)
    }).nullable(true),
    ipam_address: (0, import_yup9.string)().nullable(true).test({
      name: "validateIPAM",
      message: "Must be a valid IPv4 range, e.g. 192.0.2.0/24.",
      test: validateIP2
    })
  })
).test(
  "unique-public-interface",
  "Only one public interface per config is allowed.",
  (list) => {
    if (!list) {
      return true;
    }
    return list.filter((thisSlot) => thisSlot.purpose === "public").length <= 1;
  }
);
var ResizeLinodeDiskSchema = (0, import_yup9.object)({
  size: (0, import_yup9.number)().required("Size is required.").min(1)
});
var UpdateLinodePasswordSchema = (0, import_yup9.object)({
  password: (0, import_yup9.string)().required("Password is required.")
  // .concat(rootPasswordValidation)
});
var CreateLinodeSchema = (0, import_yup9.object)({
  type: (0, import_yup9.string)().ensure().required("Plan is required."),
  region: (0, import_yup9.string)().ensure().required("Region is required."),
  stackscript_id: (0, import_yup9.number)().notRequired(),
  backup_id: (0, import_yup9.number)().notRequired(),
  swap_size: (0, import_yup9.number)().notRequired(),
  image: (0, import_yup9.string)().when("stackscript_id", {
    is: (value) => value !== void 0,
    then: (0, import_yup9.string)().required("Image is required."),
    otherwise: (0, import_yup9.string)().notRequired()
  }),
  authorized_keys: (0, import_yup9.array)().of((0, import_yup9.string)()).notRequired(),
  backups_enabled: (0, import_yup9.boolean)().notRequired(),
  stackscript_data,
  booted: (0, import_yup9.boolean)().notRequired(),
  label: (0, import_yup9.string)().transform((v) => v === "" ? void 0 : v).notRequired().min(3, "Label must contain between 3 and 64 characters.").max(64, "Label must contain between 3 and 64 characters."),
  tags: (0, import_yup9.array)().of((0, import_yup9.string)()).notRequired(),
  private_ip: (0, import_yup9.boolean)().notRequired(),
  authorized_users: (0, import_yup9.array)().of((0, import_yup9.string)()).notRequired(),
  root_pass: (0, import_yup9.string)().when("image", {
    is: (value) => Boolean(value),
    then: (0, import_yup9.string)().required(
      "You must provide a root password when deploying from an image."
    ),
    // .concat(rootPasswordValidation),
    otherwise: (0, import_yup9.string)().notRequired()
  }),
  interfaces: linodeInterfaceSchema
});
var alerts = (0, import_yup9.object)({
  cpu: (0, import_yup9.number)().typeError("CPU Usage must be a number").min(0, "Must be between 0 and 4800").max(4800, "Must be between 0 and 4800"),
  network_in: (0, import_yup9.number)(),
  network_out: (0, import_yup9.number)(),
  transfer_quota: (0, import_yup9.number)(),
  io: (0, import_yup9.number)()
}).notRequired();
var schedule = (0, import_yup9.object)({
  day: (0, import_yup9.mixed)().oneOf(
    [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "Invalid day value."
  ),
  window: (0, import_yup9.mixed)().oneOf(
    [
      "W0",
      "W2",
      "W4",
      "W6",
      "W8",
      "W10",
      "W12",
      "W14",
      "W16",
      "W18",
      "W20",
      "W22",
      "W24"
    ],
    "Invalid schedule value."
  )
});
var backups = (0, import_yup9.object)({
  schedule,
  enabled: (0, import_yup9.boolean)()
});
var UpdateLinodeSchema = (0, import_yup9.object)({
  label: (0, import_yup9.string)().transform((v) => v === "" ? void 0 : v).notRequired().min(3, "Label must contain between 3 and 64 characters.").max(64, "Label must contain between 3 and 64 characters."),
  tags: (0, import_yup9.array)().of((0, import_yup9.string)()).notRequired(),
  watchdog_enabled: (0, import_yup9.boolean)().notRequired(),
  alerts,
  backups
});
var SSHKeySchema = (0, import_yup9.object)({
  id: (0, import_yup9.number)(),
  label: (0, import_yup9.string)(),
  ssh_key: (0, import_yup9.string)(),
  created: (0, import_yup9.string)()
});
var RebuildLinodeSchema = (0, import_yup9.object)().shape({
  image: (0, import_yup9.string)().required("An image is required."),
  root_pass: (0, import_yup9.string)().required("Password is required."),
  authorized_keys: (0, import_yup9.array)().of(SSHKeySchema),
  authorized_users: (0, import_yup9.array)().of((0, import_yup9.string)()),
  stackscript_id: (0, import_yup9.number)().notRequired(),
  stackscript_data,
  booted: (0, import_yup9.boolean)().notRequired()
});
var RebuildLinodeFromStackScriptSchema = RebuildLinodeSchema.shape({
  stackscript_id: (0, import_yup9.number)().required("A StackScript is required.")
});
var IPAllocationSchema = (0, import_yup9.object)({
  type: (0, import_yup9.string)().required("IP address type (IPv4) is required.").oneOf(["ipv4"], "Only IPv4 addresses can be allocated."),
  public: (0, import_yup9.boolean)().required("Must specify public or private IP address.")
});
var CreateSnapshotSchema = (0, import_yup9.object)({
  label: (0, import_yup9.string)().required("A snapshot label is required.").min(1, "Label must be between 1 and 255 characters.").max(255, "Label must be between 1 and 255 characters.")
});
var device = (0, import_yup9.object)({
  disk_id: (0, import_yup9.number)().nullable(true),
  volume_id: (0, import_yup9.number)().nullable(true)
}).nullable(true);
var devices = (0, import_yup9.object)({
  sda: device,
  sdb: device,
  sdc: device,
  sdd: device,
  sde: device,
  sdf: device,
  sdg: device,
  sdh: device
});
var helpers = (0, import_yup9.object)({
  updatedb_disabled: (0, import_yup9.boolean)(),
  distro: (0, import_yup9.boolean)(),
  modules_dep: (0, import_yup9.boolean)(),
  network: (0, import_yup9.boolean)(),
  devtmpfs_automount: (0, import_yup9.boolean)()
});
var CreateLinodeConfigSchema = (0, import_yup9.object)({
  label: (0, import_yup9.string)().required("Label is required.").min(1, "Label must be between 1 and 48 characters.").max(48, "Label must be between 1 and 48 characters."),
  devices: devices.required("A list of devices is required."),
  kernel: (0, import_yup9.string)(),
  comments: (0, import_yup9.string)(),
  memory_limit: (0, import_yup9.number)(),
  run_level: (0, import_yup9.mixed)().oneOf(["default", "single", "binbash"]),
  virt_mode: (0, import_yup9.mixed)().oneOf(["paravirt", "fullvirt"]),
  helpers,
  root_device: (0, import_yup9.string)(),
  interfaces: linodeInterfaceSchema
});
var UpdateLinodeConfigSchema = (0, import_yup9.object)({
  label: (0, import_yup9.string)().min(1, "Label must be between 1 and 48 characters.").max(48, "Label must be between 1 and 48 characters."),
  devices,
  kernel: (0, import_yup9.string)(),
  comments: (0, import_yup9.string)(),
  memory_limit: (0, import_yup9.number)(),
  run_level: (0, import_yup9.mixed)().oneOf(["default", "single", "binbash"]),
  virt_mode: (0, import_yup9.mixed)().oneOf(["paravirt", "fullvirt"]),
  helpers,
  root_device: (0, import_yup9.string)(),
  interfaces: linodeInterfaceSchema
});
var CreateLinodeDiskSchema = (0, import_yup9.object)({
  size: (0, import_yup9.number)().required("Disk size is required."),
  label: (0, import_yup9.string)().required("A disk label is required.").min(1, "Label must be between 1 and 48 characters.").max(48, "Label must be between 1 and 48 characters."),
  filesystem: (0, import_yup9.mixed)().oneOf(["raw", "swap", "ext3", "ext4", "initrd"]),
  read_only: (0, import_yup9.boolean)(),
  image: (0, import_yup9.string)(),
  authorized_keys: (0, import_yup9.array)().of((0, import_yup9.string)()),
  authorized_users: (0, import_yup9.array)().of((0, import_yup9.string)()),
  root_pass: (0, import_yup9.string)().when("image", {
    is: (value) => Boolean(value),
    then: (0, import_yup9.string)().required(
      "You must provide a root password when deploying from an image."
    ),
    // .concat(rootPasswordValidation),
    otherwise: (0, import_yup9.string)().notRequired()
  }),
  stackscript_id: (0, import_yup9.number)(),
  stackscript_data
});
var UpdateLinodeDiskSchema = (0, import_yup9.object)({
  label: (0, import_yup9.string)().notRequired().min(1, "Label must be between 1 and 48 characters.").max(48, "Label must be between 1 and 48 characters."),
  filesystem: (0, import_yup9.mixed)().notRequired().oneOf(["raw", "swap", "ext3", "ext4", "initrd"])
});
var CreateLinodeDiskFromImageSchema = CreateLinodeDiskSchema.clone().shape(
  {
    image: (0, import_yup9.string)().required("An image is required.")
  }
);

// src/longview.schema.ts
var import_yup10 = require("yup");
var longviewClientCreate = (0, import_yup10.object)().shape({
  label: (0, import_yup10.string)().min(3, "Label must be between 3 and 32 characters.").max(32, "Label must be between 3 and 32 characters.")
});

// src/managed.schema.ts
var import_yup11 = require("yup");
var createServiceMonitorSchema = (0, import_yup11.object)().shape({
  label: (0, import_yup11.string)().required("Label is required.").min(3, "Label must be between 3 and 64 characters.").max(64, "Label must be between 3 and 64 characters."),
  service_type: (0, import_yup11.mixed)().required("Monitor type is required.").oneOf(["url", "tcp"]),
  address: (0, import_yup11.string)().required("URL is required."),
  timeout: (0, import_yup11.number)().required("Timeout is required."),
  credentials: (0, import_yup11.array)().of((0, import_yup11.number)()).notRequired(),
  notes: (0, import_yup11.string)().notRequired(),
  consultation_group: (0, import_yup11.string)().notRequired(),
  body: (0, import_yup11.string)().notRequired().max(100, "Body must be 100 characters or less.")
});
var sshSettingSchema = (0, import_yup11.object)().shape({
  access: (0, import_yup11.boolean)(),
  user: (0, import_yup11.string)().max(32, "User must be 32 characters or less."),
  ip: (0, import_yup11.string)(),
  port: (0, import_yup11.number)().min(1, "Port must be between 1 and 65535.").max(65535, "Port must be between 1 and 65535.")
});
var updateManagedLinodeSchema = (0, import_yup11.object)({
  ssh: sshSettingSchema
});
var credentialLabel = (0, import_yup11.string)().min(2, "Label must be between 2 and 75 characters.").max(75, "Label must be between 2 and 75 characters.");
var credentialPassword = (0, import_yup11.string)().notRequired().max(5e3, "Password must be 5000 characters or less.");
var credentialUsername = (0, import_yup11.string)().notRequired().max(5e3, "Username must be 5000 characters or less.");
var createCredentialSchema = (0, import_yup11.object)().shape({
  label: credentialLabel.required("Label is required."),
  username: credentialUsername,
  password: credentialPassword
});
var updateCredentialSchema = (0, import_yup11.object)().shape({
  label: credentialLabel.required("Label is required.")
});
var updatePasswordSchema = (0, import_yup11.object)().shape({
  username: credentialUsername,
  password: credentialPassword.required("Password is required.")
});
var createContactSchema = (0, import_yup11.object)().shape({
  name: (0, import_yup11.string)().required("Name is required.").min(2, "Name must be between 2 and 64 characters.").max(64, "Name must be between 2 and 64 characters."),
  email: (0, import_yup11.string)().required("E-mail is required.").min(6, "E-mail must be between 6 and 100 characters").max(100, "E-mail must be between 6 and 100 characters").email("Invalid e-mail address"),
  phone: (0, import_yup11.object)().shape({
    primary: (0, import_yup11.string)().nullable(true).notRequired(),
    secondary: (0, import_yup11.string)().nullable(true).notRequired()
  }).notRequired(),
  group: (0, import_yup11.string)().notRequired().nullable(true).min(2, "Group must be between 2 and 50 characters.").max(50, "Group must be between 2 and 50 characters.")
});

// src/networking.schema.ts
var import_yup12 = require("yup");
var updateIPSchema = (0, import_yup12.object)().shape({
  rdns: (0, import_yup12.string)().notRequired().nullable(true)
});
var allocateIPSchema = (0, import_yup12.object)().shape({
  type: (0, import_yup12.string)().required().matches(
    /^ipv4$/,
    "Only IPv4 address may be allocated through this endpoint."
  ),
  public: (0, import_yup12.boolean)().required(),
  linode_id: (0, import_yup12.number)().required()
});
var assignAddressesSchema = (0, import_yup12.object)().shape({
  region: (0, import_yup12.string)().required(),
  assignments: (0, import_yup12.array)().of((0, import_yup12.object)()).required()
});
var shareAddressesSchema = (0, import_yup12.object)().shape({
  linode_id: (0, import_yup12.number)().required(),
  ips: (0, import_yup12.array)().of((0, import_yup12.string)())
});

// src/nodebalancers.schema.ts
var import_yup13 = require("yup");
var PORT_WARNING = "Port must be between 1 and 65535.";
var LABEL_WARNING = "Label must be between 3 and 32 characters.";
var nodeBalancerConfigNodeSchema = (0, import_yup13.object)({
  label: (0, import_yup13.string)().matches(
    /^[a-zA-Z0-9.\-_]+$/,
    "Label may only contain letters, numbers, periods, dashes, and underscores."
  ).min(3, "Label should be between 3 and 32 characters.").max(32, "Label should be between 3 and 32 characters.").required("Label is required."),
  address: (0, import_yup13.string)().matches(
    /^192\.168\.\d{1,3}\.\d{1,3}$/,
    "Must be a valid private IPv4 address."
  ).required("IP address is required."),
  port: (0, import_yup13.number)().typeError("Port must be a number.").required("Port is required.").min(1, PORT_WARNING).max(65535, PORT_WARNING),
  weight: (0, import_yup13.number)().typeError("Weight must be a number.").min(1, `Weight must be between 1 and 255.`).max(255, `Weight must be between 1 and 255.`),
  mode: (0, import_yup13.mixed)().oneOf(["accept", "reject", "backup", "drain"])
});
var createNodeBalancerConfigSchema = (0, import_yup13.object)({
  algorithm: (0, import_yup13.mixed)().oneOf(["roundrobin", "leastconn", "source"]),
  check_attempts: (0, import_yup13.number)(),
  check_body: (0, import_yup13.string)().when("check", {
    is: "http_body",
    then: (0, import_yup13.string)().required("An HTTP body regex is required.")
  }),
  check_interval: (0, import_yup13.number)().typeError("Check interval must be a number."),
  check_passive: (0, import_yup13.boolean)(),
  check_path: (0, import_yup13.string)().matches(/\/.*/).when("check", {
    is: "http",
    then: (0, import_yup13.string)().required("An HTTP path is required.")
  }).when("check", {
    is: "http_body",
    then: (0, import_yup13.string)().required("An HTTP path is required.")
  }),
  proxy_protocol: (0, import_yup13.string)().oneOf(["none", "v1", "v2"]),
  check_timeout: (0, import_yup13.number)().typeError("Timeout must be a number.").integer(),
  check: (0, import_yup13.mixed)().oneOf(["none", "connection", "http", "http_body"]),
  cipher_suite: (0, import_yup13.mixed)().oneOf(["recommended", "legacy"]),
  port: (0, import_yup13.number)().integer().required("Port is required").min(1, PORT_WARNING).max(65535, PORT_WARNING),
  protocol: (0, import_yup13.mixed)().oneOf(["http", "https", "tcp"]),
  ssl_key: (0, import_yup13.string)().when("protocol", {
    is: "https",
    then: (0, import_yup13.string)().required("SSL key is required when using HTTPS.")
  }),
  ssl_cert: (0, import_yup13.string)().when("protocol", {
    is: "https",
    then: (0, import_yup13.string)().required("SSL certificate is required when using HTTPS.")
  }),
  stickiness: (0, import_yup13.mixed)().oneOf(["none", "table", "http_cookie"]),
  nodes: (0, import_yup13.array)().of(nodeBalancerConfigNodeSchema).required().min(1, "You must provide at least one back end node.")
});
var UpdateNodeBalancerConfigSchema = (0, import_yup13.object)({
  algorithm: (0, import_yup13.mixed)().oneOf(["roundrobin", "leastconn", "source"]),
  check_attempts: (0, import_yup13.number)(),
  check_body: (0, import_yup13.string)().when("check", {
    is: "http_body",
    then: (0, import_yup13.string)().required("An HTTP body regex is required.")
  }),
  check_interval: (0, import_yup13.number)().typeError("Check interval must be a number."),
  check_passive: (0, import_yup13.boolean)(),
  check_path: (0, import_yup13.string)().matches(/\/.*/).when("check", {
    is: "http",
    then: (0, import_yup13.string)().required("An HTTP path is required.")
  }).when("check", {
    is: "http_body",
    then: (0, import_yup13.string)().required("An HTTP path is required.")
  }),
  proxy_protocol: (0, import_yup13.string)().oneOf(["none", "v1", "v2"]),
  check_timeout: (0, import_yup13.number)().typeError("Timeout must be a number.").integer(),
  check: (0, import_yup13.mixed)().oneOf(["none", "connection", "http", "http_body"]),
  cipher_suite: (0, import_yup13.mixed)().oneOf(["recommended", "legacy"]),
  port: (0, import_yup13.number)().typeError("Port must be a number.").integer().min(1, PORT_WARNING).max(65535, PORT_WARNING),
  protocol: (0, import_yup13.mixed)().oneOf(["http", "https", "tcp"]),
  ssl_key: (0, import_yup13.string)().when("protocol", {
    is: "https",
    then: (0, import_yup13.string)().required()
  }),
  ssl_cert: (0, import_yup13.string)().when("protocol", {
    is: "https",
    then: (0, import_yup13.string)().required()
  }),
  stickiness: (0, import_yup13.mixed)().oneOf(["none", "table", "http_cookie"]),
  nodes: (0, import_yup13.array)().of(nodeBalancerConfigNodeSchema)
});
var NodeBalancerSchema = (0, import_yup13.object)({
  label: (0, import_yup13.string)().min(3, LABEL_WARNING).max(32, LABEL_WARNING).matches(
    /^[a-zA-Z0-9-_]+$/,
    "Label can't contain special characters or spaces."
  ),
  client_conn_throttle: (0, import_yup13.number)().typeError("Must be a number."),
  region: (0, import_yup13.string)().required("Region is required."),
  configs: (0, import_yup13.array)().of(createNodeBalancerConfigSchema).test("unique", "Port must be unique.", function(value) {
    if (!value) {
      return true;
    }
    const ports = [];
    const configs = value.reduce(
      (prev, value2, idx) => {
        if (!value2.port) {
          return prev;
        }
        if (!ports.includes(value2.port)) {
          ports.push(value2.port);
          return prev;
        }
        return [...prev, idx];
      },
      []
    );
    if (configs.length === 0) {
      return true;
    }
    const configStrings = configs.map(
      (config) => `configs[${config}].port`
    );
    throw this.createError({
      path: configStrings.join("|"),
      message: "Port must be unique."
    });
  })
});
var UpdateNodeBalancerSchema = (0, import_yup13.object)({
  label: (0, import_yup13.string)().min(3, LABEL_WARNING).max(32, LABEL_WARNING).matches(
    /^[a-zA-Z0-9-_]+$/,
    "Label can't contain special characters or spaces."
  ),
  client_conn_throttle: (0, import_yup13.number)().typeError("Must be a number."),
  region: (0, import_yup13.string)()
});

// src/objectStorageKeys.schema.ts
var import_yup14 = require("yup");
var createObjectStorageKeysSchema = (0, import_yup14.object)({
  label: (0, import_yup14.string)().required("Label is required.").min(3, "Label must be between 3 and 50 characters.").max(50, "Label must be between 3 and 50 characters.").trim()
});

// src/profile.schema.ts
var import_yup15 = require("yup");
var import_libphonenumber_js = require("libphonenumber-js");
var createPersonalAccessTokenSchema = (0, import_yup15.object)({
  scopes: (0, import_yup15.string)(),
  expiry: (0, import_yup15.string)(),
  label: (0, import_yup15.string)().min(1, "Label must be between 1 and 100 characters.").max(100, "Label must be between 1 and 100 characters.")
});
var createSSHKeySchema = (0, import_yup15.object)({
  label: (0, import_yup15.string)().required("Label is required.").min(1, "Label must be between 1 and 64 characters.").max(64, "Label must be between 1 and 64 characters.").trim(),
  ssh_key: (0, import_yup15.string)()
});
var updateProfileSchema = (0, import_yup15.object)({
  email: (0, import_yup15.string)().email(),
  timezone: (0, import_yup15.string)(),
  email_notifications: (0, import_yup15.boolean)(),
  authorized_keys: (0, import_yup15.array)().of((0, import_yup15.string)()),
  restricted: (0, import_yup15.boolean)(),
  two_factor_auth: (0, import_yup15.boolean)(),
  lish_auth_method: (0, import_yup15.string)().oneOf(["password_keys", "keys_only", "disabled"]),
  authentication_type: (0, import_yup15.string)().oneOf(["password", "github"])
});
var SendCodeToPhoneNumberSchema = (0, import_yup15.object)({
  iso_code: (0, import_yup15.string)().required(),
  phone_number: (0, import_yup15.string)().test(
    "is-phone-number",
    "Not a valid phone number",
    (phone_number, context) => {
      const { iso_code } = context.parent;
      if (!phone_number) {
        return false;
      }
      return (0, import_libphonenumber_js.isPossiblePhoneNumber)(phone_number, iso_code);
    }
  )
});
var VerifyPhoneNumberCodeSchema = (0, import_yup15.object)({
  otp_code: (0, import_yup15.string)().required("Verification Code is required.").test(
    "digits only",
    "The verification code must only contain digits.",
    (value) => {
      if (!value) {
        return true;
      }
      return /^\d+$/.test(value);
    }
  )
});
var SecurityQuestionsSchema = (0, import_yup15.object)({
  security_questions: (0, import_yup15.array)().of(
    (0, import_yup15.object)({
      question_id: (0, import_yup15.number)().required("You must pick a question."),
      response: (0, import_yup15.string)().min(3, "Answers must be at least 3 characters.").max(17, "Answers must be at most 17 characters.").required("You must provide an answer to each security question.")
    }).required()
  ).length(3, "You must answer all 3 security questions.").required()
});

// src/records.schema.ts
var import_yup16 = require("yup");
var recordBaseSchema = (0, import_yup16.object)().shape({
  name: (0, import_yup16.string)().max(100, "Record name must be 100 characters or less."),
  target: (0, import_yup16.string)(),
  priority: (0, import_yup16.number)().min(0, "Priority must be between 0 and 255.").max(255, "Priority must be between 0 and 255."),
  weight: (0, import_yup16.number)(),
  port: (0, import_yup16.number)(),
  service: (0, import_yup16.string)().nullable(true),
  protocol: (0, import_yup16.string)().nullable(true),
  ttl_sec: (0, import_yup16.number)(),
  tag: (0, import_yup16.string)()
});
var validRecordTypes = [
  "A",
  "AAAA",
  "NS",
  "MX",
  "CNAME",
  "TXT",
  "SRV",
  "PTR",
  "CAA"
];
var createRecordSchema = recordBaseSchema.shape({
  type: (0, import_yup16.mixed)().required("Type is required.").oneOf(validRecordTypes)
});
var updateRecordSchema = recordBaseSchema.shape({});

// src/stackscripts.schema.ts
var import_yup17 = require("yup");
var stackScriptSchema = (0, import_yup17.object)({
  script: (0, import_yup17.string)().required("Script is required."),
  label: (0, import_yup17.string)().required("Label is required.").min(3, "Label must be between 3 and 128 characters.").max(128, "Label must be between 3 and 128 characters."),
  images: (0, import_yup17.array)().of((0, import_yup17.string)()).required("An image is required."),
  description: (0, import_yup17.string)(),
  is_public: (0, import_yup17.boolean)(),
  rev_note: (0, import_yup17.string)()
});
var updateStackScriptSchema = (0, import_yup17.object)({
  script: (0, import_yup17.string)(),
  label: (0, import_yup17.string)().min(3, "Label must be between 3 and 128 characters.").max(128, "Label must be between 3 and 128 characters."),
  images: (0, import_yup17.array)().of((0, import_yup17.string)()).min(1, "An image is required."),
  description: (0, import_yup17.string)(),
  is_public: (0, import_yup17.boolean)(),
  rev_note: (0, import_yup17.string)()
});

// src/support.schema.ts
var import_yup18 = require("yup");
var createSupportTicketSchema = (0, import_yup18.object)({
  summary: (0, import_yup18.string)().required("Summary is required.").min(1, "Summary must be between 1 and 64 characters.").max(64, "Summary must be between 1 and 64 characters.").trim(),
  description: (0, import_yup18.string)().required("Description is required.").min(1, "Description must be between 1 and 64,000 characters.").max(64e3, "Description must be between 1 and 64,000 characters.").trim(),
  domain_id: (0, import_yup18.number)(),
  linode_id: (0, import_yup18.number)(),
  longviewclient_id: (0, import_yup18.number)(),
  nodebalancer_id: (0, import_yup18.number)(),
  volume_id: (0, import_yup18.number)()
});
var createReplySchema = (0, import_yup18.object)({
  description: (0, import_yup18.string)().required("Description is required.").min(1, "Description must be between 1 and 65,535 characters.").max(65535, "Description must be between 1 and 65,535 characters.").trim()
});

// src/transfers.schema.ts
var import_yup19 = require("yup");
var CreateTransferSchema = (0, import_yup19.object)({
  entities: (0, import_yup19.object)({
    linodes: (0, import_yup19.array)().of((0, import_yup19.number)())
  })
});

// src/twofactor.schema.ts
var import_yup20 = require("yup");
var enableTwoFactorSchema = (0, import_yup20.object)({
  tfa_code: (0, import_yup20.string)().required("Please enter a token.")
});

// src/volumes.schema.ts
var import_yup21 = require("yup");

// src/constants.ts
var MAX_VOLUME_SIZE = 10240;

// src/volumes.schema.ts
var createSizeValidation = (minSize = 10) => (0, import_yup21.number)().integer().typeError(`Size must be a number`).min(minSize, `Size must be between ${minSize} and ${MAX_VOLUME_SIZE}.`).max(
  MAX_VOLUME_SIZE,
  `Size must be between ${minSize} and ${MAX_VOLUME_SIZE}.`
).required(`A size is required.`);
var CreateVolumeSchema = (0, import_yup21.object)({
  region: (0, import_yup21.string)().when("linode_id", {
    is: (id) => id === void 0 || id === "",
    then: (0, import_yup21.string)().required("Must provide a region or a Linode ID.")
  }),
  linode_id: (0, import_yup21.number)(),
  size: createSizeValidation(10),
  label: (0, import_yup21.string)().required("Label is required.").ensure().trim().min(1, "Label must be between 1 and 32 characters.").max(32, "Label must be 32 characters or less."),
  config_id: (0, import_yup21.number)().typeError("Config ID must be a number."),
  tags: (0, import_yup21.array)().of((0, import_yup21.string)())
});
var CloneVolumeSchema = (0, import_yup21.object)({
  label: (0, import_yup21.string)().required()
});
var ResizeVolumeSchema = (minSize = 10) => (0, import_yup21.object)({
  size: createSizeValidation(minSize)
});
var UpdateVolumeSchema = (0, import_yup21.object)({
  label: (0, import_yup21.string)().required()
});
var AttachVolumeSchema = (0, import_yup21.object)({
  linode_id: (0, import_yup21.number)().required(),
  config_id: (0, import_yup21.number)().required()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AttachVolumeSchema,
  AutoscaleNodePoolSchema,
  CloneVolumeSchema,
  CreateBucketSchema,
  CreateFirewallDeviceSchema,
  CreateFirewallSchema,
  CreateLinodeConfigSchema,
  CreateLinodeDiskFromImageSchema,
  CreateLinodeDiskSchema,
  CreateLinodeSchema,
  CreateSnapshotSchema,
  CreateTransferSchema,
  CreateUserSchema,
  CreateVolumeSchema,
  CreditCardSchema,
  ExecutePaypalPaymentSchema,
  FirewallDeviceSchema,
  FirewallRuleSchema,
  FirewallRuleTypeSchema,
  IPAllocationSchema,
  IP_ERROR_MESSAGE,
  NodeBalancerSchema,
  PaymentMethodSchema,
  PaymentSchema,
  PromoCodeSchema,
  RebuildLinodeFromStackScriptSchema,
  RebuildLinodeSchema,
  ResizeLinodeDiskSchema,
  ResizeVolumeSchema,
  SecurityQuestionsSchema,
  SendCodeToPhoneNumberSchema,
  StagePaypalPaymentSchema,
  UpdateAccountSettingsSchema,
  UpdateBucketAccessSchema,
  UpdateFirewallSchema,
  UpdateGrantSchema,
  UpdateLinodeConfigSchema,
  UpdateLinodeDiskSchema,
  UpdateLinodePasswordSchema,
  UpdateLinodeSchema,
  UpdateNodeBalancerConfigSchema,
  UpdateNodeBalancerSchema,
  UpdateUserSchema,
  UpdateVolumeSchema,
  UploadCertificateSchema,
  VerifyPhoneNumberCodeSchema,
  allocateIPSchema,
  assignAddressesSchema,
  baseImageSchema,
  clusterLabelSchema,
  createContactSchema,
  createCredentialSchema,
  createDatabaseSchema,
  createDomainSchema,
  createImageSchema,
  createKubeClusterSchema,
  createNodeBalancerConfigSchema,
  createOAuthClientSchema,
  createObjectStorageKeysSchema,
  createPersonalAccessTokenSchema,
  createRecordSchema,
  createReplySchema,
  createSSHKeySchema,
  createServiceMonitorSchema,
  createSupportTicketSchema,
  credentialLabel,
  credentialPassword,
  credentialUsername,
  enableTwoFactorSchema,
  importZoneSchema,
  ipAddress,
  linodeInterfaceSchema,
  longviewClientCreate,
  nodeBalancerConfigNodeSchema,
  nodePoolSchema,
  shareAddressesSchema,
  sshSettingSchema,
  stackScriptSchema,
  updateAccountSchema,
  updateCredentialSchema,
  updateDatabaseSchema,
  updateDomainSchema,
  updateIPSchema,
  updateImageSchema,
  updateManagedLinodeSchema,
  updateOAuthClientSchema,
  updatePasswordSchema,
  updateProfileSchema,
  updateRecordSchema,
  updateStackScriptSchema,
  uploadImageSchema,
  validateFirewallPorts,
  validateIP
});
