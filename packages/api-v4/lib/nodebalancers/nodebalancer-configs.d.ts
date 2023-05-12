import { ResourcePage as Page } from '../types';
import { CreateNodeBalancerConfig, NodeBalancerConfig, UpdateNodeBalancerConfig } from './types';
/**
 * getNodeBalancerConfigs
 *
 * Returns a list of configuration profiles for the specified NodeBalancer.
 *
 * @param nodeBalancerId { number } The ID of the NodeBalancer to view configs for.
 */
export declare const getNodeBalancerConfigs: (nodeBalancerId: number) => Promise<Page<NodeBalancerConfig>>;
/**
 * getNodeBalancerConfig
 *
 * Returns a list of configuration profiles for the specified NodeBalancer.
 *
 * @param nodeBalancerId { number } The ID of the NodeBalancer associated with the config.
 */
export declare const getNodeBalancerConfig: (nodeBalancerId: number, configId: number) => Promise<Page<NodeBalancerConfig>>;
/**
 * createNodeBalancerConfig
 *
 * Creates a NodeBalancer Config, which allows the NodeBalancer to accept traffic on a new port.
 * You will need to add NodeBalancer Nodes to the new Config before it can actually serve requests.
 *
 * @param nodeBalancerId { number } The NodeBalancer to receive the new config.
 */
export declare const createNodeBalancerConfig: (nodeBalancerId: number, data: CreateNodeBalancerConfig) => Promise<NodeBalancerConfig>;
/**
 * updateNodeBalancerConfig
 *
 * Updates the configuration for a single port on a NodeBalancer.
 *
 * @param nodeBalancerId { number } The ID of the NodeBalancer associated with the config.
 * @param configId { number } The ID of the configuration profile to be updated
 */
export declare const updateNodeBalancerConfig: (nodeBalancerId: number, configId: number, data: UpdateNodeBalancerConfig) => Promise<NodeBalancerConfig>;
/**
 * deleteNodeBalancerConfig
 *
 * Delete a single NodeBalancer configuration profile.
 *
 * @param nodeBalancerId { number } The ID of the NodeBalancer associated with the config.
 * @param configId { number } The ID of the configuration profile to be deleted.
 */
export declare const deleteNodeBalancerConfig: (nodeBalancerId: number, configId: number) => Promise<{}>;
//# sourceMappingURL=nodebalancer-configs.d.ts.map