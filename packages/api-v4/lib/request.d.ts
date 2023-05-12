import { AxiosError } from 'axios';
import { ValidationError, AnySchema } from 'yup';
import { APIError } from './types';
export declare const baseRequest: import("axios").AxiosInstance;
/**
 * setToken
 *
 * Helper function to authenticate your requests. Most Linode APIv4 endpoints
 * require an OAuth token or personal access token (PAT) to authenticate.
 *
 * @param token
 */
export declare const setToken: (token: string) => number;
export declare const isEmpty: (v: any) => boolean;
/** URL */
export declare const setURL: (url: string) => (object: any) => any;
/** METHOD */
export declare const setMethod: (method: 'GET' | 'POST' | 'PUT' | 'DELETE') => (object: any) => any;
/** Param */
export declare const setParams: (params?: any) => (object: any) => any;
export declare const setHeaders: (newHeaders?: any) => (object: any) => any;
/**
 * Validate and set data in the request configuration object.
 */
export declare const setData: (data: any, schema?: AnySchema, postValidationTransform?: ((_: any) => any) | undefined) => any;
/**
 * Attempt to convert a Yup error to our pattern. The only magic here is the recursive call
 * to itself since we have nested structures (think NodeBalancers).
 */
export declare const convertYupToLinodeErrors: (validationError: ValidationError) => APIError[];
/** X-Filter */
export declare const setXFilter: (xFilter: any) => (object: any) => any;
/** Generator */
export declare const requestGenerator: <T>(...fns: Function[]) => Promise<T>;
/**
 * Mock Error Function
 *
 * Use this function in place of your API request to mock errors. This returns the same
 * same response body as an Axios error.
 *
 * @example getLinodes = () => mockAPIError();
 * @example getLinode = () => mockAPIError(404, 'Not Found');
 * @example getLinodes = () => mockAPIError(404, 'Not Found');
 */
export declare const mockAPIError: (status?: number, statusText?: string, data?: any) => Promise<AxiosError>;
export interface CancellableRequest<T> {
    request: () => Promise<T>;
    cancel: () => void;
}
export declare const CancellableRequest: <T>(...fns: Function[]) => CancellableRequest<T>;
/**
 * setUserAgentPrefix
 *
 * Helper function to set a custom prefix on the user agent
 *
 * @param prefix
 */
export declare const setUserAgentPrefix: (prefix: string) => number;
export default requestGenerator;
//# sourceMappingURL=request.d.ts.map