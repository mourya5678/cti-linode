import { ResourcePage as Page } from '../types';
import { Disk, LinodeDiskCreationData } from './types';
/**
 * getLinodeDisks
 *
 * Returns a paginated list of disks associated with the specified Linode.
 *
 * @param linodeId { number } The id of the Linode to list disks for.
 */
export declare const getLinodeDisks: (linodeId: number, params?: any, filter?: any) => Promise<Page<Disk>>;
/**
 * createLinodeDisk
 *
 * Lists Configuration profiles associated with the specified Linode.
 *
 * @param linodeId { number } The id of the Linode to list configs for.
 */
export declare const createLinodeDisk: (linodeId: number, data: LinodeDiskCreationData) => Promise<Disk>;
/**
 * getLinodeDisk
 *
 * Retrieve detailed information about a single Disk.
 *
 * @param linodeId { number } The id of the Linode containing the disk to be viewed.
 * @param diskId { number } The id of the disk to be viewed.
 */
export declare const getLinodeDisk: (linodeId: number, diskId: number) => Promise<Disk>;
/**
 * updateLinodeDisk
 *
 * Update settings for a disk. Fields not specified will be left unchanged.
 *
 * @param linodeId { number } The id of the Linode containing the disk to be updated.
 * @param diskId { number } The id of the disk to be updated.
 */
export declare const updateLinodeDisk: (linodeId: number, diskId: number, data: Pick<LinodeDiskCreationData, 'label'>) => Promise<Disk>;
/**
 * resizeLinodeDisk
 *
 * Resizes a Disk you have permission to read_write.
 * The Linode this Disk is attached to must be shut down for resizing to take effect.
 * If you are resizing the Disk to a smaller size, it cannot be made smaller than
 * what is required by the total size of the files current on the Disk.
 * The Disk must not be in use. If the Disk is in use, the request will
 * succeed but the resize will ultimately fail.
 *
 * @param linodeId { number } The id of the Linode containing the disk to be resized.
 * @param diskId { number } The id of the disk to be resized.
 * @param size { number } The intended size of the disk (in MB).
 */
export declare const resizeLinodeDisk: (linodeId: number, diskId: number, size: number) => Promise<Disk>;
/**
 * cloneLinodeDisk
 *
 * Clones (duplicates) a Disk on an individual Linode.
 * @param linodeId { number } The id of the Linode containing the disk to be resized.
 * @param diskId { number } The id of the disk to be resized.
 */
export declare const cloneLinodeDisk: (linodeId: number, diskId: number) => Promise<Disk>;
/**
 * deleteLinodeDisk
 *
 * Deletes a Disk you have permission to read_write.
 *
 * @param linodeId { number } The id of the Linode containing the disk to be deleted.
 * @param diskId { number } The id of the disk to be deleted.
 */
export declare const deleteLinodeDisk: (linodeId: number, diskId: number) => Promise<{}>;
/**
 * changeLinodeDiskPassword
 *
 * Resets the password of a Disk you have permission to read_write.
 *
 * @param linodeId { number } The id of the Linode containing the target disk.
 * @param diskId { number } The id of the target disk.
 * @param password { string } The new disk password.
 */
export declare const changeLinodeDiskPassword: (linodeId: number, diskId: number, password: string) => Promise<Disk>;
//# sourceMappingURL=disks.d.ts.map