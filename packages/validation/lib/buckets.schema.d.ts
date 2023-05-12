export declare const CreateBucketSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup").StringSchema<string, import("yup/lib/types").AnyObject, string>;
    cluster: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup").StringSchema<string, import("yup/lib/types").AnyObject, string>;
    cluster: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const UploadCertificateSchema: import("yup/lib/object").OptionalObjectSchema<{
    certificate: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    private_key: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    certificate: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    private_key: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const UpdateBucketAccessSchema: import("yup/lib/object").OptionalObjectSchema<{
    acl: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    cors_enabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    acl: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    cors_enabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>>;
//# sourceMappingURL=buckets.schema.d.ts.map