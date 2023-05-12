export declare const CreateVolumeSchema: import("yup/lib/object").OptionalObjectSchema<{
    region: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    linode_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    size: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    label: import("yup").StringSchema<string, import("yup/lib/types").AnyObject, string>;
    config_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    tags: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    region: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    linode_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    size: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    label: import("yup").StringSchema<string, import("yup/lib/types").AnyObject, string>;
    config_id: import("yup").NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    tags: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
}>>;
export declare const CloneVolumeSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const ResizeVolumeSchema: (minSize?: number) => import("yup/lib/object").OptionalObjectSchema<{
    size: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    size: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const UpdateVolumeSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const AttachVolumeSchema: import("yup/lib/object").OptionalObjectSchema<{
    linode_id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    config_id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    linode_id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    config_id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>;
//# sourceMappingURL=volumes.schema.d.ts.map