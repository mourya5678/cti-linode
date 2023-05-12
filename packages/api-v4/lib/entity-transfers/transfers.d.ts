import { ResourcePage as Page } from '../types';
import { CreateTransferPayload, EntityTransfer } from './types';
/**
 * getEntityTransfers
 *
 * Returns a paginated list of all Entity Transfers which this customer has created or accepted.
 */
export declare const getEntityTransfers: (params?: any, filters?: any) => Promise<Page<EntityTransfer>>;
/**
 * getEntityTransfer
 *
 * Get a single Entity Transfer by its token (uuid). A Pending transfer
 * can be retrieved by any unrestricted user.
 *
 */
export declare const getEntityTransfer: (token: string) => Promise<EntityTransfer>;
/**
 * createEntityTransfer
 *
 *  Creates a pending Entity Transfer for one or more entities on
 *  the sender's account. Only unrestricted users can create a transfer.
 */
export declare const createEntityTransfer: (data: CreateTransferPayload) => Promise<EntityTransfer>;
/**
 * acceptEntityTransfer
 *
 * Accepts a transfer that has been created by a user on a different account.
 */
export declare const acceptEntityTransfer: (token: string) => Promise<{}>;
/**
 * cancelTransfer
 *
 * Cancels a pending transfer. Only unrestricted users on the account
 * that created the transfer are able to cancel it.
 *
 */
export declare const cancelTransfer: (token: string) => Promise<{}>;
//# sourceMappingURL=transfers.d.ts.map