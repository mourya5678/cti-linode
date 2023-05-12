import { ResourcePage as Page } from '../types';
import { CreateNodeBalancerConfigNode, NodeBalancerConfigNode, UpdateNodeBalancerConfigNode } from './types';
/**
 * getNodeBalancerConfigNodes
 *
 * Returns a paginated list of nodes for the specified NodeBalancer configuration profile.
 * These are the backends that will be sent traffic for this port.
 *
 * @param nodeBalancerId { number } The ID of the NodeBalancer the config belongs to.
 * @param configId { number } The configuration profile to retrieve nodes for.
 */
export declare const getNodeBalancerConfigNodes: (nodeBalancerId: number, configId: number) => Promise<Page<NodeBalancerConfigNode>>;
/**
 * getNodeBalancerConfigNode
 *
 * Returns details about a specific node for the given NodeBalancer configuration profile.
 *
 * @param nodeBalancerId { number } The ID of the NodeBalancer the config belongs to.
 * @param configId { number } The configuration profile to retrieve nodes for.
 * @param nodeId { number } The Node to be retrieved.
 */
export declare const getNodeBalancerConfigNode: (nodeBalancerId: number, configId: number, nodeId: number) => Promise<Page<NodeBalancerConfigNode>>;
/**
 * createNodeBalancerConfigNode
 *
 * Creates a NodeBalancer Node, a backend that can accept traffic for
 * this NodeBalancer Config. Nodes are routed requests on the configured port based on their status.
 *
 * Note: The Linode API does not accept separate port and IP address parameters. This method will join
 * the IP and port after validation:
 *
 * data: {
 *  address: '0.0.0.0',
 *  port: 80
 * }
 *
 * will become:
 *
 * data: {
 *  address: '0.0.0.0:80'
 * }
 *
 * @param nodeBalancerId { number } The ID of the NodeBalancer the config belongs to.
 * @param configId { number } The configuration profile to add a node to.
 * @param data
 */
export declare const createNodeBalancerConfigNode: (nodeBalancerId: number, configId: number, data: CreateNodeBalancerConfigNode) => Promise<NodeBalancerConfigNode>;
/**
 * createNodeBalancerConfigNode
 *
 * Updates a backend node for the specified NodeBalancer configuration profile.
 *
 * Note: The Linode API does not accept separate port and IP address parameters. This method will join
 * the IP and port after validation:
 *
 * data: {
 *  address: '0.0.0.0',
 *  port: 80
 * }
 *
 * will become:
 *
 * data: {
 *  address: '0.0.0.0:80'
 * }
 *
 * @param nodeBalancerId { number } The ID of the NodeBalancer the config belongs to.
 * @param configId { number } The configuration profile to add a node to.
 * @param data
 */
export declare const updateNodeBalancerConfigNode: (nodeBalancerId: number, configId: number, nodeId: number, data: UpdateNodeBalancerConfigNode) => Promise<NodeBalancerConfigNode>;
/**
 * deleteNodeBalancerConfigNode
 *
 * Deletes a single backend Node form the specified NodeBalancer configuration profile.
 *
 * @param nodeBalancerId { number } The ID of the NodeBalancer the config belongs to.
 * @param configId { number } The configuration profile to delete a node from.
 * @param nodeId { number} The node to be deleted.
 */
export declare const deleteNodeBalancerConfigNode: (nodeBalancerId: number, configId: number, nodeId: number) => Promise<{}>;
//# sourceMappingURL=nodebalancer-config-nodes.d.ts.map