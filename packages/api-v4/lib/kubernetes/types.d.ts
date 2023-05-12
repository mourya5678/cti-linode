export interface KubernetesCluster {
    created: string;
    updated: string;
    region: string;
    status: string;
    label: string;
    k8s_version: string;
    id: number;
    tags: string[];
    control_plane: ControlPlaneOptions;
}
export interface KubeNodePoolResponse {
    count: number;
    id: number;
    nodes: PoolNodeResponse[];
    type: string;
    autoscaler: AutoscaleSettings;
}
export interface PoolNodeResponse {
    id: string;
    instance_id: number | null;
    status: string;
}
export interface CreateNodePoolData {
    type: string;
    count: number;
}
export interface UpdateNodePoolData {
    autoscaler: AutoscaleSettings;
    count: number;
}
export interface AutoscaleSettings {
    enabled: boolean;
    min: number;
    max: number;
}
export interface KubeConfigResponse {
    kubeconfig: string;
}
export interface KubernetesVersion {
    id: string;
}
export interface KubernetesEndpointResponse {
    endpoint: string;
}
export interface KubernetesDashboardResponse {
    url: string;
}
export interface ControlPlaneOptions {
    high_availability: boolean;
}
export interface CreateKubeClusterPayload {
    label?: string;
    region?: string;
    node_pools: CreateNodePoolData[];
    k8s_version?: string;
    control_plane?: ControlPlaneOptions;
}
//# sourceMappingURL=types.d.ts.map