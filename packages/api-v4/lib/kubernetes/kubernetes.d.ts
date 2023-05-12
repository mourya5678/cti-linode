import { ResourcePage as Page } from '../types';
import { CreateKubeClusterPayload, KubeConfigResponse, KubernetesCluster, KubernetesEndpointResponse, KubernetesDashboardResponse, KubernetesVersion } from './types';
/**
 * getKubernetesClusters
 *
 * Gets a list of a user's Kubernetes clusters
 */
export declare const getKubernetesClusters: (params?: any, filters?: any) => Promise<Page<KubernetesCluster>>;
/**
 * getKubernetesCluster
 *
 * Return details about a single Kubernetes cluster
 */
export declare const getKubernetesCluster: (clusterID: number) => Promise<KubernetesCluster>;
/**
 * createKubernetesClusters
 *
 * Create a new cluster.
 */
export declare const createKubernetesCluster: (data: CreateKubeClusterPayload) => Promise<KubernetesCluster>;
/**
 * updateKubernetesCluster
 *
 * Update an existing cluster.
 */
export declare const updateKubernetesCluster: (clusterID: number, data: Partial<KubernetesCluster>) => Promise<KubernetesCluster>;
/**
 * deleteKubernetesCluster
 *
 * Delete the specified Cluster.
 */
export declare const deleteKubernetesCluster: (clusterID: number) => Promise<{}>;
/**
 * getKubeConfig
 *
 * Returns a base64 encoded string of a cluster's kubeconfig.yaml
 *
 * @param clusterId
 */
export declare const getKubeConfig: (clusterId: number) => Promise<KubeConfigResponse>;
/**
 * resetKubeConfig
 *
 * Regenerates the cluster's kubeconfig.yaml
 *
 * @param clusterId
 */
export declare const resetKubeConfig: (clusterId: number) => Promise<{}>;
/** getKubernetesVersions
 *
 * Returns a paginated list of available Kubernetes versions.
 *
 */
export declare const getKubernetesVersions: (params?: any, filters?: any) => Promise<Page<KubernetesVersion>>;
/** getKubernetesVersion
 *
 * Returns a single Kubernetes version by ID.
 *
 */
export declare const getKubernetesVersion: (versionID: string) => Promise<KubernetesVersion>;
/** getKubernetesClusterEndpoint
 *
 * Returns the endpoint URL for a single Kubernetes cluster by ID.
 *
 */
export declare const getKubernetesClusterEndpoints: (clusterID: number, params?: any, filters?: any) => Promise<Page<KubernetesEndpointResponse>>;
/** getKubernetesClusterDashboard
 * Returns the URL for a single Kubernetes Dashboard for a single Kubernetes Cluster by ID.
 *
 */
export declare const getKubernetesClusterDashboard: (clusterID: number) => Promise<KubernetesDashboardResponse>;
/** recycleClusterNodes
 *
 * Recycle all nodes in the target cluster (across all node pools)
 *
 */
export declare const recycleClusterNodes: (clusterID: number) => Promise<{}>;
//# sourceMappingURL=kubernetes.d.ts.map