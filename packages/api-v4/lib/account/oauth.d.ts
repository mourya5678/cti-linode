import { ResourcePage } from '../types';
import { OAuthClient, OAuthClientRequest } from './types';
/**
 * getOAuthClients
 *
 * Returns a paginated list of OAuth apps authorized on your account.
 *
 */
export declare const getOAuthClients: (params?: any, filter?: any) => Promise<ResourcePage<OAuthClient>>;
/**
 * getOAuthClient
 *
 * Returns a single authorized OAuth app
 *
 * @param clientId { number } the ID of the OAuth client to retrieve
 *
 */
export declare const getOAuthClient: (clientId: number) => Promise<string>;
/**
 * createOAuthClient
 *
 * Create a new authorized OAuth client. The creation endpoint
 * will return a secret used for authenticating with the new app.
 * This secret will not be returned on subsequent requests
 * (e.g. using getOAuthClient)
 *
 */
export declare const createOAuthClient: (data: OAuthClientRequest) => Promise<OAuthClient & {
    secret: string;
}>;
/**
 * resetOAuthClientSecret
 *
 * Resets the OAuth Client secret for a client you own, and returns the OAuth Client
 * with the new secret in plaintext. This secret is not supposed to be publicly known
 * or disclosed anywhere. This can be used to generate a new secret in case the one
 * you have has been leaked, or to get a new secret if you lost the original.
 * The old secret is expired immediately, and logins to your client with the old secret will fail.
 *
 */
export declare const resetOAuthClientSecret: (clientId: number | string) => Promise<OAuthClient & {
    secret: string;
}>;
/**
 * updateOAuthClient
 *
 * Update the label and/or redirect uri of your OAuth client.
 *
 * @param clientId { number } the ID of the client to be updated
 */
export declare const updateOAuthClient: (clientId: string, data: Partial<OAuthClientRequest>) => Promise<OAuthClient>;
/**
 * deleteOAuthClient
 *
 * Deletes an OAuth Client registered with Linode.
 * The Client ID and Client secret will no longer be accepted by
 * https://login.linode.com, and all tokens issued to this client
 * will be invalidated (meaning that if your application was using
 * a token, it will no longer work).
 *
 * @param clientId { number } ID of the client to be deleted
 *
 */
export declare const deleteOAuthClient: (clientId: number | string) => Promise<{}>;
//# sourceMappingURL=oauth.d.ts.map