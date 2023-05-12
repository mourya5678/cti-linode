import { LinodeBackup, LinodeBackupsResponse } from './types';
/**
 * getLinodeBackups
 *
 * Returns information about this Linode's available backups.
 *
 * @param linodeId { number } The id of a Linode with backups enabled.
 */
export declare const getLinodeBackups: (id: number) => Promise<LinodeBackupsResponse>;
/**
 * enableBackups
 *
 * Enable backups service for a single Linode.
 *
 * @param linodeId { number } The id of the Linode to enable backup services for.
 */
export declare const enableBackups: (linodeId: number) => Promise<{}>;
/**
 * cancelBackups
 *
 * Cancel backups service for the specified Linode.
 *
 * @param linodeId { number } The id of a Linode with backups enabled.
 */
export declare const cancelBackups: (linodeId: number) => Promise<{}>;
/**
 * takeSnapshot
 *
 * Creates a snapshot Backup of a Linode. If you already have a snapshot
 * of this Linode, this is a destructive action. The previous snapshot will be deleted.
 *
 * @param linodeId { number } The id of the Linode to retrieve.
 * @param label { string } A label to identify the new snapshot.
 */
export declare const takeSnapshot: (linodeId: number, label: string) => Promise<LinodeBackup>;
/**
 * restoreBackup
 *
 * Restores a Linode's Backup to the specified Linode.
 *
 * @param linodeId { number } The id of the Linode that the backup belongs to.
 * @param backupId { number } The id of the backup to restore from.
 * @param targetLinodeId { number } The id of the Linode to restore the backup to.
 * @param overwrite: { boolean } If True, deletes all Disks and Configs on the
 * target Linode before restoring.
 */
export declare const restoreBackup: (linodeId: number, backupId: number, targetLinodeId: number, overwrite: boolean) => Promise<{}>;
//# sourceMappingURL=backups.d.ts.map