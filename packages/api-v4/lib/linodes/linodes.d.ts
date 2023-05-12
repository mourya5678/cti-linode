import { Firewall } from '../firewalls/types';
import { DeepPartial, ResourcePage as Page } from '../types';
import { Volume } from '../volumes/types';
import { CreateLinodeRequest, Linode } from './types';
/**
 * getLinode
 *
 * View details for a single Linode.
 *
 * @param linodeId { number } The id of the Linode to retrieve.
 */
export declare const getLinode: (linodeId: number) => Promise<Linode>;
/**
 * getLinodeLishToken
 *
 * Generates a token which can be used to authenticate with LISH.
 *
 * @param linodeId { number } The id of the Linode.
 */
export declare const getLinodeLishToken: (linodeId: number) => Promise<{
    lish_token: string;
}>;
/**
 * getLinodeVolumes
 *
 * Returns a paginated list of Block Storage volumes attached to the
 * specified Linode.
 *
 * @param linodeId { number } The id of the Linode.
 */
export declare const getLinodeVolumes: (linodeId: number, params?: any, filter?: any) => Promise<Page<Volume>>;
/**
 * getLinodes
 *
 * Returns a paginated list of Linodes on your account.
 *
 * @param linodeId { number } The id of the Linode.
 */
export declare const getLinodes: (params?: any, filter?: any) => Promise<Page<Linode>>;
/**
 * createLinode
 *
 * Create a new Linode. The authenticating user must have the
 * add_linodes grant in order to use this endpoint.
 *
 * @param data { object } Options for type, region, etc.
 *
 * @returns the newly created Linode object.
 */
export declare const createLinode: (data: CreateLinodeRequest) => Promise<Linode>;
/**
 * updateLinode
 *
 * Generates a token which can be used to authenticate with LISH.
 *
 * @param linodeId { number } The id of the Linode to be updated.
 * @param values { object } the fields of the Linode object to be updated.
 * Fields not included in this parameter will be left unchanged.
 */
export declare const updateLinode: (linodeId: number, values: DeepPartial<Linode>) => Promise<Linode>;
/**
 * deleteLinode
 *
 * Delete the specified Linode instance.
 *
 * @param linodeId { number } The id of the Linode to be deleted.
 */
export declare const deleteLinode: (linodeId: number) => Promise<{}>;
/**
 * resetLinodePassword
 *
 * This method is distinct from changeLinodeDiskPassword,
 * in that it resets the root password on the Linode itself
 * rather than on a specific disk. This situation only applies
 * to bare metal instances, which don't have disks that are managed
 * through the API.
 */
export declare const changeLinodePassword: (linodeId: number, root_pass: string) => Promise<{}>;
/**
 * getLinodeFirewalls
 *
 * View Firewall information for Firewalls associated with this Linode
 */
export declare const getLinodeFirewalls: (linodeId: number, params?: any, filter?: any) => Promise<Page<Firewall>>;
//# sourceMappingURL=linodes.d.ts.map