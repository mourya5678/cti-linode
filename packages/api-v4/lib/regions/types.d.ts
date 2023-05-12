export type Capabilities = 'Linodes' | 'NodeBalancers' | 'Block Storage' | 'Object Storage' | 'Kubernetes' | 'GPU Linodes' | 'Cloud Firewall' | 'Vlans' | 'Bare Metal';
export interface DNSResolvers {
    ipv4: string;
    ipv6: string;
}
export type RegionStatus = 'ok' | 'outage';
export interface Region {
    id: string;
    label: string;
    country: string;
    capabilities: Capabilities[];
    status: RegionStatus;
    resolvers: DNSResolvers;
}
//# sourceMappingURL=types.d.ts.map