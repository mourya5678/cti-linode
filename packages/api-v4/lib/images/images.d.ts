import { ResourcePage as Page } from '../types';
import { Image, ImageUploadPayload, UploadImageResponse } from './types';
/**
 * Get information about a single Image.
 *
 * @param imageId { string } ID of the Image to look up.
 */
export declare const getImage: (imageId: string) => Promise<Image>;
/**
 * Returns a paginated list of Images.
 *
 */
export declare const getImages: (params?: any, filters?: any) => Promise<Page<Image>>;
/**
 * Create a private gold-master Image from a Linode Disk.
 *
 * @param diskId { number } The ID of the Linode Disk that this Image will be created from.
 * @param label { string } A short description of the Image. Labels cannot contain special characters.
 * @param description { string } A detailed description of this Image.
 */
export declare const createImage: (diskId: number, label?: string, description?: string) => Promise<Image>;
/**
 * Updates a private Image that you have permission to read_write.
 *
 * @param imageId { string } ID of the Image to look up.
 * @param label { string } A short description of the Image. Labels cannot contain special characters.
 * @param description { string } A detailed description of this Image.
 */
export declare const updateImage: (imageId: string, label?: string, description?: string) => Promise<Image>;
/**
 * Delete a private Image you have permission to read_write.
 *
 * @param imageId { string } the ID of the image to delete
 */
export declare const deleteImage: (imageId: string) => Promise<{}>;
/**
 * uploadImage
 *
 * Create a pending Image
 *
 * The returned object includes an upload_to field to which
 * you can upload a pre-made Image that will be processed and
 * prepared for use.
 */
export declare const uploadImage: (data: ImageUploadPayload) => Promise<UploadImageResponse>;
//# sourceMappingURL=images.d.ts.map