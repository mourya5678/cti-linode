export declare const nodeBalancerConfigNodeSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
}>>;
export declare const createNodeBalancerConfigSchema: import("yup/lib/object").OptionalObjectSchema<{
    algorithm: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    check_attempts: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    check_body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    check_interval: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    check_passive: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    check_path: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    proxy_protocol: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    check_timeout: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    check: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    cipher_suite: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    ssl_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    ssl_cert: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    stickiness: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    nodes: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    algorithm: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    check_attempts: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    check_body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    check_interval: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    check_passive: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    check_path: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    proxy_protocol: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    check_timeout: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    check: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    cipher_suite: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    ssl_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    ssl_cert: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    stickiness: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    nodes: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
}>>;
export declare const UpdateNodeBalancerConfigSchema: import("yup/lib/object").OptionalObjectSchema<{
    algorithm: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    check_attempts: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    check_body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    check_interval: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    check_passive: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    check_path: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    proxy_protocol: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    check_timeout: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    check: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    cipher_suite: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    ssl_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    ssl_cert: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    stickiness: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    nodes: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    algorithm: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    check_attempts: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    check_body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    check_interval: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    check_passive: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    check_path: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    proxy_protocol: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    check_timeout: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    check: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    cipher_suite: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    ssl_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    ssl_cert: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    stickiness: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    nodes: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
}>>;
export declare const NodeBalancerSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    client_conn_throttle: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    region: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    configs: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        algorithm: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        check_attempts: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_interval: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_passive: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        check_path: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        proxy_protocol: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_timeout: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        cipher_suite: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ssl_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssl_cert: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        stickiness: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        nodes: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").OptionalObjectSchema<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>[] | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        algorithm: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        check_attempts: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_interval: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_passive: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        check_path: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        proxy_protocol: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_timeout: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        cipher_suite: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ssl_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssl_cert: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        stickiness: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        nodes: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").OptionalObjectSchema<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>[] | undefined>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        algorithm: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        check_attempts: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_interval: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_passive: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        check_path: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        proxy_protocol: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_timeout: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        cipher_suite: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ssl_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssl_cert: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        stickiness: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        nodes: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").OptionalObjectSchema<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>[] | undefined>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        algorithm: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        check_attempts: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_interval: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_passive: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        check_path: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        proxy_protocol: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_timeout: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        cipher_suite: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ssl_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssl_cert: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        stickiness: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        nodes: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").OptionalObjectSchema<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>[] | undefined>;
    }>[] | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    client_conn_throttle: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    region: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    configs: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        algorithm: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        check_attempts: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_interval: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_passive: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        check_path: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        proxy_protocol: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_timeout: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        cipher_suite: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ssl_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssl_cert: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        stickiness: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        nodes: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").OptionalObjectSchema<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>[] | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        algorithm: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        check_attempts: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_interval: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_passive: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        check_path: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        proxy_protocol: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_timeout: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        cipher_suite: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ssl_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssl_cert: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        stickiness: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        nodes: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").OptionalObjectSchema<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>[] | undefined>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        algorithm: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        check_attempts: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_interval: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_passive: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        check_path: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        proxy_protocol: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_timeout: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        cipher_suite: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ssl_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssl_cert: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        stickiness: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        nodes: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").OptionalObjectSchema<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>[] | undefined>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        algorithm: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        check_attempts: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_body: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_interval: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check_passive: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        check_path: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        proxy_protocol: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        check_timeout: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        check: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        cipher_suite: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        protocol: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        ssl_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssl_cert: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        stickiness: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        nodes: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").OptionalObjectSchema<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
            label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            address: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
            port: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
            weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
            mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>[] | undefined>;
    }>[] | undefined>;
}>>;
export declare const UpdateNodeBalancerSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    client_conn_throttle: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    region: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    client_conn_throttle: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    region: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>;
//# sourceMappingURL=nodebalancers.schema.d.ts.map