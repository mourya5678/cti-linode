// src/account.schema.ts
import { array, boolean, mixed, number, object, string } from "yup";
var updateAccountSchema = object({
  email: string().max(128, "Email must be 128 characters or less."),
  address_1: string().max(64, "Address must be 64 characters or less."),
  city: string().max(24, "City must be 24 characters or less."),
  company: string().max(128, "Company must be 128 characters or less."),
  country: string().min(2, "Country code must be two letters.").max(2, "Country code must be two letters."),
  first_name: string().max(50, "First name must be 50 characters or less."),
  last_name: string().max(50, "Last name must be 50 characters or less."),
  address_2: string().max(64, "Address must be 64 characters or less."),
  phone: string().max(32, "Phone number must be 32 characters or less."),
  state: string().max(24, "State must be 24 characters or less."),
  tax_id: string().max(100, "Tax ID must be 100 characters or less."),
  zip: string().max(16, "Zip code must be 16 characters or less.")
});
var createOAuthClientSchema = object({
  label: string().required("Label is required.").min(1, "Label must be between 1 and 512 characters.").max(512, "Label must be between 1 and 512 characters."),
  redirect_uri: string().required("Redirect URI is required.")
});
var updateOAuthClientSchema = object({
  label: string().min(1, "Label must be between 1 and 512 characters.").max(512, "Label must be between 1 and 512 characters."),
  redirect_uri: string()
});
var StagePaypalPaymentSchema = object({
  cancel_url: string().required(
    "You must provide a URL to redirect on cancel."
  ),
  redirect_url: string().required("You must provide a redirect URL."),
  usd: string().required("USD payment amount is required.")
});
var ExecutePaypalPaymentSchema = object({
  payer_id: string().required("You must provide a payer ID."),
  payment_id: string().required("You must provide a payment ID (from Paypal).")
});
var PaymentSchema = object({
  usd: string().required("USD payment amount is required.")
});
var CreditCardSchema = object({
  card_number: string().required("Credit card number is required.").min(13, "Credit card number must be between 13 and 23 characters.").max(23, "Credit card number must be between 13 and 23 characters."),
  expiry_year: number().test(
    "length",
    "Expiration year must be 2 or 4 digits.",
    (value) => [2, 4].includes(String(value).length)
  ).required("Expiration year is required.").typeError("Expiration year must be a number.").min((/* @__PURE__ */ new Date()).getFullYear(), "Expiration year must not be in the past.").max((/* @__PURE__ */ new Date()).getFullYear() + 20, "Expiry too far in the future."),
  expiry_month: number().required("Expiration month is required.").typeError("Expiration month must be a number.").min(1, "Expiration month must be a number from 1 to 12.").max(12, "Expiration month must be a number from 1 to 12."),
  cvv: string().required("Security code is required.").min(3, "Security code must be between 3 and 4 characters.").max(4, "Security code must be between 3 and 4 characters.")
});
var PaymentMethodSchema = object({
  type: mixed().oneOf(
    ["credit_card", "payment_method_nonce"],
    "Type must be credit_card or payment_method_nonce."
  ),
  data: object().when("type", {
    is: "credit_card",
    then: CreditCardSchema,
    otherwise: object({
      nonce: string().required("Payment nonce is required.")
    })
  }),
  is_default: boolean().required(
    "You must indicate if this should be your default method of payment."
  )
});
var CreateUserSchema = object({
  username: string().required("Username is required.").min(3, "Username must be between 3 and 32 characters.").max(32, "Username must be between 3 and 32 characters."),
  email: string().required("Email address is required.").email("Must be a valid email address."),
  restricted: boolean().required(
    "You must indicate if this user should have restricted access."
  )
});
var UpdateUserSchema = object({
  username: string().min(3, "Username must be between 3 and 32 characters.").max(32, "Username must be between 3 and 32 characters."),
  email: string().email("Must be a valid email address."),
  restricted: boolean()
});
var GrantSchema = object({
  id: number().required("ID is required."),
  permissions: mixed().oneOf(
    [null, "read_only", "read_write"],
    "Permissions must be null, read_only, or read_write."
  )
});
var UpdateGrantSchema = object({
  global: object(),
  linode: array().of(GrantSchema),
  domain: array().of(GrantSchema),
  nodebalancer: array().of(GrantSchema),
  image: array().of(GrantSchema),
  longview: array().of(GrantSchema),
  stackscript: array().of(GrantSchema),
  volume: array().of(GrantSchema)
});
var UpdateAccountSettingsSchema = object({
  network_helper: boolean(),
  backups_enabled: boolean(),
  managed: boolean()
});
var PromoCodeSchema = object({
  promo_code: string().required("Promo code is required.").min(1, "Promo code must be between 1 and 32 characters.").max(32, "Promo code must be between 1 and 32 characters.")
});

