import { IPAddress } from '../networking/types';
import { IPAllocationRequest, LinodeIPsResponse } from './types';
/**
 * getLinodeIPs
 *
 * Return a list of IP addresses allocated to this Linode.
 *
 * @param linodeId { number } The id of the Linode whose addresses you would like to retrieve.
 */
export declare const getLinodeIPs: (id: number) => Promise<LinodeIPsResponse>;
/**
 * allocateIPAddress
 *
 * Allocates a public or private IPv4 address to a Linode
 *
 * @param linodeId { number } The id of the Linode to receive a new IP address.
 * @param data { object }
 * @param data.type { string } Must be "ipv4", as currently only IPv4 addresses can be allocated.
 * @param data.public { boolean } True for a public IP address, false for a private address.
 */
export declare const allocateIPAddress: (linodeID: number, data: IPAllocationRequest) => Promise<IPAddress>;
/**
 * removeIPAddress
 *
 * Deletes a Linode's public IP Address. This request will fail if this is the last IP
 * address allocated to the Linode. This request cannot be invoked on a private IP Address
 *
 * @param {linodeID: number, IPAddress: string} payload - the linode ID and IP Address for
 * which you'd like the delete request to be invoked
 */
export declare const removeIPAddress: (payload: {
    linodeID: number;
    IPAddress: string;
}) => Promise<{}>;
/**
 * removeIPv6Range
 *
 * Deletes a Linode's IPv6 range.
 *
 * @param {IPv6Range: string} payload - the IPv6 Range for which you'd like the delete request to be invoked
 */
export declare const removeIPv6Range: (payload: {
    IPv6Range: string;
}) => Promise<{}>;
//# sourceMappingURL=ips.d.ts.map