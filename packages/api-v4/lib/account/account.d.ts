import { Account, AccountSettings, CancelAccount, CancelAccountPayload, NetworkUtilization, Agreements } from './types';
/**
 * getAccountInfo
 *
 * Return account information,
 * including contact and billing info.
 *
 */
export declare const getAccountInfo: () => Promise<Account>;
/**
 * getNetworkUtilization
 *
 * Return your current network transfer quota and usage.
 *
 */
export declare const getNetworkUtilization: () => Promise<NetworkUtilization>;
/**
 * updateAccountInfo
 *
 * Update your contact or billing information.
 *
 */
export declare const updateAccountInfo: (data: Partial<Account>) => Promise<Account>;
/**
 * getAccountSettings
 *
 * Retrieve general account-level settings.
 *
 */
export declare const getAccountSettings: () => Promise<AccountSettings>;
/**
 * updateAccountSettings
 *
 * Update a user's account settings.
 *
 */
export declare const updateAccountSettings: (data: Partial<AccountSettings>) => Promise<AccountSettings>;
/**
 * cancelAccount
 *
 * Cancels an account and returns a survey monkey link for a user to fill out
 */
export declare const cancelAccount: (data: CancelAccountPayload) => Promise<CancelAccount>;
/**
 * getAccountAgreements
 *
 * Gets the state of all agreements (signed or unsigned).
 *
 */
export declare const getAccountAgreements: () => Promise<Agreements>;
/**
 * signAgreement
 *
 * Sign one or more agreements
 */
export declare const signAgreement: (data: Partial<Agreements>) => Promise<{}>;
//# sourceMappingURL=account.d.ts.map