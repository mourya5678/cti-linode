import { ResourcePage } from '../types';
import { ClientToken, ExecutePayload, Payment, PaymentMethod, PaymentResponse, Paypal, PaypalResponse, SaveCreditCardData, MakePaymentData, PaymentMethodPayload } from './types';
/**
 * getPayments
 *
 * Retrieve a paginated list of the most recent payments made
 * on your account.
 *
 */
export declare const getPayments: (params?: any, filter?: any) => Promise<ResourcePage<Payment>>;
/**
 * makePayment
 *
 * Make a payment using the currently active credit card on your
 * account, a nonce, or by another payment method on your account
 * (by providing its id).
 *
 * @param data { object }
 * @param data.usd { string } the dollar amount of the payment
 * @param data.cvv { string } the 3-digit code on the back of the
 * @param data.nonce { string } the payment nonce to make a one time payment
 * @param data.payment_method_id { number } the payment nonce to make a one time payment
 *
 */
export declare const makePayment: (data: MakePaymentData) => Promise<PaymentResponse>;
interface StagePaypalData {
    checkout_token: string;
    payment_id: string;
}
/**
 * stagePaypalPayment
 *
 * Begins the process of making a payment through Paypal.
 *
 * @param data { object }
 * @param data.cancel_url The URL to have PayPal redirect to when Payment is canceled.
 * @param data.redirect_url The URL to have PayPal redirect to when Payment is approved.
 * @param data.usd { string } The dollar amount of the payment
 *
 * @returns a payment ID, used for submitting the payment to Paypal.
 *
 */
export declare const stagePaypalPayment: (data: Paypal) => Promise<StagePaypalData>;
/**
 * executePaypalPayment
 *
 * Executes a payment through Paypal that has been started with the
 * stagePaypalPayment method above. Paypal will capture the designated
 * funds and credit your Linode account.
 *
 * @param data { object }
 * @param data.payment_id The ID returned by stagePaypalPayment
 * @param data.payer_id The PayerID returned by PayPal during the transaction authorization process.
 *
 */
export declare const executePaypalPayment: (data: ExecutePayload) => Promise<PaypalResponse>;
/**
 * saveCreditCard
 *
 * Add or update credit card information to your account. Only one
 * card is allowed per account, so this method will overwrite any
 * existing information.
 * @deprecated Use POST /account/payment-methods
 */
export declare const saveCreditCard: (data: SaveCreditCardData) => Promise<{}>;
/**
 * getPaymentMethods
 *
 * Gets a paginatated list of all the payment methods avalible
 * on a user's account
 *
 */
export declare const getPaymentMethods: (params?: any) => Promise<ResourcePage<PaymentMethod>>;
/**
 * getPaymentMethod
 *
 * Gets information about a specific payment method on
 * your account.
 *
 * @param id {number} the id of the payment method
 *
 */
export declare const getPaymentMethod: (id: number) => Promise<PaymentMethod>;
/**
 * getClientToken
 *
 * Gets a unique token that is used to interact with the
 * Braintree front-end SDK
 *
 */
export declare const getClientToken: () => Promise<ClientToken>;
/**
 * addPaymentMethod
 *
 * Adds a new payment method to a user's account via a nonce.
 *
 * @param data { object }
 * @param data.type { string } 'credit_card' or 'payment_method_nonce'
 * @param data.is_default { boolean } whether or not this payment method should be considered the default
 * @param data.data { object } this will be data containing a nonce or credit card info
 * @param data.data.nonce { string } the nonce for the payment method to be added
 * @param data.data.card_number { string } a credit card number
 * @param data.data.expiry_year { number } credit card's expiry year
 * @param data.data.expiry_month { number } credit card's expiry month
 * @param data.data.cvv { string } credit card's cvv
 *
 */
export declare const addPaymentMethod: (data: PaymentMethodPayload) => Promise<{}>;
/**
 * makeDefaultPaymentMethod
 *
 * Action endpoint to change your default payment method
 *
 * @param id {number} id of the payment method
 */
export declare const makeDefaultPaymentMethod: (id: number) => Promise<{}>;
/**
 * deletePaymentMethod
 *
 * Delete the specifed payment method.
 *
 * @param id {number} The id of the payment method to delete.
 */
export declare const deletePaymentMethod: (id: number) => Promise<{}>;
export {};
//# sourceMappingURL=payments.d.ts.map