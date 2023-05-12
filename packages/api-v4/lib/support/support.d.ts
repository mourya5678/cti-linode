import { ResourcePage as Page } from '../types';
import { ReplyRequest, SupportReply, SupportTicket, TicketRequest } from './types';
/**
 * getTickets
 *
 * Base function for retrieving a page of support ticket objects.
 *
 * @param params { Object } any parameters to be sent with the request
 * @param filter { Object } JSON object to be sent as the X-Filter header
 *
 *
 */
export declare const getTickets: (params?: any, filter?: any) => Promise<Page<SupportTicket>>;
/**
 * getTicket
 *
 * Retrieve a single support ticket.
 *
 * @param ticketID { Number } the ID of the ticket to be retrieved
 * @param params { Object } any parameters to be sent with the request
 * @param filter { Object } JSON object to be sent as the X-Filter header
 *
 */
export declare const getTicket: (ticketID: number) => Promise<SupportTicket>;
/**
 * getTicketReplies
 *
 * Get all replies to a single ticket. Returns an
 * array of Reply objects.
 *
 * @param ticketID { Number } the ID of the ticket
 * @param params { Object } any parameters to be sent with the request
 * @param filter { Object } JSON object to be sent as the X-Filter header
 *
 *
 */
export declare const getTicketReplies: (ticketId: number, params?: any, filter?: any) => Promise<Page<SupportReply>>;
/**
 * createSupportTicket
 *
 * Add a new support ticket.
 *
 * @param data { Object } the JSON body for the POST request
 * @param data.summary { string } a summary (or title) for the support ticket
 * @param data.description { string } body text of the support ticket
 *
 */
export declare const createSupportTicket: (data: TicketRequest) => Promise<SupportTicket>;
/**
 * closeSupportTicket
 *
 * Close a single support ticket. This will only succeed if the ticket
 * is marked as "closable," which is a field on the ticket object. Tickets
 * opened by Linode are generally not closable through the API.
 *
 * @param ticketID { Number } the ID of the ticket to be closed
 *
 */
export declare const closeSupportTicket: (ticketId: number) => Promise<{}>;
/**
 * createReply
 *
 * Reply to a support ticket.
 *
 * @param data { Object } the ID of the ticket to be retrieved
 * @param data.ticket_id { number } the ID of the ticket
 * @param data.description { string } the text of the reply
 * @param validate { boolean } whether to run the validation schema against the request
 *
 */
export declare const createReply: (data: ReplyRequest) => Promise<SupportReply>;
/**
 * uploadAttachment
 *
 * Attach an image or other file to a support ticket.
 *
 * @param ticketID { Number } the ID of the ticket to be retrieved
 * @param formData { Object } any parameters to be sent with the request
 *
 */
export declare const uploadAttachment: (ticketId: number, formData: FormData) => Promise<{}>;
//# sourceMappingURL=support.d.ts.map