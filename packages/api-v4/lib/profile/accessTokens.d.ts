import { ResourcePage as Page } from '../types';
import { Token, TokenRequest } from './types';
/**
 * getPersonalAccessTokens
 *
 * Returns a paginated list of Personal Access Tokens currently active for your User.
 *
 */
export declare const getPersonalAccessTokens: (params?: any, filters?: any) => Promise<Page<Token>>;
/**
 * getPersonalAccessToken
 *
 * Retrieve a single Personal Access Token.
 *
 * @param ticketId { number } the ID of the token to view
 *
 */
export declare const getPersonalAccessToken: (id: number) => Promise<Token>;
/**
 * createPersonalAccessToken
 *
 * Creates a Personal Access Token for your User.
 * The raw token will be returned in the response. You may create a token with at most the scopes of
 * your current token. The created token will be able to access your Account until the given expiry,
 * or until it is revoked.
 *
 * @param data { Object } Token request object
 * @param data.scope { string } The scopes to create the token with. These cannot be changed after creation,
 * and may not exceed the scopes of the acting token. If omitted, the new token will have the same
 * scopes as the acting token.
 * @param data.expiry { string } Datetime string indicating when this token should be valid until.
 * If omitted, the new token will be valid until it is manually revoked.
 * @param data.label { string } String to identify this token. Used for organizational purposes only.
 *
 */
export declare const createPersonalAccessToken: (data: TokenRequest) => Promise<Token>;
/**
 * updatePersonalAccessToken
 *
 * Change the label or expiry date of a Personal Access Token
 *
 * @param tokenId { number } the ID of the token to be updated.
 * @param data { Object } JSON object to be sent as the X-Filter header.
 * @param data.label { string } update the Token's label.
 * @param data.expiry { string } Datetime string to update when the token should expire.
 *
 */
export declare const updatePersonalAccessToken: (tokenId: number, data: Partial<TokenRequest>) => Promise<Token>;
/**
 * deletePersonalAccessToken
 *
 * Deletes a single Personal Access Token.
 *
 * @param tokenId { number } the ID of the token to be deleted.
 *
 */
export declare const deletePersonalAccessToken: (tokenId: number) => Promise<{}>;
//# sourceMappingURL=accessTokens.d.ts.map