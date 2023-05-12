import { ResourcePage as Page } from '../types';
import { VLAN } from './types';
/**
 * getVlans
 *
 * Return a paginated list of Virtual LANS (VLANS) on this account.
 *
 */
export declare const getVlans: (params?: any, filters?: any) => Promise<Page<VLAN>>;
/**
 * getVlan
 *
 * Return detailed information about a single VLAN
 *
 */
export declare const getVlan: (vlanID: number) => Promise<Page<VLAN>>;
//# sourceMappingURL=vlans.d.ts.map