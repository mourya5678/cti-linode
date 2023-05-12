import { ResourcePage as Page } from '../types';
import { CreateFirewallPayload, Firewall, FirewallDevice, FirewallDevicePayload, FirewallRules, UpdateFirewallPayload } from './types';
/**
 * getFirewalls
 *
 * Returns a paginated list of all Cloud Firewalls on this account.
 */
export declare const getFirewalls: (params?: any, filters?: any) => Promise<Page<Firewall>>;
/**
 * getFirewall
 *
 * Get a specific Firewall resource by its ID. The Firewall's Devices will not be
 * returned in the response. Use getFirewallDevices() to view the Devices.
 *
 */
export declare const getFirewall: (firewallID: number) => Promise<Firewall>;
/**
 * createFirewall
 *
 *  Creates a Firewall to filter network traffic. Use the `rules` property to
 *  create inbound and outbound access rules. Use the `devices` property to assign the
 *  Firewall to a Linode service.
 *  A Firewall can be assigned to multiple Linode services, and up to three active Firewalls
 *  can be assigned to a single Linode service. Additional disabled Firewalls can be
 *  assigned to a service, but they cannot be enabled if three other active Firewalls
 *  are already assigned to the same service.
 */
export declare const createFirewall: (data: CreateFirewallPayload) => Promise<Firewall>;
/**
 * updateFirewall
 *
 * Updates the Cloud Firewall with the provided ID. Only label, tags, and status can be updated
 * through this method.
 *
 */
export declare const updateFirewall: (firewallID: number, data: UpdateFirewallPayload) => Promise<Firewall>;
/**
 * enableFirewall
 *
 * Convenience method for enabling a Cloud Firewall. Calls updateFirewall internally
 * with { status: 'enabled' }
 *
 */
export declare const enableFirewall: (firewallID: number) => Promise<Firewall>;
/**
 * disableFirewall
 *
 * Convenience method for disabling a Cloud Firewall. Calls updateFirewall internally
 * with { status: 'disabled' }
 *
 */
export declare const disableFirewall: (firewallID: number) => Promise<Firewall>;
/**
 * deleteFirewall
 *
 * Deletes a single Cloud Firewall.
 *
 */
export declare const deleteFirewall: (firewallID: number) => Promise<{}>;
/**
 * getFirewallRules
 *
 * Returns the current set of rules for a single Cloud Firewall.
 */
export declare const getFirewallRules: (firewallID: number, params?: any, filters?: any) => Promise<Page<FirewallRules>>;
/**
 * updateFirewallRules
 *
 * Updates the inbound and outbound Rules for a Firewall. Using this endpoint will
 * replace all of a Firewall's ruleset with the Rules specified in your request.
 */
export declare const updateFirewallRules: (firewallID: number, data: FirewallRules) => Promise<FirewallRules>;
/**
 * getFirewallDevices
 *
 * Returns a paginated list of a Firewall's Devices. A Firewall Device assigns a
 * Firewall to a Linode service (referred to as the Device's `entity`).
 */
export declare const getFirewallDevices: (firewallID: number, params?: any, filters?: any) => Promise<Page<FirewallDevice>>;
/**
 * getFirewallDevice
 *
 * Returns information about a single Firewall Device. A Firewall Device assigns a
 * Firewall to a Linode service (referred to as the Device's `entity`).
 */
export declare const getFirewallDevice: (firewallID: number, deviceID: number) => Promise<FirewallDevice>;
/**
 * addFirewallDevice
 *
 *  Creates a Firewall Device, which assigns a Firewall to a Linode service (referred to
 *  as the Device's `entity`).
 *  A Firewall can be assigned to multiple Linode services, and up to three active Firewalls can
 *  be assigned to a single Linode service. Additional disabled Firewalls can be
 *  assigned to a service, but they cannot be enabled if three other active Firewalls
 *  are already assigned to the same service.
 *  Creating a Firewall Device will apply the Rules from a Firewall to a Linode service.
 *  A `firewall_device_add` Event is generated when the Firewall Device is added successfully.
 */
export declare const addFirewallDevice: (firewallID: number, data: FirewallDevicePayload) => Promise<FirewallDevice>;
/**
 * deleteFirewallDevice
 *
 *  Removes a Firewall Device, which removes a Firewall from the Linode service it was
 *  assigned to by the Device. This will remove all of the Firewall's Rules from the Linode
 *  service. If any other Firewalls have been assigned to the Linode service, then those Rules
 *  will remain in effect.
 */
export declare const deleteFirewallDevice: (firewallID: number, deviceID: number) => Promise<{}>;
//# sourceMappingURL=firewalls.d.ts.map