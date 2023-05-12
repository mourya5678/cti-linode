export declare const linodeInterfaceSchema: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
    purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
}>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
    purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
}>[] | undefined, import("yup/lib/object").AssertsShape<{
    purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
}>[] | undefined>;
export declare const ResizeLinodeDiskSchema: import("yup/lib/object").OptionalObjectSchema<{
    size: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    size: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const UpdateLinodePasswordSchema: import("yup/lib/object").OptionalObjectSchema<{
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const CreateLinodeSchema: import("yup/lib/object").OptionalObjectSchema<{
    type: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    region: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    stackscript_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    backup_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    swap_size: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    image: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    authorized_keys: any;
    backups_enabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    stackscript_data: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>[] | null | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").ObjectShape>[] | null | undefined>;
    booted: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    tags: any;
    private_ip: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    authorized_users: any;
    root_pass: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    interfaces: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>[] | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    type: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    region: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    stackscript_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    backup_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    swap_size: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    image: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    authorized_keys: any;
    backups_enabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    stackscript_data: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>[] | null | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").ObjectShape>[] | null | undefined>;
    booted: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    tags: any;
    private_ip: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    authorized_users: any;
    root_pass: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    interfaces: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>[] | undefined>;
}>>;
export declare const UpdateLinodeSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    tags: any;
    watchdog_enabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    alerts: import("yup/lib/object").OptionalObjectSchema<{
        cpu: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        network_in: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        network_out: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        transfer_quota: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        io: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        cpu: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        network_in: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        network_out: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        transfer_quota: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        io: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>;
    backups: import("yup/lib/object").OptionalObjectSchema<{
        schedule: import("yup/lib/object").OptionalObjectSchema<{
            day: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            window: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            day: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            window: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>>;
        enabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        schedule: import("yup/lib/object").OptionalObjectSchema<{
            day: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            window: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            day: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            window: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>>;
        enabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }>>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    tags: any;
    watchdog_enabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    alerts: import("yup/lib/object").OptionalObjectSchema<{
        cpu: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        network_in: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        network_out: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        transfer_quota: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        io: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        cpu: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        network_in: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        network_out: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        transfer_quota: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        io: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    }>>;
    backups: import("yup/lib/object").OptionalObjectSchema<{
        schedule: import("yup/lib/object").OptionalObjectSchema<{
            day: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            window: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            day: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            window: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>>;
        enabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        schedule: import("yup/lib/object").OptionalObjectSchema<{
            day: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            window: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            day: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
            window: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        }>>;
        enabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }>>;
}>>;
export declare const RebuildLinodeSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    image: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    root_pass: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    authorized_keys: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>[] | undefined>;
    authorized_users: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    stackscript_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    stackscript_data: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>[] | null | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").ObjectShape>[] | null | undefined>;
    booted: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    image: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    root_pass: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    authorized_keys: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>[] | undefined>;
    authorized_users: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    stackscript_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    stackscript_data: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>[] | null | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").ObjectShape>[] | null | undefined>;
    booted: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    image: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    root_pass: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    authorized_keys: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>[] | undefined>;
    authorized_users: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    stackscript_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    stackscript_data: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>[] | null | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").ObjectShape>[] | null | undefined>;
    booted: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>>>;
export declare const RebuildLinodeFromStackScriptSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    image: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    root_pass: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    authorized_keys: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>[] | undefined>;
    authorized_users: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    stackscript_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    stackscript_data: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>[] | null | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").ObjectShape>[] | null | undefined>;
    booted: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>, {
    stackscript_id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    image: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    root_pass: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    authorized_keys: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>[] | undefined>;
    authorized_users: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    stackscript_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    stackscript_data: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>[] | null | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").ObjectShape>[] | null | undefined>;
    booted: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>, {
    stackscript_id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    image: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    root_pass: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    authorized_keys: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        created: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    }>[] | undefined>;
    authorized_users: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    stackscript_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    stackscript_data: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>[] | null | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").ObjectShape>[] | null | undefined>;
    booted: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>, {
    stackscript_id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>>;
export declare const IPAllocationSchema: import("yup/lib/object").OptionalObjectSchema<{
    type: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    public: import("yup/lib/boolean").RequiredBooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    type: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    public: import("yup/lib/boolean").RequiredBooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const CreateSnapshotSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const CreateLinodeConfigSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    devices: import("yup/lib/object").RequiredObjectSchema<{
        sda: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdb: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdc: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdd: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sde: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdf: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdg: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdh: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        sda: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdb: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdc: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdd: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sde: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdf: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdg: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdh: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
    }>>;
    kernel: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    comments: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    memory_limit: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    run_level: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    virt_mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    helpers: import("yup/lib/object").OptionalObjectSchema<{
        updatedb_disabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        distro: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        modules_dep: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        network: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        devtmpfs_automount: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        updatedb_disabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        distro: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        modules_dep: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        network: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        devtmpfs_automount: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }>>;
    root_device: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    interfaces: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>[] | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    devices: import("yup/lib/object").RequiredObjectSchema<{
        sda: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdb: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdc: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdd: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sde: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdf: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdg: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdh: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        sda: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdb: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdc: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdd: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sde: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdf: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdg: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdh: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
    }>>;
    kernel: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    comments: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    memory_limit: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    run_level: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    virt_mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    helpers: import("yup/lib/object").OptionalObjectSchema<{
        updatedb_disabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        distro: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        modules_dep: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        network: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        devtmpfs_automount: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        updatedb_disabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        distro: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        modules_dep: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        network: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        devtmpfs_automount: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }>>;
    root_device: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    interfaces: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>[] | undefined>;
}>>;
export declare const UpdateLinodeConfigSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    devices: import("yup/lib/object").OptionalObjectSchema<{
        sda: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdb: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdc: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdd: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sde: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdf: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdg: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdh: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        sda: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdb: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdc: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdd: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sde: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdf: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdg: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdh: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
    }>>;
    kernel: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    comments: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    memory_limit: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    run_level: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    virt_mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    helpers: import("yup/lib/object").OptionalObjectSchema<{
        updatedb_disabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        distro: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        modules_dep: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        network: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        devtmpfs_automount: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        updatedb_disabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        distro: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        modules_dep: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        network: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        devtmpfs_automount: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }>>;
    root_device: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    interfaces: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>[] | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    devices: import("yup/lib/object").OptionalObjectSchema<{
        sda: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdb: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdc: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdd: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sde: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdf: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdg: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdh: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        sda: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdb: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdc: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdd: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sde: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdf: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdg: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
        sdh: import("yup/lib/object").OptionalObjectSchema<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
            disk_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
            volume_id: import("yup").NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
        }> | null>;
    }>>;
    kernel: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    comments: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    memory_limit: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    run_level: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    virt_mode: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    helpers: import("yup/lib/object").OptionalObjectSchema<{
        updatedb_disabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        distro: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        modules_dep: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        network: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        devtmpfs_automount: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        updatedb_disabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        distro: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        modules_dep: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        network: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        devtmpfs_automount: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }>>;
    root_device: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    interfaces: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        purpose: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        label: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
        ipam_address: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    }>[] | undefined>;
}>>;
export declare const CreateLinodeDiskSchema: import("yup/lib/object").OptionalObjectSchema<{
    size: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    filesystem: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    read_only: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    image: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    authorized_keys: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    authorized_users: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    root_pass: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    stackscript_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    stackscript_data: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>[] | null | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").ObjectShape>[] | null | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    size: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    filesystem: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    read_only: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    image: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    authorized_keys: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    authorized_users: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    root_pass: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    stackscript_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    stackscript_data: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>[] | null | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").ObjectShape>[] | null | undefined>;
}>>;
export declare const UpdateLinodeDiskSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    filesystem: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    filesystem: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
}>>;
export declare const CreateLinodeDiskFromImageSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<{
    size: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    filesystem: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    read_only: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    image: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    authorized_keys: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    authorized_users: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    root_pass: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    stackscript_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    stackscript_data: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>[] | null | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").ObjectShape>[] | null | undefined>;
}, {
    image: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<{
    size: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    filesystem: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    read_only: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    image: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    authorized_keys: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    authorized_users: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    root_pass: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    stackscript_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    stackscript_data: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>[] | null | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").ObjectShape>[] | null | undefined>;
}, {
    image: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<{
    size: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    filesystem: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    read_only: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    image: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    authorized_keys: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    authorized_users: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    root_pass: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    stackscript_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    stackscript_data: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>[] | null | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").ObjectShape>[] | null | undefined>;
}, {
    image: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>>;
//# sourceMappingURL=linodes.schema.d.ts.map