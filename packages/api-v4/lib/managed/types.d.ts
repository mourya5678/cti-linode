export interface ManagedServiceMonitor {
    id: number;
    label: string;
    created: string;
    updated: string;
    status: MonitorStatus;
    service_type: ServiceType;
    timeout: number;
    region: string | null;
    credentials: number[];
    address: string;
    body: string;
    notes: string;
    consultation_group: string;
}
export type MonitorStatus = 'pending' | 'disabled' | 'ok' | 'problem';
export type ServiceType = 'url' | 'tcp';
export interface ManagedLinodeSetting {
    id: number;
    label: string;
    group: string;
    ssh: ManagedSSHSetting;
}
export interface ManagedSSHSetting {
    access: boolean;
    user: string;
    ip: string;
    port: number;
}
export interface ManagedCredential {
    id: number;
    last_decrypted: string | null;
    label: string;
}
export interface ManagedContact {
    id: number;
    name: string;
    email: string;
    phone: ManagedContactPhone;
    group: string | null;
    updated: string;
}
export interface ManagedContactPhone {
    primary?: string | null;
    secondary?: string | null;
}
export interface ManagedSSHPubKey {
    ssh_key: string;
}
export interface ManagedServicePayload {
    label: string;
    service_type: ServiceType;
    address: string;
    timeout: number;
    notes?: string;
    body?: string;
    consultation_group?: string;
    credentials?: number[];
}
export interface CredentialPayload {
    label: string;
    password?: string;
    username?: string;
}
export interface UpdateCredentialPayload {
    label: string;
}
export interface UpdatePasswordPayload {
    password?: string;
    username?: string;
}
export interface ContactPayload {
    name: string;
    email: string;
    phone?: ManagedContactPhone;
    group?: string | null;
}
export interface ManagedIssue {
    id: number;
    services: number[];
    created: string;
    entity: IssueEntity;
}
export interface IssueEntity {
    id: number;
    label: string;
    type: 'ticket';
    url: string;
}
export interface DataSeries {
    x: number;
    y: number;
}
export interface ManagedStatsData {
    disk: DataSeries[];
    cpu: DataSeries[];
    net_in: DataSeries[];
    net_out: DataSeries[];
    swap: DataSeries[];
}
export interface ManagedStats {
    data: ManagedStatsData;
}
//# sourceMappingURL=types.d.ts.map