import {
    PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS,
    USER_INVITATIONS_METHODS,
    USER_METHODS,
    SANDBOX_TESTERS_METHODS
} from "./methods_constants";

export let USERS_OPERATIONS = [
    {
        name: 'List Users',
        value: USER_METHODS.LIST_USERS,
        description: 'Get a list of users',
        group: ['Users'],
        action: 'List Users',
    },
    {
        name: 'Read User Information',
        value: USER_METHODS.READ_USER_INFORMATION,
        description: 'Get a user by their Id',
        group: ['Users'],
        action: 'Read User Information',
    },
    {
        name: 'Modify a User Account',
        value: USER_METHODS.MODIFY_A_USER_ACCOUNT,
        description: 'Modify a user account',
        group: ['Users'],
        action: 'Modify a User Account',
    },
    {
        name: 'Remove a User Account',
        value: USER_METHODS.REMOVE_A_USER_ACCOUNT,
        description: 'Remove a user account',
        group: ['Users'],
        action: 'Remove a User Account',
    },
    {
        name: 'List Visible Apps for User',
        value: USER_METHODS.LIST_ALL_APPS_VISIBLE_TO_A_USER,
        description: 'Get a list of apps that a user can view',
        group: ['Users'],
    },
    {
        name: 'Get All Visible App Resource Ids for a User',
        value: USER_METHODS.GET_ALL_VISIBLE_APP_RESOURCE_IDS_FOR_A_USER,
        description: 'Get all visible app resource Ids for a user',
        group: ['Users'],
        action: 'List Visible Apps for User',
    },
    {
        name: 'Add Visible Apps to a User',
        value: USER_METHODS.ADD_VISIBLE_APPS_TO_A_USER,
        description: 'Add visible apps to a user',
        group: ['Users'],
        action: 'Add Visible Apps to a User',
    },
    {
        name: 'Replace Visible Apps for a User',
        value: USER_METHODS.REPLACE_THE_LIST_OF_VISIBLE_APPS_FOR_A_USER,
        description: 'Replace the list of visible apps for a user',
        group: ['Users'],
        action: 'Replace Visible Apps for a User',
    },
    {
        name: 'Remove Visible Apps from a User',
        value: USER_METHODS.REMOVE_VISIBLE_APPS_FROM_A_USER,
        description: 'Useful if you want to revoke user access to some app',
        group: ['Users'],
        action: 'Remove Visible Apps from a User',
    }
];

export const USER_INVITATIONS_OPERATIONS = [
    {
        name: 'List Invited Users',
        value: USER_INVITATIONS_METHODS.LIST_INVITED_USERS,
        description: 'Get a list of invited users',
        group: ['User Invitations'],
        action: 'List Invited Users',
    },
    {
        name: 'Read User Invitation Information',
        value: USER_INVITATIONS_METHODS.READ_USER_INVITATION_INFORMATION,
        description: 'Get information about a pending invitation to join your team.',
        group: ['User Invitations'],
        action: 'Read User Invitation Information',
    },
    {
        name: 'Invite a User',
        value: USER_INVITATIONS_METHODS.INVITE_A_USER,
        description: 'Invite a user with assigned user roles to join your team.',
        group: ['User Invitations'],
        action: 'Invite a User',
    },
    {
        name: 'List Visible Apps for Invited User',
        value: USER_INVITATIONS_METHODS.LIST_ALL_APPS_VISIBLE_TO_AN_INVITED_USER,
        description: 'List all apps visible to an invited user',
        group: ['User Invitations'],
        action: 'List Visible Apps for Invited User',
    },

    {
        name: 'List visible app relationships for invited user',
        value: USER_INVITATIONS_METHODS.LIST_VISIBLE_APP_RELATIONSHIPS_FOR_INVITED_USER,
        description: 'List app relationship links for a user invitation',
    },
];

export const SANDBOX_TESTERS_OPERATIONS = [
    {
        name: 'List Sandbox Testers',
        value: SANDBOX_TESTERS_METHODS.LIST_SANDBOX_TESTERS,
        description: 'Get a list of Sandbox Testers for your team.',
        group: ['Sandbox Testers'],
        action: 'List Sandbox Testers',
    },
    {
        name: 'Modify a Sandbox Tester',
        value: SANDBOX_TESTERS_METHODS.MODIFY_A_SANDBOX_TESTER,
        description: 'Change the subscription renewal time rate, set interrupted purchases or change territory of Sandbox Apple Account.',
        group: ['Sandbox Testers'],
        action: 'Modify a Sandbox Tester',
    },
    {
        name: 'Clear Purchase History for a Sandbox Tester',
        value: SANDBOX_TESTERS_METHODS.CLEAR_PURCHASE_HISTORY_FOR_A_SANDBOX_TESTER,
        description: 'Remove purchase history from a Sandbox Apple Account.',
        group: ['Sandbox Testers'],
    }
];

export const PROVISIONING_BUNDLE_ID_CAPABILITIES_OPERATIONS = [
    {
        name: 'Disable a Capability',
        value: PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.DISABLE_CAPABILITY,
        description: 'Disable a capability',
        group: ['Bundle ID Capabilities'],
        action: 'Disable a Capability',
    },
    {
        name: 'Enable a Capability',
        value: PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.ENABLE_CAPABILITY,
        description: 'Enable a capability',
        group: ['Bundle ID Capabilities'],
        action: 'Enable a Capability',
    },
    {
        name: 'Modify a Capability',
        value: PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.MODIFY_CAPABILITY,
        description: 'Modify a capability',
        group: ['Bundle ID Capabilities'],
        action: 'Modify a Capability',
    }
];
