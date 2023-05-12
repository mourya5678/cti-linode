export type EntityTransferStatus = 'pending' | 'accepted' | 'cancelled' | 'completed' | 'failed' | 'stale';
export interface TransferEntities {
    linodes: number[];
}
export interface EntityTransfer {
    token: string;
    status: EntityTransferStatus;
    created: string;
    updated: string;
    is_sender: boolean;
    expiry: string;
    entities: TransferEntities;
}
export interface CreateTransferPayload {
    entities: TransferEntities;
}
//# sourceMappingURL=types.d.ts.map