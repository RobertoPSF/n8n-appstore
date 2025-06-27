import { PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS, USER_INVITATIONS_METHODS, USER_METHODS } from "./constants";

export let USERS_OPERATIONS = [
    {
        name: 'List Users',
        value: USER_METHODS.LIST_USERS,
        description: 'Get a list of users',
    },
    {
        name: 'Read User Information',
        value: USER_METHODS.READ_USER_INFORMATION,
        description: 'Get a user by their Id',
    },
    {
        name: 'Modify a User Account',
        value: USER_METHODS.MODIFY_A_USER_ACCOUNT,
        description: 'Modify a user account',
    },
    {
        name: 'Remove a User Account',
        value: USER_METHODS.REMOVE_A_USER_ACCOUNT,
        description: 'Remove a user account',
    },
    {
        name: 'List Visible Apps for User',
        value: USER_METHODS.LIST_ALL_APPS_VISIBLE_TO_A_USER,
        description: 'Get a list of apps that a user can view',
    },
    {
        name: 'Get All Visible App Resource Ids for a User',
        value: USER_METHODS.GET_ALL_VISIBLE_APP_RESOURCE_IDS_FOR_A_USER,
        description: 'Get all visible app resource Ids for a user',
    },
    {
        name: 'Add User Visible Apps',
        value: USER_METHODS.ADD_VISIBLE_APPS_TO_A_USER,
        description: 'Add visible apps to a user',
    },
    {
        name: 'Replace User Visible Apps',
        value: USER_METHODS.REPLACE_THE_LIST_OF_VISIBLE_APPS_FOR_A_USER,
        description: 'Replace the list of visible apps for a user',
    },
    {
        name: 'Remove Visible Apps from a User',
        value: USER_METHODS.REMOVE_VISIBLE_APPS_FROM_A_USER,
        description: 'Useful if you want to revoke user access to some app'
    }
];

export const USER_INVITATIONS_OPERATIONS = [
    {
        name: 'List Invitated Users',
        value: USER_INVITATIONS_METHODS.LIST_INVITED_USERS,
        description: 'Get a list of invitated users'
    },
];

export const PROVISIONING_BUNDLE_ID_CAPABILITIES_OPERATIONS = [
    {
        name: 'Disable a Capability',
        value: PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.DISABLE_CAPABILITY,
        description: 'Disable a capability'
    },
];