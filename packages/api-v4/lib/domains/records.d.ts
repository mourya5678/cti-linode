import { ResourcePage as Page } from '../types';
import { DomainRecord } from './types';
/**
 * Returns a paginated list of Records configured on a Domain in Linode's DNS Manager.
 *
 * @param domainId { number } The ID of the Domain we are accessing Records for.
 * @param params { object }
 */
export declare const getDomainRecords: (domainId: number, params?: any) => Promise<Page<DomainRecord>>;
/**
 * View a single Record on this Domain.
 *
 * @param domainId { number } The ID of the Domain whose Record you are accessing.
 * @param recordId { number } The ID of the Record you are accessing.
 */
export declare const getDomainRecord: (domainId: number, recordId: number) => Promise<DomainRecord>;
/**
 * Adds a new Domain Record to the zonefile this Domain represents.
 *
 * @param domainId { number } The ID of the Domain we are accessing Records for.
 * @param data { object } Options for type, name, etc.
 */
export declare const createDomainRecord: (domainId: number, data: Partial<DomainRecord>) => Promise<DomainRecord>;
/**
 * Updates a single Record on this Domain.
 *
 * @param domainId { number } The ID of the Domain we are accessing Records for.
 * @param recordId { number } The ID of the Record you are accessing.
 * @param data { object } Options for type, name, etc.
 */
export declare const updateDomainRecord: (domainId: number, recordId: number, data: Partial<DomainRecord>) => Promise<DomainRecord>;
/**
 * Deletes a Record on this Domain..
 *
 * @param domainId { number } The ID of the Domain whose Record you are deleting.
 * @param recordId { number } The ID of the Record you are deleting.
 */
export declare const deleteDomainRecord: (domainId: number, recordId: number) => Promise<{}>;
//# sourceMappingURL=records.d.ts.map