// src/buckets.schema.ts
import { boolean as boolean2, object as object2, string as string2 } from "yup";
var CreateBucketSchema = object2({
  label: string2().required("Label is required.").matches(/^\S*$/, "Label must not contain spaces.").ensure().min(3, "Label must be between 3 and 63 characters.").max(63, "Label must be between 3 and 63 characters."),
  cluster: string2().required("Cluster is required.")
});
var UploadCertificateSchema = object2({
  certificate: string2().required("Certificate is required."),
  private_key: string2().required("Private key is required.")
});
var UpdateBucketAccessSchema = object2({
  acl: string2().oneOf([
    "private",
    "public-read",
    "authenticated-read",
    "public-read-write"
  ]).notRequired(),
  cors_enabled: boolean2().notRequired()
});

// src/databases.schema.ts
import { number as number2 } from "yup";
import { array as array2, object as object3, string as string3 } from "yup";
var LABEL_MESSAGE = "Label must be between 3 and 32 characters";
var createDatabaseSchema = object3({
  label: string3().required("Label is required").min(3, LABEL_MESSAGE).max(32, LABEL_MESSAGE),
  engine: string3().required("Database Engine is required"),
  region: string3().required("Region is required"),
  type: string3().required("Type is required"),
  cluster_size: number2().oneOf([1, 3], "Nodes are required").required("Nodes are required"),
  replication_type: string3().when("engine", {
    is: (engine) => Boolean(engine.match(/mysql|postgres/g)),
    then: string3().when("engine", {
      is: (engine) => Boolean(engine.match(/mysql/)),
      then: string3().oneOf(["none", "semi_synch", "asynch"])
    }).when("engine", {
      is: (engine) => Boolean(engine.match(/postgres/)),
      then: string3().oneOf(["none", "synch", "asynch"])
    }).required("Replication Type is required"),
    otherwise: string3().notRequired().nullable(true)
  }),
  replication_commit_type: string3().when("engine", {
    is: (engine) => Boolean(engine.match(/postgres/)),
    then: string3().oneOf(["off", "on", "local", "remote_write", "remote_apply"]).required(),
    otherwise: string3().notRequired().nullable(true)
  }),
  storage_engine: string3().when("engine", {
    is: (engine) => Boolean(engine.match(/mongodb/)),
    then: string3().oneOf(["wiredtiger", "mmapv1"]).notRequired(),
    otherwise: string3().notRequired().nullable(true)
  }),
  compression_type: string3().when("engine", {
    is: (engine) => Boolean(engine.match(/mongodb/)),
    then: string3().oneOf(["none", "snappy", "zlib"]).notRequired(),
    otherwise: string3().notRequired().nullable(true)
  })
});
var updateDatabaseSchema = object3({
  label: string3().notRequired().min(3, LABEL_MESSAGE).max(32, LABEL_MESSAGE),
  allow_list: array2().of(string3()).required("An IPv4 address is required"),
  updates: object3().notRequired().shape({
    frequency: string3().oneOf(["weekly", "monthly"]),
    duration: number2(),
    hour_of_day: number2(),
    day_of_week: number2(),
    week_of_month: number2().nullable(true)
  }).nullable(true)
});

// src/domains.schema.ts
import { array as array3, mixed as mixed2, number as number3, object as object4, string as string4 } from "yup";
var importZoneSchema = object4({
  domain: string4().required("Domain is required."),
  remote_nameserver: string4().required("Remote nameserver is required.")
});
var domainSchemaBase = object4().shape({
  domain: string4().matches(
    /([a-zA-Z0-9-_]+\.)+([a-zA-Z]{2,3}\.)?([a-zA-Z]{2,16}|XN--[a-zA-Z0-9]+)/,
    "Domain is not valid."
  ),
  status: mixed2().oneOf(["disabled", "active", "edit_mode", "has_errors"]),
  tags: array3(),
  description: string4().min(1, "Description must be between 1 and 253 characters.").max(253, "Description must be between 1 and 253 characters."),
  retry_sec: number3(),
  master_ips: array3().of(string4()),
  axfr_ips: array3().of(string4()).typeError("Must be a comma-separated list of IP addresses."),
  expire_sec: number3(),
  refresh_sec: number3(),
  ttl_sec: number3()
});
var createDomainSchema = domainSchemaBase.shape({
  domain: string4().required("Domain is required.").matches(
    /([a-zA-Z0-9-_]+\.)+([a-zA-Z]{2,3}\.)?([a-zA-Z]{2,16}|XN--[a-zA-Z0-9]+)/,
    "Domain is not valid."
  ),
  tags: array3().of(string4()),
  type: mixed2().required().oneOf(["master", "slave"]),
  soa_email: string4().when("type", {
    is: "master",
    then: string4().required("SOA Email is required."),
    otherwise: string4()
  }).email("SOA Email is not valid."),
  master_ips: array3().of(string4()).when("type", {
    is: "slave",
    then: array3().of(string4()).compact().ensure().required("At least one primary IP address is required.").min(1, "At least one primary IP address is required."),
    otherwise: array3().of(string4())
  })
});
var updateDomainSchema = domainSchemaBase.shape({
  domainId: number3(),
  soa_email: string4().email("SOA Email is not valid."),
  axfr_ips: array3().of(string4()),
  tags: array3().of(string4())
});

