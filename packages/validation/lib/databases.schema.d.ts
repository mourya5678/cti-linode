export declare const createDatabaseSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    engine: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    region: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    type: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    cluster_size: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    replication_type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    replication_commit_type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    storage_engine: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    compression_type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    engine: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    region: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    type: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    cluster_size: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    replication_type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    replication_commit_type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    storage_engine: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    compression_type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>;
export declare const updateDatabaseSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    allow_list: import("yup/lib/array").RequiredArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined>;
    updates: any;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    allow_list: import("yup/lib/array").RequiredArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined>;
    updates: any;
}>>;
//# sourceMappingURL=databases.schema.d.ts.map