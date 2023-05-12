export declare const createRecordSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    name: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    target: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    priority: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    service: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    protocol: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    ttl_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    tag: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>, {
    type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    name: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    target: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    priority: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    service: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    protocol: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    ttl_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    tag: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>, {
    type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    name: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    target: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    priority: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    service: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    protocol: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    ttl_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    tag: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>, {
    type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
}>>>;
export declare const updateRecordSchema: import("yup").ObjectSchema<{
    [x: string]: import("yup").AnySchema<any, any, any> | import("yup/lib/Lazy").default<any, any> | import("yup/lib/Reference").default<unknown>;
    name: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    target: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    priority: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    service: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    protocol: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    ttl_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    tag: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    [x: string]: import("yup").AnySchema<any, any, any> | import("yup/lib/Lazy").default<any, any> | import("yup/lib/Reference").default<unknown>;
    name: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    target: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    priority: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    service: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    protocol: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    ttl_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    tag: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>, import("yup/lib/object").AssertsShape<{
    [x: string]: import("yup").AnySchema<any, any, any> | import("yup/lib/Lazy").default<any, any> | import("yup/lib/Reference").default<unknown>;
    name: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    target: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    priority: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    weight: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    port: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    service: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    protocol: import("yup").StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    ttl_sec: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    tag: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>;
//# sourceMappingURL=records.schema.d.ts.map