import { ResourcePage as Page } from '../types';
import { CreateNodeBalancerPayload, NodeBalancer, NodeBalancerStats } from './types';
/**
 * getNodeBalancers
 *
 * Returns a paginated list of NodeBalancers on your account.
 */
export declare const getNodeBalancers: (params?: any, filters?: any) => Promise<Page<NodeBalancer>>;
/**
 * getNodeBalancer
 *
 * Returns detailed information about a single NodeBalancer.
 *
 * @param nodeBalancerId { number } The ID of the NodeBalancer to retrieve.
 */
export declare const getNodeBalancer: (nodeBalancerId: number) => Promise<NodeBalancer>;
/**
 * updateNodeBalancer
 *
 * Update an existing NodeBalancer on your account.
 *
 * @param nodeBalancerId { number } The ID of the NodeBalancer to update.
 * @param data { object } The fields to update. Values not included in this
 * parameter will be left unchanged.
 */
export declare const updateNodeBalancer: (nodeBalancerId: number, data: Partial<NodeBalancer>) => Promise<NodeBalancer>;
/**
 * createNodeBalancer
 *
 * Add a NodeBalancer to your account.
 */
export declare const createNodeBalancer: (data: CreateNodeBalancerPayload) => Promise<NodeBalancer>;
/**
 * deleteNodeBalancer
 *
 * Remove a NodeBalancer from your account.
 *
 * @param nodeBalancerId { number } The ID of the NodeBalancer to delete.
 */
export declare const deleteNodeBalancer: (nodeBalancerId: number) => Promise<{}>;
/**
 * getNodeBalancerStats
 *
 * Returns detailed statistics about the requested NodeBalancer.
 *
 * @param nodeBalancerId { number } The ID of the NodeBalancer to view stats for.
 */
export declare const getNodeBalancerStats: (nodeBalancerId: number) => Promise<NodeBalancerStats>;
//# sourceMappingURL=nodebalancers.d.ts.map