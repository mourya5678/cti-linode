import { ResourcePage } from '../types';
import { Event, Notification } from './types';
/**
 * getEvents
 *
 * Retrieve a list of events on your account.
 *
 */
export declare const getEvents: (params?: any, filter?: any) => Promise<ResourcePage<Event>>;
/**
 * getEvent
 *
 * Retrieve details about a single event.
 *
 */
export declare const getEvent: (eventId: number) => Promise<Event>;
/**
 * markEventSeen
 *
 * Set the "seen" property of an event to true
 *
 * @param eventId { number } ID of the event to designate as seen
 */
export declare const markEventSeen: (eventId: number) => Promise<{}>;
/**
 * markEventRead
 *
 * Set the "read" property of an event to true
 *
 * @param eventId { number } ID of the event to designate as read
 *
 */
export declare const markEventRead: (eventId: number) => Promise<{}>;
/**
 * getNotifications
 *
 * Retrieve a list of active notifications on your account.
 *
 */
export declare const getNotifications: (params?: any, filter?: any) => Promise<ResourcePage<Notification>>;
//# sourceMappingURL=events.d.ts.map