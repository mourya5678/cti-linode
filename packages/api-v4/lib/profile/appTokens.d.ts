import { ResourcePage as Page } from '../types';
import { Token } from './types';
/**
 * getAppTokens
 *
 * Returns list of apps that have been authorized to access your account.
 *
 */
export declare const getAppTokens: (params?: any, filters?: any) => Promise<Page<Token>>;
/**
 * getAppToken
 *
 * Returns information about a single app you've authorized to access your account.
 *
 * @param tokenId { number } the Id of the App Token to retrieve.
 */
export declare const getAppToken: (tokenId: number) => Promise<Token>;
/**
 * deleteAppToken
 *
 * Delete a single App Token. Revokes this app's ability to
 * access the API.
 *
 * @param tokenId { number } the ID of the token to be deleted.
 */
export declare const deleteAppToken: (tokenId: number) => Promise<{}>;
//# sourceMappingURL=appTokens.d.ts.map