// src/firewalls.schema.ts
import ipaddr from "ipaddr.js";
import { array as array4, mixed as mixed3, number as number4, object as object5, string as string5 } from "yup";
var IP_ERROR_MESSAGE = "Must be a valid IPv4 or IPv6 address or range.";
var validateIP = (ipAddress2) => {
  if (!ipAddress2) {
    return false;
  }
  const [, mask] = ipAddress2.split("/");
  try {
    if (mask) {
      ipaddr.parseCIDR(ipAddress2);
    } else {
      ipaddr.parse(ipAddress2);
    }
  } catch (err) {
    if (ipAddress2 !== "") {
      return false;
    }
  }
  return true;
};
var CreateFirewallDeviceSchema = object5({
  linodes: array4().of(number4()),
  nodebalancers: array4().of(number4())
});
var ipAddress = string5().test({
  name: "validateIP",
  message: IP_ERROR_MESSAGE,
  test: validateIP
});
var validateFirewallPorts = string5().matches(
  /^([0-9\-]+,?\s?)+$/,
  "Ports must be an integer, range of integers, or a comma-separated list of integers."
);
var validFirewallRuleProtocol = ["ALL", "TCP", "UDP", "ICMP", "IPENCAP"];
var FirewallRuleTypeSchema = object5().shape({
  action: mixed3().oneOf(["ACCEPT", "DROP"]).required("Action is required"),
  protocol: mixed3().oneOf(validFirewallRuleProtocol).required("Protocol is required."),
  ports: string5().when("protocol", {
    is: (val) => val !== "ICMP" && val !== "IPENCAP",
    then: validateFirewallPorts,
    // Workaround to get the test to fail if ports is defined when protocol === ICMP or IPENCAP
    otherwise: string5().test({
      name: "protocol",
      message: "Ports are not allowed for ICMP and IPENCAP protocols.",
      test: (value) => typeof value === "undefined"
    })
  }),
  addresses: object5().shape({
    ipv4: array4().of(ipAddress).nullable(true),
    ipv6: array4().of(ipAddress).nullable(true)
  }).strict(true).nullable(true)
});
var FirewallRuleSchema = object5().shape({
  inbound: array4(FirewallRuleTypeSchema).nullable(true),
  outbound: array4(FirewallRuleTypeSchema).nullable(true),
  inbound_policy: mixed3().oneOf(["ACCEPT", "DROP"]).required("Inbound policy is required."),
  outbound_policy: mixed3().oneOf(["ACCEPT", "DROP"]).required("Outbound policy is required.")
});
var CreateFirewallSchema = object5().shape({
  label: string5().required("Label is required.").min(3, "Label must be between 3 and 32 characters.").max(32, "Label must be between 3 and 32 characters."),
  // Label validation on the back end is more complicated, we only do basic checks here.
  tags: array4().of(string5()),
  rules: FirewallRuleSchema
});
var UpdateFirewallSchema = object5().shape({
  label: string5(),
  tags: array4().of(string5()),
  status: string5().oneOf(["enabled", "disabled"])
  // 'deleted' is also a status but it's not settable
});
var FirewallDeviceSchema = object5({
  type: string5().oneOf(["linode", "nodebalancer"]).required("Device type is required."),
  id: number4().required("ID is required.")
});

