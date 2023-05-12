import { Grants } from '../account';
import { ResourcePage } from '../types';
import { Profile, ProfileLogin, TrustedDevice, UserPreferences, SecurityQuestionsData, SecurityQuestionsPayload, SendPhoneVerificationCodePayload, VerifyVerificationCodePayload } from './types';
/**
 * getProfile
 *
 * Return the current (logged in) user's profile.
 *
 */
export declare const getProfile: () => Promise<Profile>;
/**
 * updateProfile
 *
 * Update the current user's profile. Fields included in the
 * data param will be updated by the API; omitted fields will remain
 * unchanged.
 *
 */
export declare const updateProfile: (data: any) => Promise<Profile>;
/**
 * listGrants
 *
 * This returns a GrantsResponse describing what the acting User has been granted access to.
 * For unrestricted users, this will return a 204 and no body because unrestricted users have
 * access to everything without grants. This will not return information about entities you do
 * not have access to. This endpoint is useful when writing third-party OAuth applications to
 * see what options you should present to the acting User.
 *
 * This endpoint is unauthenticated.
 */
export declare const listGrants: () => Promise<Grants>;
/**
 * getMyGrants
 *
 * This returns a GrantsResponse describing what the acting User has been granted access to. For
 * unrestricted users, this will return a 204 and no body because unrestricted users have access
 * to everything without grants. This will not return information about entities you do not have
 * access to. This endpoint is useful when writing third-party OAuth applications to see what
 * options you should present to the acting User.
 *
 */
export declare const getMyGrants: () => Promise<Grants>;
/**
 * getTrustedDevices
 *
 * Returns a paginated list of all trusted devices associated with the user's profile.
 */
export declare const getTrustedDevices: (params: any, filter: any) => Promise<ResourcePage<TrustedDevice>>;
/**
 * deleteTrustedDevice
 *
 * Deletes a trusted device from a user's profile
 */
export declare const deleteTrustedDevice: (id: number) => Promise<{}>;
/**
 * getUserPreferences
 *
 * Retrieves an arbitrary JSON blob for the purposes of implementing
 * conditional logic based on preferences the user chooses
 */
export declare const getUserPreferences: () => Promise<Record<string, any>>;
/**
 * getUserPreferences
 *
 * Stores an arbitrary JSON blob for the purposes of implementing
 * conditional logic based on preferences the user chooses
 */
export declare const updateUserPreferences: (payload: UserPreferences) => Promise<UserPreferences>;
export declare const getLogins: (params: any, filter: any) => Promise<ResourcePage<ProfileLogin>>;
/**
 * getSecurityQuestions
 *
 * Retrieves an array of security questions for the current user.
 */
export declare const getSecurityQuestions: () => Promise<SecurityQuestionsData>;
/**
 * updateSecurityQuestions
 *
 * Updates the current user's security questions.
 */
export declare const updateSecurityQuestions: (payload: SecurityQuestionsPayload) => Promise<SecurityQuestionsPayload>;
/**
 * smsOptOut
 *
 * Opts user out of SMS messaging
 */
export declare const smsOptOut: () => Promise<{}>;
/**
 * sendCodeToPhoneNumber
 *
 * Sends a one-time password via SMS to be used to verify a phone number.
 */
export declare const sendCodeToPhoneNumber: (data: SendPhoneVerificationCodePayload) => Promise<{}>;
/**
 * verifyPhoneNumberCode
 *
 * Verifies a one-time password sent using `sendCodeToPhoneNumber`.
 */
export declare const verifyPhoneNumberCode: (data: VerifyVerificationCodePayload) => Promise<{}>;
//# sourceMappingURL=profile.d.ts.map