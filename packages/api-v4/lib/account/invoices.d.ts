import { ResourcePage } from '../types';
import { Invoice, InvoiceItem } from './types';
/**
 * getInvoices
 *
 * Retrieve a paginated list of invoices on your account.
 *
 */
export declare const getInvoices: (params?: any, filter?: any) => Promise<ResourcePage<Invoice>>;
/**
 * getInvoice
 *
 * Retrieve details for a single invoice.
 *
 * @param invoiceId { number } The ID of the invoice to be retrieved
 *
 */
export declare const getInvoice: (invoiceId: number) => Promise<Invoice>;
/**
 * getInvoiceItems
 *
 * Returns a paginated list of invoice items
 *
 * @param invoiceId { number } return items for an invoice with this ID
 *
 *
 */
export declare const getInvoiceItems: (invoiceId: number, params?: any, filter?: any) => Promise<ResourcePage<InvoiceItem>>;
//# sourceMappingURL=invoices.d.ts.map