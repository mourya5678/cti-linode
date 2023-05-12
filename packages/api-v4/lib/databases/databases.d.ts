import { ResourcePage as Page } from '../types';
import { CreateDatabasePayload, Database, DatabaseInstance, DatabaseBackup, DatabaseCredentials, DatabaseType, DatabaseEngine, Engine, SSLFields, UpdateDatabasePayload, UpdateDatabaseResponse } from './types';
/**
 * getDatabases
 *
 * Return a paginated list of databases on this account.
 *
 */
export declare const getDatabases: (params?: any, filters?: any) => Promise<Page<DatabaseInstance>>;
/**
 * getDatabaseTypes
 *
 * Return a paginated list of available plans/types for databases
 *
 */
export declare const getDatabaseTypes: (params?: any, filters?: any) => Promise<Page<DatabaseType>>;
/**
 * getDatabaseType
 *
 * Return information for a single database type
 *
 */
export declare const getDatabaseType: (typeSlug: string) => Promise<DatabaseType>;
/**
 * getVersions
 *
 * Return information on available versions per engine that we offer
 *
 */
export declare const getDatabaseEngines: (params?: any, filters?: any) => Promise<Page<DatabaseEngine>>;
/**
 * getVersion
 *
 * Return information on a specified version
 *
 */
export declare const getDatabaseEngine: (engineSlug: string) => Promise<DatabaseEngine>;
/**
 * createDatabase
 *
 * Create a new database in the specified region.
 *
 */
export declare const createDatabase: (engine: Engine | undefined, data: CreateDatabasePayload) => Promise<Database>;
/**
 * getEngineDatabases
 *
 * Return a paginated list of active engine-specific (e.g. MySQL) databases belonging to user
 *
 */
export declare const getEngineDatabases: (engine: Engine, params?: any, filters?: any) => Promise<Page<Database>>;
/**
 * getEngineDatabase
 *
 * Return details for a single specified active database
 *
 */
export declare const getEngineDatabase: (engine: Engine, databaseID: number) => Promise<Database>;
/**
 * updateDatabase
 *
 * Update the label or allowed IPs of an
 * existing database
 *
 */
export declare const updateDatabase: (engine: Engine, databaseID: number, data: UpdateDatabasePayload) => Promise<UpdateDatabaseResponse>;
/**
 * deleteDatabase
 *
 * Delete a single database
 */
export declare const deleteDatabase: (engine: Engine, databaseID: number) => Promise<{}>;
/**
 * getDatabaseBackups
 *
 * Return backups information for a database
 *
 */
export declare const getDatabaseBackups: (engine: Engine, databaseID: number, params?: any, filters?: any) => Promise<Page<DatabaseBackup>>;
/**
 * getDatabaseBackups
 *
 * Return details for a specific database backup
 *
 */
export declare const getDatabaseBackup: (engine: Engine, databaseID: number, backupID: number) => Promise<DatabaseBackup>;
/**
 * restoreWithBackup
 *
 * Fully restore a backup to the cluster
 */
export declare const restoreWithBackup: (engine: Engine, databaseID: number, backupID: number) => Promise<{}>;
/**
 * getDatabaseCredentials
 *
 * Return credentials (root username and password) for a database
 *
 */
export declare const getDatabaseCredentials: (engine: Engine, databaseID: number) => Promise<DatabaseCredentials>;
/**
 * resetDatabaseCredentials
 *
 * Resets the root credentials for a database
 */
export declare const resetDatabaseCredentials: (engine: Engine, databaseID: number) => Promise<{}>;
/**
 * getSSLFields
 *
 * Retrieve the certificate and public key for a database instance
 */
export declare const getSSLFields: (engine: Engine, databaseID: number) => Promise<SSLFields>;
//# sourceMappingURL=databases.d.ts.map