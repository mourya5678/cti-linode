export declare const createPersonalAccessTokenSchema: import("yup/lib/object").OptionalObjectSchema<{
    scopes: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    expiry: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    scopes: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    expiry: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>;
export declare const createSSHKeySchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    ssh_key: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>;
export declare const updateProfileSchema: import("yup/lib/object").OptionalObjectSchema<{
    email: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    timezone: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    email_notifications: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    authorized_keys: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    restricted: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    two_factor_auth: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    lish_auth_method: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    authentication_type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    email: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    timezone: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    email_notifications: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    authorized_keys: import("yup").ArraySchema<import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined, (string | undefined)[] | undefined>;
    restricted: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    two_factor_auth: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    lish_auth_method: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    authentication_type: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>;
export declare const SendCodeToPhoneNumberSchema: import("yup/lib/object").OptionalObjectSchema<{
    iso_code: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    phone_number: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    iso_code: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    phone_number: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>;
export declare const VerifyPhoneNumberCodeSchema: import("yup/lib/object").OptionalObjectSchema<{
    otp_code: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    otp_code: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const SecurityQuestionsSchema: import("yup/lib/object").OptionalObjectSchema<{
    security_questions: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").RequiredObjectSchema<{
        question_id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        response: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        question_id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        response: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        question_id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        response: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    }>[] | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    security_questions: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").RequiredObjectSchema<{
        question_id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        response: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        question_id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        response: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        question_id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        response: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    }>[] | undefined>;
}>>;
//# sourceMappingURL=profile.schema.d.ts.map