import { ResourcePage } from '../types';
import { AccountLogin } from './types';
/**
 * getAccountLogins
 *
 * Retrieve a paginated list of logins on your account.
 *
 */
export declare const getAccountLogins: (params?: any, filter?: any) => Promise<ResourcePage<AccountLogin>>;
/**
 * getAccountLogin
 *
 * Retrieve details for a single login.
 *
 * @param loginId { number } The ID of the login to be retrieved
 *
 */
export declare const getAccountLogin: (loginId: number) => Promise<AccountLogin>;
//# sourceMappingURL=logins.d.ts.map