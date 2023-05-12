import { NetworkUtilization, NetworkTransfer } from '../account/types';
import { ResourcePage as Page } from '../types';
import { Kernel, LinodeType as Type, Stats } from './types';
/**
 * getLinodeStats
 *
 * Returns CPU, IO, IPv4, and IPv6 statistics for your Linode for the past 24 hours.
 *
 * @param linodeId { number } The id of the Linode to retrieve stats data for.
 */
export declare const getLinodeStats: (linodeId: number) => Promise<Stats>;
/**
 * getLinodeStats
 *
 * Returns CPU, IO, IPv4, and IPv6 statistics for a specific month.
 * The year/month values must be either a date in the past, or the current month.
 * If the current month, statistics will be retrieved for the past 30 days.
 *
 * @param linodeId { number } The id of the Linode to retrieve stats data for.
 * @param year { string }
 * @param month { string }
 */
export declare const getLinodeStatsByDate: (linodeId: number, year: string, month: string) => Promise<Stats>;
/**
 * getLinodeTransfer
 *
 * Returns current network transfer information for your Linode.
 *
 * @param linodeId { number } The id of the Linode to retrieve network transfer information for.
 */
export declare const getLinodeTransfer: (linodeId: number) => Promise<NetworkUtilization>;
/**
 * getLinodeTransferByDate
 *
 * Returns network transfer information for your Linode by date
 *
 * @param linodeId { number } The id of the Linode to retrieve network transfer information for.
 * @param year { string }
 * @param month { string }
 */
export declare const getLinodeTransferByDate: (linodeId: number, year: string, month: string) => Promise<NetworkTransfer>;
/**
 * getLinodeKernels
 *
 * Returns a paginated list of available kernels.
 * This endpoint does not require authentication.
 *
 */
export declare const getLinodeKernels: (params?: any, filter?: any) => Promise<Page<Kernel>>;
/**
 * getLinodeKernel
 *
 * Returns detailed information about a single Kernel.
 * This endpoint does not require authentication.
 *
 * @param kernelId { number } The id of the kernel to retrieve.
 */
export declare const getLinodeKernel: (kernelId: string) => Promise<Page<Kernel>>;
/**
 * getLinodeTypes
 *
 * Return a paginated list of available Linode types.
 * This endpoint does not require authentication.
 */
export declare const getLinodeTypes: (params?: any) => Promise<Page<Type>>;
/**
 * getType
 *
 * View details for a single Linode type.
 * This endpoint does not require authentication.
 *
 * @param typeId { number } The id of the Linode type to retrieve.
 */
export declare const getType: (typeId: string) => Promise<Type>;
/**
 * getDeprecatedLinodeTypes
 *
 * Returns a list of deprecated Types that are no longer
 * supported. This endpoint does not require authentication.
 *
 */
export declare const getDeprecatedLinodeTypes: () => Promise<Page<Type>>;
//# sourceMappingURL=info.d.ts.map