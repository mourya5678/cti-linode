import { ResourcePage as Page } from '../types';
import { Config, LinodeConfigCreationData } from './types';
/**
 * getLinodeConfigs
 *
 * Lists Configuration profiles associated with the specified Linode.
 *
 * @param linodeId { number } The id of the Linode to list configs for.
 * @todo VolumeAttachmentDrawer, ConfigSelect, and LinodeConfigs all make use of this still, and probably shouldnt.
 */
export declare const getLinodeConfigs: (linodeId: number, params?: any, filters?: any) => Promise<Page<Config>>;
/**
 * getLinodeConfig
 *
 * Returns information about a single Linode configuration.
 *
 * @param linodeId { number } The id of a Linode the specified config is attached to.
 * @param configId { number } The id of the config to be returned
 */
export declare const getLinodeConfig: (linodeId: number, configId: number) => Promise<Config>;
/**
 * createLinodeConfig
 *
 * Adds a new Configuration profile to a Linode.
 *
 * @param linodeId { number } The id of a Linode to receive the new config.
 */
export declare const createLinodeConfig: (linodeId: number, data: LinodeConfigCreationData) => Promise<Config>;
/**
 * deleteLinodeConfig
 *
 * Delete a single configuration profile from a Linode.
 *
 * @param linodeId { number } The id of a Linode the specified config is attached to.
 * @param configId { number } The id of the config to be deleted
 */
export declare const deleteLinodeConfig: (linodeId: number, configId: number) => Promise<{}>;
/**
 * updateLinodeConfig
 *
 * Update a configuration profile.
 *
 * @param linodeId { number } The id of a Linode the specified config is attached to.
 * @param configId { number } The id of the config to be updated.
 */
export declare const updateLinodeConfig: (linodeId: number, configId: number, data: Partial<LinodeConfigCreationData>) => Promise<Config>;
//# sourceMappingURL=configs.d.ts.map