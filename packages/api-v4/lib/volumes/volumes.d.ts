import { ResourcePage as Page } from '../types';
import { AttachVolumePayload, CloneVolumePayload, ResizeVolumePayload, Volume, VolumeRequestPayload } from './types';
/**
 * getVolume
 *
 * Returns detailed information about a single Volume.
 *
 * @param volumeId { number } The ID of the volume to be retrieved.
 */
export declare const getVolume: (volumeId: number) => Promise<Volume>;
/**
 * getVolumes
 *
 * Returns a paginated list of Volumes on your account.
 *
 */
export declare const getVolumes: (params?: any, filters?: any) => Promise<Page<Volume>>;
/**
 * attachVolume
 *
 * Attaches a Volume on your Account to an existing Linode on your Account.
 * The Volume and Linode must both be in the same region.
 *
 * @param volumeId { number } The volume to be attached.
 * @param payload { Object }
 * @param payload.linode_id { number } The ID of the linode to attach the Volume to.
 * @param payload.config_id { number } The configuration profile to include this volume in.
 *   If this value is not provided, the most recently booted Config profile will be chosen.
 */
export declare const attachVolume: (volumeId: number, payload: AttachVolumePayload) => Promise<Volume>;
/**
 * detachVolume
 *
 * Detaches a Volume on your account from a Linode on your account.
 *
 * @param volumeId { number } The Volume to be detached.
 *
 */
export declare const detachVolume: (volumeId: number) => Promise<{}>;
/**
 * deleteVolume
 *
 * Deletes a Volume on your account. This can only be done if the Volume
 * is not currently attached to a Linode.
 *
 * @param volumeId { number } The Volume to be detached.
 *
 */
export declare const deleteVolume: (volumeId: number) => Promise<{}>;
/**
 * cloneVolume
 *
 * Creates a Volume on your Account. In order for this request to complete successfully,
 * your User must have the add_volumes grant.
 * The new Volume will have the same size and data as the source Volume
 *
 * @param volumeId { number } The Volume to be detached.
 * @param data { { label: string } } A label to identify the new volume.
 *
 */
export declare const cloneVolume: (volumeId: number, data: CloneVolumePayload) => Promise<Volume>;
/**
 * resizeVolume
 *
 * Resize an existing Volume on your Account. Volumes can only be resized up.
 *
 * @param volumeId { number } The Volume to be resized.
 * @param data { { size: number } } The size of the Volume (in GB).
 *
 */
export declare const resizeVolume: (volumeId: number, data: ResizeVolumePayload) => Promise<Volume>;
export interface UpdateVolumeRequest {
    label: string;
    tags?: string[];
}
/**
 * updateVolume
 *
 * Detaches a Volume on your account from a Linode on your account.
 *
 * @param volumeId { number } The Volume to be updated.
 * @param data { { label: string; tags: string[] } } The updated label for this Volume.
 *
 */
export declare const updateVolume: (volumeId: number, data: UpdateVolumeRequest) => Promise<Volume>;
/**
 * createVolume
 *
 * Creates a new Volume on your account.
 *
 * @param data { object } The size, label, and region of the new Volume. Can
 * also include a linode_id instead of a region to automatically attach the new Volume
 * to the target Linode.
 *
 */
export declare const createVolume: (data: VolumeRequestPayload) => Promise<Volume>;
//# sourceMappingURL=volumes.d.ts.map