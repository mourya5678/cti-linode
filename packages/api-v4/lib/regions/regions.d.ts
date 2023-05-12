import { ResourcePage as Page } from '../types';
import { Region } from './types';
/**
 * getRegions
 *
 * Return a list of available Regions (datacenters).
 * The response will be paginated, but the number of
 * available regions is small enough that multiple
 * pages are unlikely to be necessary.
 *
 * Filters are not included, as none of the fields
 * in a Region response object are filterable.
 *
 */
export declare const getRegions: (params?: any) => Promise<Page<Region>>;
/**
 * getRegion
 *
 * Return detailed information about a particular region.
 *
 * @param regionID { string } The region to be retrieved.
 *
 */
export declare const getRegion: (regionID: string) => Promise<Region>;
export { Region };
//# sourceMappingURL=regions.d.ts.map