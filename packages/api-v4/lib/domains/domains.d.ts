import { ResourcePage as Page } from '../types';
import { CloneDomainPayload, CreateDomainPayload, Domain, ImportZonePayload, UpdateDomainPayload } from './types';
/**
 * Returns a paginated list of Domains.
 *
 */
export declare const getDomains: (params?: any, filters?: any) => Promise<Page<Domain>>;
/**
 * Returns all of the information about a specified Domain.
 *
 * @param domainId { number } The ID of the Domain to access.
 */
export declare const getDomain: (domainId: number) => Promise<Domain>;
/**
 * Adds a new Domain to Linode's DNS Manager.
 *
 * @param data { object } Options for type, status, etc.
 */
export declare const createDomain: (data: CreateDomainPayload) => Promise<Domain>;
/**
 * Update information about a Domain in Linode's DNS Manager.
 *
 * @param domainId { number } The ID of the Domain to access.
 * @param data { object } Options for type, status, etc.
 */
export declare const updateDomain: (domainId: number, data: UpdateDomainPayload) => Promise<Domain>;
/**
 * Deletes a Domain from Linode's DNS Manager. The Domain will be removed from Linode's nameservers shortly after this
 * operation completes. This also deletes all associated Domain Records.
 *
 * @param domainId { number } The ID of the Domain to delete.
 */
export declare const deleteDomain: (domainId: number) => Promise<{}>;
/**
 * Clones a Domain.
 *
 * @param domainId { number } The ID of the Domain to clone.
 * @param cloneName { string } The name of the new domain.
 */
export declare const cloneDomain: (domainId: number, data: CloneDomainPayload) => Promise<Domain>;
/**
 * Imports a domain zone from a remote nameserver.
 *
 * @param domain { string } The domain to import.
 * @param remote_nameserver { string } The remote nameserver that allows zone transfers (AXFR).
 */
export declare const importZone: (data: ImportZonePayload) => Promise<Domain>;
//# sourceMappingURL=domains.d.ts.map