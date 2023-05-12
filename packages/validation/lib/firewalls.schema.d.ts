export declare const IP_ERROR_MESSAGE = "Must be a valid IPv4 or IPv6 address or range.";
export declare const validateIP: (ipAddress?: string | null) => boolean;
export declare const CreateFirewallDeviceSchema: import("yup/lib/object").OptionalObjectSchema<{
    linodes: import("yup").ArraySchema<import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>, import("yup/lib/types").AnyObject, (number | undefined)[] | undefined, (number | undefined)[] | undefined>;
    nodebalancers: import("yup").ArraySchema<import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>, import("yup/lib/types").AnyObject, (number | undefined)[] | undefined, (number | undefined)[] | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    linodes: import("yup").ArraySchema<import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>, import("yup/lib/types").AnyObject, (number | undefined)[] | undefined, (number | undefined)[] | undefined>;
    nodebalancers: import("yup").ArraySchema<import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>, import("yup/lib/types").AnyObject, (number | undefined)[] | undefined, (number | undefined)[] | undefined>;
}>>;
export declare const ipAddress: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
export declare const validateFirewallPorts: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
export declare const FirewallRuleTypeSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    addresses: any;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    addresses: any;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    addresses: any;
}>>>;
export declare const FirewallRuleSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    inbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>[] | null | undefined>;
    outbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>[] | null | undefined>;
    inbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    outbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    inbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>[] | null | undefined>;
    outbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>[] | null | undefined>;
    inbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    outbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    inbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>[] | null | undefined>;
    outbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        addresses: any;
    }>>[] | null | undefined>;
    inbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    outbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
}>>>;
export declare const CreateFirewallSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    tags: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    rules: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        inbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        outbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        inbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        outbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        inbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        outbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        inbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        outbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        inbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        outbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        inbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        outbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    tags: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    rules: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        inbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        outbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        inbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        outbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        inbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        outbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        inbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        outbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        inbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        outbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        inbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        outbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    tags: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    rules: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        inbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        outbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        inbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        outbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        inbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        outbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        inbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        outbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        inbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        outbound: import("yup/lib/array").OptionalArraySchema<import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
            action: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            ports: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
            addresses: any;
        }>>[] | null | undefined>;
        inbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        outbound_policy: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>>;
}>>>;
export declare const UpdateFirewallSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    tags: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    status: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    tags: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    status: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    tags: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    status: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>>;
export declare const FirewallDeviceSchema: import("yup/lib/object").OptionalObjectSchema<{
    type: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    type: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>;
//# sourceMappingURL=firewalls.schema.d.ts.map