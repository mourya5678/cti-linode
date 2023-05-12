import { ResourcePage as Page } from '../types';
import { SSHKey } from './types';
/**
 * getSSHKeys
 *
 * Returns a collection of SSH Keys you've added to your Profile.
 *
 */
export declare const getSSHKeys: (params?: any, filters?: any) => Promise<Page<SSHKey>>;
/**
 * getSSHKey
 *
 * View a single SSH key by ID.
 *
 */
export declare const getSSHKey: (keyId: number) => Promise<SSHKey>;
/**
 * createSSHKey
 *
 * Add an SSH key to your account.
 *
 */
export declare const createSSHKey: (data: {
    label: string;
    ssh_key: string;
}) => Promise<SSHKey>;
/**
 * updateSSHKey
 *
 * Update an existing SSH key. Currently, only the label field can be updated.
 *
 * @param keyId { number } the ID of the key to be updated.
 *
 */
export declare const updateSSHKey: (keyId: number, data: Partial<SSHKey>) => Promise<SSHKey>;
/**
 * deleteSSHKey
 *
 * Remove a single SSH key from your Profile.
 *
 * @param keyId { number } the ID of the key to be deleted.
 *
 */
export declare const deleteSSHKey: (keyId: number) => Promise<{}>;
//# sourceMappingURL=sshkeys.d.ts.map