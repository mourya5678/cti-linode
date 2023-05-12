import { ActivePromotion } from './types';
/**
 * addPromotion
 *
 * Add an expiring credit (promotion) to an existing account.
 * This is only possible if:
 * - The user is unrestricted
 * - The account is fewer than 90 days old
 * - No promotions are currently active on the account
 * - The code is a valid expiring credit (it has not expired, but will at some point)
 */
export declare const addPromotion: (code: string) => Promise<ActivePromotion>;
//# sourceMappingURL=promos.d.ts.map