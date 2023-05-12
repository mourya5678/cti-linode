import { ResourcePage } from '../types';
import { Grants, User } from './types';
/**
 * getUsers
 *
 * Returns a paginated list of users on this account.
 *
 */
export declare const getUsers: (params?: any, filters?: any) => Promise<ResourcePage<User>>;
/**
 * getUser
 *
 * Returns details about a single user.
 *
 * @param username { string } name of the user to be viewed.
 *
 */
export declare const getUser: (username: string) => Promise<User>;
/**
 * createUser
 *
 * Add a new user to your account.
 *
 * @param data { object }
 *
 */
export declare const createUser: (data: Partial<User>) => Promise<User>;
/**
 * updateUser
 *
 * Update a user's information.
 *
 * @param username { string } username of the user to be updated.
 * @param data { object } The fields of the user object to be updated.
 *
 */
export declare const updateUser: (username: string, data: Partial<User>) => Promise<User>;
/**
 * deleteUser
 *
 * Remove a single user from your account.
 *
 * @param username { string } username of the user to be deleted.
 *
 */
export declare const deleteUser: (username: string) => Promise<{}>;
/**
 * getGrants
 *
 * Returns the full grants structure for this User. This includes all entities on
 * the Account alongside what level of access this User has to each of them. Individual
 * users may view their own grants at the /profile/grants endpoint,
 * but will not see entities that they have no access to.
 *
 * @param username { number } the username to look up.
 *
 */
export declare const getGrants: (username: string) => Promise<Grants>;
/**
 * updateGrants
 *
 * Update the grants a User has. This can be used to give a User access
 * to new entities or actions, or take access away. You do not need to include
 * the grant for every entity on the Account in this request;
 * any that are not included will remain unchanged.
 *
 * @param username { number } ID of the client to be viewed.
 * @param data { object } the Grants object to update.
 *
 */
export declare const updateGrants: (username: string, data: Partial<Grants>) => Promise<Grants>;
//# sourceMappingURL=users.d.ts.map