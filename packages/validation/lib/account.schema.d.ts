export declare const updateAccountSchema: import("yup/lib/object").OptionalObjectSchema<{
    email: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    address_1: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    city: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    company: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    country: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    first_name: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    last_name: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    address_2: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    phone: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    state: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    tax_id: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    zip: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    email: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    address_1: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    city: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    company: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    country: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    first_name: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    last_name: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    address_2: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    phone: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    state: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    tax_id: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    zip: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>;
export declare const createOAuthClientSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    redirect_uri: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    redirect_uri: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const updateOAuthClientSchema: import("yup/lib/object").OptionalObjectSchema<{
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    redirect_uri: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    label: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    redirect_uri: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>;
export declare const StagePaypalPaymentSchema: import("yup/lib/object").OptionalObjectSchema<{
    cancel_url: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    redirect_url: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    usd: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    cancel_url: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    redirect_url: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    usd: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const ExecutePaypalPaymentSchema: import("yup/lib/object").OptionalObjectSchema<{
    payer_id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    payment_id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    payer_id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    payment_id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const PaymentSchema: import("yup/lib/object").OptionalObjectSchema<{
    usd: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    usd: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const CreditCardSchema: import("yup/lib/object").OptionalObjectSchema<{
    card_number: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    expiry_year: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    expiry_month: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    cvv: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    card_number: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    expiry_year: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    expiry_month: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    cvv: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const PaymentMethodSchema: import("yup/lib/object").OptionalObjectSchema<{
    type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    data: import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>;
    is_default: import("yup/lib/boolean").RequiredBooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    data: import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>;
    is_default: import("yup/lib/boolean").RequiredBooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const CreateUserSchema: import("yup/lib/object").OptionalObjectSchema<{
    username: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    restricted: import("yup/lib/boolean").RequiredBooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    username: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    restricted: import("yup/lib/boolean").RequiredBooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject>;
}>>;
export declare const UpdateUserSchema: import("yup/lib/object").OptionalObjectSchema<{
    username: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    email: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    restricted: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    username: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    email: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    restricted: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>>;
export declare const UpdateGrantSchema: import("yup/lib/object").OptionalObjectSchema<{
    global: import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>;
    linode: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
    domain: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
    nodebalancer: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
    image: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
    longview: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
    stackscript: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
    volume: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    global: import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape>>;
    linode: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
    domain: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
    nodebalancer: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
    image: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
    longview: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
    stackscript: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
    volume: import("yup").ArraySchema<import("yup/lib/object").OptionalObjectSchema<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined, import("yup/lib/object").AssertsShape<{
        id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
        permissions: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>[] | undefined>;
}>>;
export declare const UpdateAccountSettingsSchema: import("yup/lib/object").OptionalObjectSchema<{
    network_helper: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    backups_enabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    managed: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    network_helper: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    backups_enabled: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    managed: import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>>;
export declare const PromoCodeSchema: import("yup/lib/object").OptionalObjectSchema<{
    promo_code: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    promo_code: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>;
//# sourceMappingURL=account.schema.d.ts.map