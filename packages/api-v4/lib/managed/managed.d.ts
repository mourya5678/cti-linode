import { ResourcePage as Page } from '../types';
import { ContactPayload, CredentialPayload, ManagedContact, ManagedCredential, ManagedIssue, ManagedLinodeSetting, ManagedServiceMonitor, ManagedServicePayload, ManagedSSHPubKey, ManagedSSHSetting, ManagedStats, UpdateCredentialPayload, UpdatePasswordPayload } from './types';
/**
 * enableManaged
 *
 * Enables the Managed feature
 * on your account. This service is billed at $100/month/Linode.
 *
 * Should this live in /account?
 *
 */
export declare const enableManaged: () => Promise<{}>;
/**
 * getServices
 *
 * Returns a paginated list of Managed Services on your account.
 */
export declare const getServices: (params?: any, filters?: any) => Promise<Page<ManagedServiceMonitor>>;
/**
 * disableServiceMonitor
 *
 * Temporarily disables monitoring of a Managed Service.
 */
export declare const disableServiceMonitor: (serviceID: number) => Promise<ManagedServiceMonitor>;
/**
 * enableServiceMonitor
 *
 * Enables monitoring of a Managed Service that is currently disabled.
 */
export declare const enableServiceMonitor: (serviceID: number) => Promise<ManagedServiceMonitor>;
/**
 * deleteServiceMonitor
 *
 * Disables a Managed Service and removes it from your account.
 */
export declare const deleteServiceMonitor: (serviceID: number) => Promise<{}>;
/**
 * getLinodeSettings
 *
 * Returns a paginated list of Managed Settings for your Linodes. There will be one entry per Linode on your Account.
 */
export declare const getLinodeSettings: (params?: any, filters?: any) => Promise<Page<ManagedLinodeSetting>>;
/**
 * createServiceMonitor
 *
 * Creates a Managed Service Monitor
 */
export declare const createServiceMonitor: (data: ManagedServicePayload) => Promise<ManagedServiceMonitor>;
/**
 * updateServiceMonitor
 *
 * Update a Managed Service Monitor
 */
export declare const updateServiceMonitor: (monitorID: number, data: Partial<ManagedServicePayload>) => Promise<ManagedServiceMonitor>;
/**
 * getCredentials
 *
 * Returns a paginated list of Managed Credentials for your account.
 */
export declare const getCredentials: (params?: any, filters?: any) => Promise<Page<ManagedCredential>>;
/**
 * updateCredential
 *
 * Update the label on a Managed Credential on your account.
 * Other fields (password and username) cannot be changed.
 */
export declare const updateCredential: (credentialID: number, data: UpdateCredentialPayload) => Promise<ManagedCredential>;
/**
 * updatePassword
 *
 * Update the username and/or password on a Managed Credential on your account.
 */
export declare const updatePassword: (credentialID: number, data: UpdatePasswordPayload) => Promise<{}>;
/**
 * deleteCredential
 *
 * Disables a Managed Credential and removes it from your account.
 */
export declare const deleteCredential: (credentialID: number) => Promise<{}>;
export declare const createCredential: (data: CredentialPayload) => Promise<ManagedCredential>;
/**
 * getSSHKey
 *
 * Returns the unique SSH public key assigned to your Linode account's Managed service.
 * If you add this public key to a Linode on your account, Linode special forces will be
 * able to log in to the Linode with this key when attempting to resolve issues.
 */
export declare const getSSHPubKey: () => Promise<ManagedSSHPubKey>;
/**
 * updateLinodeSettings
 *
 * Updates a single Linode's Managed settings.
 *
 */
export declare const updateLinodeSettings: (linodeId: number, data: {
    ssh: Partial<ManagedSSHSetting>;
}) => Promise<ManagedLinodeSetting>;
/**
 * getManagedContacts
 *
 * Returns a paginated list of Managed Contacts on your Account.
 */
export declare const getManagedContacts: (params?: any, filters?: any) => Promise<Page<ManagedContact>>;
/**
 * createContact
 *
 * Creates a Managed Contact
 */
export declare const createContact: (data: ContactPayload) => Promise<ManagedContact>;
/**
 * updateContact
 *
 * Updates a Managed Contact
 */
export declare const updateContact: (contactId: number, data: Partial<ContactPayload>) => Promise<ManagedContact>;
/**
 * deleteContact
 *
 * Deletes a Managed Contact
 */
export declare const deleteContact: (contactId: number) => Promise<{}>;
/**
 * getManagedIssues
 *
 * Returns a paginated list of Issues on a Managed customer's account.
 */
export declare const getManagedIssues: () => Promise<Page<ManagedIssue>>;
/**
 * getManagedStats
 *
 * Returns usage data for all of the Linodes on a Managed customer's account.
 */
export declare const getManagedStats: () => Promise<ManagedStats>;
//# sourceMappingURL=managed.d.ts.map