import { ResourcePage as Page } from '../types';
import { ObjectStorageBucket, ObjectStorageBucketAccessRequest, ObjectStorageBucketAccessResponse, ObjectStorageBucketRequestPayload, ObjectStorageBucketSSLRequest, ObjectStorageBucketSSLResponse, ObjectStorageDeleteBucketRequestPayload, ObjectStorageObjectListParams, ObjectStorageObjectListResponse } from './types';
/**
 * getBucket
 *
 * Get one Object Storage Bucket.
 */
export declare const getBucket: (clusterId: string, bucketName: string) => Promise<ObjectStorageBucket>;
/**
 * getBuckets
 *
 * Gets a list of a user's Object Storage Buckets.
 */
export declare const getBuckets: (params?: any, filters?: any) => Promise<Page<ObjectStorageBucket>>;
/**
 * getBucketsInCluster
 *
 * Gets a list of a user's Object Storage Buckets in the specified cluster.
 */
export declare const getBucketsInCluster: (clusterId: string, params?: any, filters?: any) => Promise<Page<ObjectStorageBucket>>;
/**
 * createBucket
 *
 * Creates a new Bucket on your account.
 *
 * @param data { object } The label and clusterId of the new Bucket.
 *
 */
export declare const createBucket: (data: ObjectStorageBucketRequestPayload) => Promise<ObjectStorageBucket>;
/**
 * deleteBucket
 *
 * Removes a Bucket from your account.
 *
 * NOTE: Attempting to delete a non-empty bucket will result in an error.
 */
export declare const deleteBucket: ({ cluster, label, }: ObjectStorageDeleteBucketRequestPayload) => Promise<ObjectStorageBucket>;
/**
 * Returns a list of Objects in a given Bucket.
 */
export declare const getObjectList: (clusterId: string, bucketName: string, params?: ObjectStorageObjectListParams) => Promise<ObjectStorageObjectListResponse>;
/**
 * uploadSSLCert
 */
export declare const uploadSSLCert: (clusterId: string, bucketName: string, data: ObjectStorageBucketSSLRequest) => Promise<ObjectStorageBucketSSLResponse>;
/**
 * getSSLCert
 *
 * Returns { ssl: true } if there is an SSL certificate available for
 * the specified bucket, { ssl: false } otherwise.
 */
export declare const getSSLCert: (clusterId: string, bucketName: string) => Promise<ObjectStorageBucketSSLResponse>;
/**
 * deleteSSLCert
 *
 * Removes any SSL cert associated with the specified bucket. Certs are
 * removed automatically when a bucket is deleted; this endpoint is only
 * for removing certs without altering the bucket.
 */
export declare const deleteSSLCert: (clusterId: string, bucketName: string) => Promise<ObjectStorageBucketSSLResponse>;
/**
 * getBucketAccess
 *
 * Returns access information (ACL, CORS) for a given Bucket.
 */
export declare const getBucketAccess: (clusterId: string, bucketName: string) => Promise<ObjectStorageBucketAccessResponse>;
/**
 * updateBucketAccess
 *
 * Updates access information (ACL, CORS) for a given Bucket.
 */
export declare const updateBucketAccess: (clusterId: string, bucketName: string, data: ObjectStorageBucketAccessRequest) => Promise<{}>;
//# sourceMappingURL=buckets.d.ts.map