// src/images.schema.ts
import { number as number5, object as object6, string as string6 } from "yup";
var labelSchema = string6().max(50, "Length must be 50 characters or less.").matches(
  /^[a-zA-Z0-9,.?\-_\s']+$/,
  "Image labels cannot contain special characters."
);
var baseImageSchema = object6().shape({
  label: labelSchema.notRequired(),
  description: string6().notRequired().min(1).max(65e3)
});
var createImageSchema = baseImageSchema.shape({
  disk_id: number5().typeError("Disk is required.").required("Disk is required.")
});
var uploadImageSchema = baseImageSchema.shape({
  label: labelSchema.required("Label is required."),
  region: string6().required("Region is required.")
});
var updateImageSchema = object6().shape({
  label: string6().notRequired().max(50, "Length must be 50 characters or less.").matches(
    /^[a-zA-Z0-9,.?\-_\s']+$/,
    "Image labels cannot contain special characters."
  ),
  description: string6().notRequired().max(65e3, "Length must be 65000 characters or less.")
});

// src/kubernetes.schema.ts
import { array as array5, number as number6, object as object7, string as string7, boolean as boolean3 } from "yup";
var nodePoolSchema = object7().shape({
  type: string7(),
  count: number6()
});
var AutoscaleNodePoolSchema = object7({
  enabled: boolean3(),
  min: number6().when("enabled", {
    is: true,
    then: number6().required().test(
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
  max: number6().when("enabled", {
    is: true,
    then: number6().required().min(1, "Maximum must be between 1 and 100 nodes.").max(100, "Maximum must be between 1 and 100 nodes.")
  })
});
var clusterLabelSchema = string7().required("Label is required.").matches(
  /^[a-zA-Z0-9-]+$/,
  "Cluster labels cannot contain special characters, spaces, or underscores."
).min(3, "Length must be between 3 and 32 characters.").max(32, "Length must be between 3 and 32 characters.");
var createKubeClusterSchema = object7().shape({
  label: clusterLabelSchema,
  region: string7().required("Region is required."),
  k8s_version: string7().required("Kubernetes version is required."),
  node_pools: array5().of(nodePoolSchema).min(1, "Please add at least one node pool.")
});

// src/linodes.schema.ts
import { array as array6, boolean as boolean4, mixed as mixed4, number as number7, object as object8, string as string8 } from "yup";
import ipaddr2 from "ipaddr.js";
var validateIP2 = (ipAddress2) => {
  if (!ipAddress2) {
    return true;
  }
  try {
    ipaddr2.parseCIDR(ipAddress2);
  } catch (err) {
    return false;
  }
  return true;
};
var stackscript_data = array6().of(object8()).nullable(true);
var linodeInterfaceSchema = array6().of(
  object8({
    purpose: mixed4().oneOf(
      [null, "public", "vlan"],
      "Purpose must be null, public, or vlan."
    ),
    label: string8().when("purpose", {
      is: "vlan",
      then: string8().required("VLAN label is required.").min(1, "VLAN label must be between 1 and 64 characters.").max(64, "VLAN label must be between 1 and 64 characters.").matches(
        /[a-zA-Z0-9-]+/,
        "Must include only ASCII letters, numbers, and dashes"
      ),
      otherwise: string8().notRequired().nullable(true)
    }).nullable(true),
    ipam_address: string8().nullable(true).test({
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
var ResizeLinodeDiskSchema = object8({
  size: number7().required("Size is required.").min(1)
});
var UpdateLinodePasswordSchema = object8({
  password: string8().required("Password is required.")
  // .concat(rootPasswordValidation)
});
var CreateLinodeSchema = object8({
  type: string8().ensure().required("Plan is required."),
  region: string8().ensure().required("Region is required."),
  stackscript_id: number7().notRequired(),
  backup_id: number7().notRequired(),
  swap_size: number7().notRequired(),
  image: string8().when("stackscript_id", {
    is: (value) => value !== void 0,
    then: string8().required("Image is required."),
    otherwise: string8().notRequired()
  }),
  authorized_keys: array6().of(string8()).notRequired(),
  backups_enabled: boolean4().notRequired(),
  stackscript_data,
  booted: boolean4().notRequired(),
  label: string8().transform((v) => v === "" ? void 0 : v).notRequired().min(3, "Label must contain between 3 and 64 characters.").max(64, "Label must contain between 3 and 64 characters."),
  tags: array6().of(string8()).notRequired(),
  private_ip: boolean4().notRequired(),
  authorized_users: array6().of(string8()).notRequired(),
  root_pass: string8().when("image", {
    is: (value) => Boolean(value),
    then: string8().required(
      "You must provide a root password when deploying from an image."
    ),
    // .concat(rootPasswordValidation),
    otherwise: string8().notRequired()
  }),
  interfaces: linodeInterfaceSchema
});
var alerts = object8({
  cpu: number7().typeError("CPU Usage must be a number").min(0, "Must be between 0 and 4800").max(4800, "Must be between 0 and 4800"),
  network_in: number7(),
  network_out: number7(),
  transfer_quota: number7(),
  io: number7()
}).notRequired();
var schedule = object8({
  day: mixed4().oneOf(
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
  window: mixed4().oneOf(
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
var backups = object8({
  schedule,
  enabled: boolean4()
});
var UpdateLinodeSchema = object8({
  label: string8().transform((v) => v === "" ? void 0 : v).notRequired().min(3, "Label must contain between 3 and 64 characters.").max(64, "Label must contain between 3 and 64 characters."),
  tags: array6().of(string8()).notRequired(),
  watchdog_enabled: boolean4().notRequired(),
  alerts,
  backups
});
var SSHKeySchema = object8({
  id: number7(),
  label: string8(),
  ssh_key: string8(),
  created: string8()
});
var RebuildLinodeSchema = object8().shape({
  image: string8().required("An image is required."),
  root_pass: string8().required("Password is required."),
  authorized_keys: array6().of(SSHKeySchema),
  authorized_users: array6().of(string8()),
  stackscript_id: number7().notRequired(),
  stackscript_data,
  booted: boolean4().notRequired()
});
var RebuildLinodeFromStackScriptSchema = RebuildLinodeSchema.shape({
  stackscript_id: number7().required("A StackScript is required.")
});
var IPAllocationSchema = object8({
  type: string8().required("IP address type (IPv4) is required.").oneOf(["ipv4"], "Only IPv4 addresses can be allocated."),
  public: boolean4().required("Must specify public or private IP address.")
});
var CreateSnapshotSchema = object8({
  label: string8().required("A snapshot label is required.").min(1, "Label must be between 1 and 255 characters.").max(255, "Label must be between 1 and 255 characters.")
});
var device = object8({
  disk_id: number7().nullable(true),
  volume_id: number7().nullable(true)
}).nullable(true);
var devices = object8({
  sda: device,
  sdb: device,
  sdc: device,
  sdd: device,
  sde: device,
  sdf: device,
  sdg: device,
  sdh: device
});
var helpers = object8({
  updatedb_disabled: boolean4(),
  distro: boolean4(),
  modules_dep: boolean4(),
  network: boolean4(),
  devtmpfs_automount: boolean4()
});
var CreateLinodeConfigSchema = object8({
  label: string8().required("Label is required.").min(1, "Label must be between 1 and 48 characters.").max(48, "Label must be between 1 and 48 characters."),
  devices: devices.required("A list of devices is required."),
  kernel: string8(),
  comments: string8(),
  memory_limit: number7(),
  run_level: mixed4().oneOf(["default", "single", "binbash"]),
  virt_mode: mixed4().oneOf(["paravirt", "fullvirt"]),
  helpers,
  root_device: string8(),
  interfaces: linodeInterfaceSchema
});
var UpdateLinodeConfigSchema = object8({
  label: string8().min(1, "Label must be between 1 and 48 characters.").max(48, "Label must be between 1 and 48 characters."),
  devices,
  kernel: string8(),
  comments: string8(),
  memory_limit: number7(),
  run_level: mixed4().oneOf(["default", "single", "binbash"]),
  virt_mode: mixed4().oneOf(["paravirt", "fullvirt"]),
  helpers,
  root_device: string8(),
  interfaces: linodeInterfaceSchema
});
var CreateLinodeDiskSchema = object8({
  size: number7().required("Disk size is required."),
  label: string8().required("A disk label is required.").min(1, "Label must be between 1 and 48 characters.").max(48, "Label must be between 1 and 48 characters."),
  filesystem: mixed4().oneOf(["raw", "swap", "ext3", "ext4", "initrd"]),
  read_only: boolean4(),
  image: string8(),
  authorized_keys: array6().of(string8()),
  authorized_users: array6().of(string8()),
  root_pass: string8().when("image", {
    is: (value) => Boolean(value),
    then: string8().required(
      "You must provide a root password when deploying from an image."
    ),
    // .concat(rootPasswordValidation),
    otherwise: string8().notRequired()
  }),
  stackscript_id: number7(),
  stackscript_data
});
var UpdateLinodeDiskSchema = object8({
  label: string8().notRequired().min(1, "Label must be between 1 and 48 characters.").max(48, "Label must be between 1 and 48 characters."),
  filesystem: mixed4().notRequired().oneOf(["raw", "swap", "ext3", "ext4", "initrd"])
});
var CreateLinodeDiskFromImageSchema = CreateLinodeDiskSchema.clone().shape(
  {
    image: string8().required("An image is required.")
  }
);

// src/longview.schema.ts
import { object as object9, string as string9 } from "yup";
var longviewClientCreate = object9().shape({
  label: string9().min(3, "Label must be between 3 and 32 characters.").max(32, "Label must be between 3 and 32 characters.")
});

// src/managed.schema.ts
import { array as array7, boolean as boolean5, mixed as mixed5, number as number8, object as object10, string as string10 } from "yup";
var createServiceMonitorSchema = object10().shape({
  label: string10().required("Label is required.").min(3, "Label must be between 3 and 64 characters.").max(64, "Label must be between 3 and 64 characters."),
  service_type: mixed5().required("Monitor type is required.").oneOf(["url", "tcp"]),
  address: string10().required("URL is required."),
  timeout: number8().required("Timeout is required."),
  credentials: array7().of(number8()).notRequired(),
  notes: string10().notRequired(),
  consultation_group: string10().notRequired(),
  body: string10().notRequired().max(100, "Body must be 100 characters or less.")
});
var sshSettingSchema = object10().shape({
  access: boolean5(),
  user: string10().max(32, "User must be 32 characters or less."),
  ip: string10(),
  port: number8().min(1, "Port must be between 1 and 65535.").max(65535, "Port must be between 1 and 65535.")
});
var updateManagedLinodeSchema = object10({
  ssh: sshSettingSchema
});
var credentialLabel = string10().min(2, "Label must be between 2 and 75 characters.").max(75, "Label must be between 2 and 75 characters.");
var credentialPassword = string10().notRequired().max(5e3, "Password must be 5000 characters or less.");
var credentialUsername = string10().notRequired().max(5e3, "Username must be 5000 characters or less.");
var createCredentialSchema = object10().shape({
  label: credentialLabel.required("Label is required."),
  username: credentialUsername,
  password: credentialPassword
});
var updateCredentialSchema = object10().shape({
  label: credentialLabel.required("Label is required.")
});
var updatePasswordSchema = object10().shape({
  username: credentialUsername,
  password: credentialPassword.required("Password is required.")
});
var createContactSchema = object10().shape({
  name: string10().required("Name is required.").min(2, "Name must be between 2 and 64 characters.").max(64, "Name must be between 2 and 64 characters."),
  email: string10().required("E-mail is required.").min(6, "E-mail must be between 6 and 100 characters").max(100, "E-mail must be between 6 and 100 characters").email("Invalid e-mail address"),
  phone: object10().shape({
    primary: string10().nullable(true).notRequired(),
    secondary: string10().nullable(true).notRequired()
  }).notRequired(),
  group: string10().notRequired().nullable(true).min(2, "Group must be between 2 and 50 characters.").max(50, "Group must be between 2 and 50 characters.")
});

// src/networking.schema.ts
import { array as array8, boolean as boolean6, number as number9, object as object11, string as string11 } from "yup";
var updateIPSchema = object11().shape({
  rdns: string11().notRequired().nullable(true)
});
var allocateIPSchema = object11().shape({
  type: string11().required().matches(
    /^ipv4$/,
    "Only IPv4 address may be allocated through this endpoint."
  ),
  public: boolean6().required(),
  linode_id: number9().required()
});
var assignAddressesSchema = object11().shape({
  region: string11().required(),
  assignments: array8().of(object11()).required()
});
var shareAddressesSchema = object11().shape({
  linode_id: number9().required(),
  ips: array8().of(string11())
});

// src/nodebalancers.schema.ts
import { array as array9, boolean as boolean7, mixed as mixed6, number as number10, object as object12, string as string12 } from "yup";
var PORT_WARNING = "Port must be between 1 and 65535.";
var LABEL_WARNING = "Label must be between 3 and 32 characters.";
var nodeBalancerConfigNodeSchema = object12({
  label: string12().matches(
    /^[a-zA-Z0-9.\-_]+$/,
    "Label may only contain letters, numbers, periods, dashes, and underscores."
  ).min(3, "Label should be between 3 and 32 characters.").max(32, "Label should be between 3 and 32 characters.").required("Label is required."),
  address: string12().matches(
    /^192\.168\.\d{1,3}\.\d{1,3}$/,
    "Must be a valid private IPv4 address."
  ).required("IP address is required."),
  port: number10().typeError("Port must be a number.").required("Port is required.").min(1, PORT_WARNING).max(65535, PORT_WARNING),
  weight: number10().typeError("Weight must be a number.").min(1, `Weight must be between 1 and 255.`).max(255, `Weight must be between 1 and 255.`),
  mode: mixed6().oneOf(["accept", "reject", "backup", "drain"])
});
var createNodeBalancerConfigSchema = object12({
  algorithm: mixed6().oneOf(["roundrobin", "leastconn", "source"]),
  check_attempts: number10(),
  check_body: string12().when("check", {
    is: "http_body",
    then: string12().required("An HTTP body regex is required.")
  }),
  check_interval: number10().typeError("Check interval must be a number."),
  check_passive: boolean7(),
  check_path: string12().matches(/\/.*/).when("check", {
    is: "http",
    then: string12().required("An HTTP path is required.")
  }).when("check", {
    is: "http_body",
    then: string12().required("An HTTP path is required.")
  }),
  proxy_protocol: string12().oneOf(["none", "v1", "v2"]),
  check_timeout: number10().typeError("Timeout must be a number.").integer(),
  check: mixed6().oneOf(["none", "connection", "http", "http_body"]),
  cipher_suite: mixed6().oneOf(["recommended", "legacy"]),
  port: number10().integer().required("Port is required").min(1, PORT_WARNING).max(65535, PORT_WARNING),
  protocol: mixed6().oneOf(["http", "https", "tcp"]),
  ssl_key: string12().when("protocol", {
    is: "https",
    then: string12().required("SSL key is required when using HTTPS.")
  }),
  ssl_cert: string12().when("protocol", {
    is: "https",
    then: string12().required("SSL certificate is required when using HTTPS.")
  }),
  stickiness: mixed6().oneOf(["none", "table", "http_cookie"]),
  nodes: array9().of(nodeBalancerConfigNodeSchema).required().min(1, "You must provide at least one back end node.")
});
var UpdateNodeBalancerConfigSchema = object12({
  algorithm: mixed6().oneOf(["roundrobin", "leastconn", "source"]),
  check_attempts: number10(),
  check_body: string12().when("check", {
    is: "http_body",
    then: string12().required("An HTTP body regex is required.")
  }),
  check_interval: number10().typeError("Check interval must be a number."),
  check_passive: boolean7(),
  check_path: string12().matches(/\/.*/).when("check", {
    is: "http",
    then: string12().required("An HTTP path is required.")
  }).when("check", {
    is: "http_body",
    then: string12().required("An HTTP path is required.")
  }),
  proxy_protocol: string12().oneOf(["none", "v1", "v2"]),
  check_timeout: number10().typeError("Timeout must be a number.").integer(),
  check: mixed6().oneOf(["none", "connection", "http", "http_body"]),
  cipher_suite: mixed6().oneOf(["recommended", "legacy"]),
  port: number10().typeError("Port must be a number.").integer().min(1, PORT_WARNING).max(65535, PORT_WARNING),
  protocol: mixed6().oneOf(["http", "https", "tcp"]),
  ssl_key: string12().when("protocol", {
    is: "https",
    then: string12().required()
  }),
  ssl_cert: string12().when("protocol", {
    is: "https",
    then: string12().required()
  }),
  stickiness: mixed6().oneOf(["none", "table", "http_cookie"]),
  nodes: array9().of(nodeBalancerConfigNodeSchema)
});
var NodeBalancerSchema = object12({
  label: string12().min(3, LABEL_WARNING).max(32, LABEL_WARNING).matches(
    /^[a-zA-Z0-9-_]+$/,
    "Label can't contain special characters or spaces."
  ),
  client_conn_throttle: number10().typeError("Must be a number."),
  region: string12().required("Region is required."),
  configs: array9().of(createNodeBalancerConfigSchema).test("unique", "Port must be unique.", function(value) {
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
var UpdateNodeBalancerSchema = object12({
  label: string12().min(3, LABEL_WARNING).max(32, LABEL_WARNING).matches(
    /^[a-zA-Z0-9-_]+$/,
    "Label can't contain special characters or spaces."
  ),
  client_conn_throttle: number10().typeError("Must be a number."),
  region: string12()
});

// src/objectStorageKeys.schema.ts
import { object as object13, string as string13 } from "yup";
var createObjectStorageKeysSchema = object13({
  label: string13().required("Label is required.").min(3, "Label must be between 3 and 50 characters.").max(50, "Label must be between 3 and 50 characters.").trim()
});

// src/profile.schema.ts
import { array as array10, boolean as boolean8, number as number11, object as object14, string as string14 } from "yup";
import { isPossiblePhoneNumber } from "libphonenumber-js";
var createPersonalAccessTokenSchema = object14({
  scopes: string14(),
  expiry: string14(),
  label: string14().min(1, "Label must be between 1 and 100 characters.").max(100, "Label must be between 1 and 100 characters.")
});
var createSSHKeySchema = object14({
  label: string14().required("Label is required.").min(1, "Label must be between 1 and 64 characters.").max(64, "Label must be between 1 and 64 characters.").trim(),
  ssh_key: string14()
});
var updateProfileSchema = object14({
  email: string14().email(),
  timezone: string14(),
  email_notifications: boolean8(),
  authorized_keys: array10().of(string14()),
  restricted: boolean8(),
  two_factor_auth: boolean8(),
  lish_auth_method: string14().oneOf(["password_keys", "keys_only", "disabled"]),
  authentication_type: string14().oneOf(["password", "github"])
});
var SendCodeToPhoneNumberSchema = object14({
  iso_code: string14().required(),
  phone_number: string14().test(
    "is-phone-number",
    "Not a valid phone number",
    (phone_number, context) => {
      const { iso_code } = context.parent;
      if (!phone_number) {
        return false;
      }
      return isPossiblePhoneNumber(phone_number, iso_code);
    }
  )
});
var VerifyPhoneNumberCodeSchema = object14({
  otp_code: string14().required("Verification Code is required.").test(
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
var SecurityQuestionsSchema = object14({
  security_questions: array10().of(
    object14({
      question_id: number11().required("You must pick a question."),
      response: string14().min(3, "Answers must be at least 3 characters.").max(17, "Answers must be at most 17 characters.").required("You must provide an answer to each security question.")
    }).required()
  ).length(3, "You must answer all 3 security questions.").required()
});

// src/records.schema.ts
import { mixed as mixed7, number as number12, object as object15, string as string15 } from "yup";
var recordBaseSchema = object15().shape({
  name: string15().max(100, "Record name must be 100 characters or less."),
  target: string15(),
  priority: number12().min(0, "Priority must be between 0 and 255.").max(255, "Priority must be between 0 and 255."),
  weight: number12(),
  port: number12(),
  service: string15().nullable(true),
  protocol: string15().nullable(true),
  ttl_sec: number12(),
  tag: string15()
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
  type: mixed7().required("Type is required.").oneOf(validRecordTypes)
});
var updateRecordSchema = recordBaseSchema.shape({});

// src/stackscripts.schema.ts
import { array as array11, boolean as boolean9, object as object16, string as string16 } from "yup";
var stackScriptSchema = object16({
  script: string16().required("Script is required."),
  label: string16().required("Label is required.").min(3, "Label must be between 3 and 128 characters.").max(128, "Label must be between 3 and 128 characters."),
  images: array11().of(string16()).required("An image is required."),
  description: string16(),
  is_public: boolean9(),
  rev_note: string16()
});
var updateStackScriptSchema = object16({
  script: string16(),
  label: string16().min(3, "Label must be between 3 and 128 characters.").max(128, "Label must be between 3 and 128 characters."),
  images: array11().of(string16()).min(1, "An image is required."),
  description: string16(),
  is_public: boolean9(),
  rev_note: string16()
});

// src/support.schema.ts
import { number as number13, object as object17, string as string17 } from "yup";
var createSupportTicketSchema = object17({
  summary: string17().required("Summary is required.").min(1, "Summary must be between 1 and 64 characters.").max(64, "Summary must be between 1 and 64 characters.").trim(),
  description: string17().required("Description is required.").min(1, "Description must be between 1 and 64,000 characters.").max(64e3, "Description must be between 1 and 64,000 characters.").trim(),
  domain_id: number13(),
  linode_id: number13(),
  longviewclient_id: number13(),
  nodebalancer_id: number13(),
  volume_id: number13()
});
var createReplySchema = object17({
  description: string17().required("Description is required.").min(1, "Description must be between 1 and 65,535 characters.").max(65535, "Description must be between 1 and 65,535 characters.").trim()
});

// src/transfers.schema.ts
import { array as array12, number as number14, object as object18 } from "yup";
var CreateTransferSchema = object18({
  entities: object18({
    linodes: array12().of(number14())
  })
});

// src/twofactor.schema.ts
import { object as object19, string as string18 } from "yup";
var enableTwoFactorSchema = object19({
  tfa_code: string18().required("Please enter a token.")
});

// src/volumes.schema.ts
import { array as array13, number as number15, object as object20, string as string19 } from "yup";

// src/constants.ts
var MAX_VOLUME_SIZE = 10240;

// src/volumes.schema.ts
var createSizeValidation = (minSize = 10) => number15().integer().typeError(`Size must be a number`).min(minSize, `Size must be between ${minSize} and ${MAX_VOLUME_SIZE}.`).max(
  MAX_VOLUME_SIZE,
  `Size must be between ${minSize} and ${MAX_VOLUME_SIZE}.`
).required(`A size is required.`);
var CreateVolumeSchema = object20({
  region: string19().when("linode_id", {
    is: (id) => id === void 0 || id === "",
    then: string19().required("Must provide a region or a Linode ID.")
  }),
  linode_id: number15(),
  size: createSizeValidation(10),
  label: string19().required("Label is required.").ensure().trim().min(1, "Label must be between 1 and 32 characters.").max(32, "Label must be 32 characters or less."),
  config_id: number15().typeError("Config ID must be a number."),
  tags: array13().of(string19())
});
var CloneVolumeSchema = object20({
  label: string19().required()
});
var ResizeVolumeSchema = (minSize = 10) => object20({
  size: createSizeValidation(minSize)
});
var UpdateVolumeSchema = object20({
  label: string19().required()
});
var AttachVolumeSchema = object20({
  linode_id: number15().required(),
  config_id: number15().required()
});
export {
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
};
