import { ResourcePage as Page } from '../types';
import { KubeNodePoolResponse, CreateNodePoolData, UpdateNodePoolData } from './types';
/**
 * getNodePools
 *
 * Gets a list of all node pools associated with the specified cluster
 */
export declare const getNodePools: (clusterID: number, params?: any, filters?: any) => Promise<Page<KubeNodePoolResponse>>;
/**
 * getNodePool
 *
 * Returns a single node pool
 */
export declare const getNodePool: (clusterID: number, nodePoolID: number) => Promise<KubeNodePoolResponse>;
/**
 * createNodePool
 *
 * Adds a node pool to the specified cluster.
 */
export declare const createNodePool: (clusterID: number, data: CreateNodePoolData) => Promise<KubeNodePoolResponse>;
/**
 * updateNodePool
 *
 * Change the type or count of a node pool
 */
export declare const updateNodePool: (clusterID: number, nodePoolID: number, data: Partial<UpdateNodePoolData>) => Promise<KubeNodePoolResponse>;
/**
 * deleteNodePool
 *
 * Delete a single node pool from the specified Cluster.
 */
export declare const deleteNodePool: (clusterID: number, nodePoolID: number) => Promise<{}>;
/**
 * recycleAllNodes
 *
 * Recycles all nodes from the specified Node Pool.
 */
export declare const recycleAllNodes: (clusterID: number, nodePoolID: number) => Promise<{}>;
/**
 * recycleNode
 *
 * Recycles a single node by id.
 */
export declare const recycleNode: (clusterID: number, nodeID: string) => Promise<{}>;
//# sourceMappingURL=nodePools.d.ts.map