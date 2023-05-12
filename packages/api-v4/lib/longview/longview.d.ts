import { ResourcePage } from '../types';
import { ActiveLongviewPlan, LongviewClient, LongviewSubscription, LongviewSubscriptionPayload } from './types';
export declare const createLongviewClient: (label?: string) => Promise<LongviewClient>;
export declare const getLongviewClients: (params?: any, filter?: any) => Promise<ResourcePage<LongviewClient>>;
export declare const deleteLongviewClient: (id: number) => Promise<{}>;
export declare const updateLongviewClient: (id: number, label: string) => Promise<LongviewClient>;
export declare const getLongviewSubscriptions: () => Promise<ResourcePage<LongviewSubscription>>;
export declare const getActiveLongviewPlan: () => Promise<ActiveLongviewPlan>;
/**
 * updateActiveLongviewPlan
 *
 * Change this account's Longview subscription. To move from a
 * paid Longview Pro plan back to the free plan, submit an empty
 * object.
 */
export declare const updateActiveLongviewPlan: (plan: LongviewSubscriptionPayload) => Promise<ActiveLongviewPlan>;
//# sourceMappingURL=longview.d.ts.map