import { ResourcePage as Page } from '../types';
import { ObjectStorageKey, ObjectStorageKeyRequest, UpdateObjectStorageKeyRequest } from './types';
/**
 * getObjectStorageKeys
 *
 * Gets a list of a user's Object Storage Keys
 */
export declare const getObjectStorageKeys: (params?: any, filters?: any) => Promise<Page<ObjectStorageKey>>;
/**
 * createObjectStorageKeys
 *
 * Creates an Object Storage key
 */
export declare const createObjectStorageKeys: (data: ObjectStorageKeyRequest) => Promise<ObjectStorageKey>;
/**
 * updateObjectStorageKeys
 *
 * Updates an Object Storage Key
 */
export declare const updateObjectStorageKey: (id: number, data: UpdateObjectStorageKeyRequest) => Promise<ObjectStorageKey>;
/**
 * revokeObjectStorageKey
 *
 * Revokes an Object Storage key
 */
export declare const revokeObjectStorageKey: (id: number) => Promise<ObjectStorageKey>;
//# sourceMappingURL=objectStorageKeys.d.ts.map