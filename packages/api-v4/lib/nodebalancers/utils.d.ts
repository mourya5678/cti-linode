import { NodeBalancerConfigNodeWithPort } from './types';
export declare const combineConfigNodeAddressAndPort: (data: any) => any;
export declare const combineNodeBalancerConfigNodeAddressAndPort: (data: any) => any;
export declare const mergeAddressAndPort: (node: NodeBalancerConfigNodeWithPort) => {
    address: string;
    port?: number | undefined;
    config_id: number;
    id: number;
    label: string;
    mode: import("./types").NodeBalancerConfigNodeMode;
    nodebalancer_id: number;
    status: "unknown" | "UP" | "DOWN";
    weight: number;
};
//# sourceMappingURL=utils.d.ts.map