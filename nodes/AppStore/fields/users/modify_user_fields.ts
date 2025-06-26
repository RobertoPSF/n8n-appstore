import { NodePropertyTypes } from "n8n-workflow";

export let MODIFY_USER_ROLES_FIELD = {
    displayName: 'Roles',
    name: 'roles',
    type: 'multiOptions' as NodePropertyTypes,
    options: [
        { name: 'ADMIN', value: 'ADMIN' },
        { name: 'FINANCE', value: 'FINANCE' },
        { name: 'TECHNICAL', value: 'TECHNICAL' },
        { name: 'SALES', value: 'SALES' },
        { name: 'MARKETING', value: 'MARKETING' },
        { name: 'DEVELOPER', value: 'DEVELOPER' },
        { name: 'APP MANAGER', value: 'APP_MANAGER' },
        { name: 'ACCESS TO REPORTS', value: 'ACCESS_TO_REPORTS' },
        { name: 'CUSTOMER SUPPORT', value: 'CUSTOMER_SUPPORT' },
        { name: 'CREATE APPS', value: 'CREATE_APPS' },
    ],
    default: [],
    description: 'Select one or more roles for the user',
    displayOptions: {
        show: {
            operation: ['modifyUser'],
        },
    },
};
export let MODIFY_USER_ALL_APPS_VISIBLE_SWITCH = {
    displayName: 'All Apps Visible',
    name: 'allAppsVisible',
    type: 'boolean' as NodePropertyTypes,
    default: false,
    description: 'Can the user see all apps?',
    displayOptions: {
        show: {
            operation: ['modifyUser'],
        },
    },
};
export let MODIFY_USER_PROVISIONING_ALLOWED_SWITCH = {
    displayName: 'Provisioning Allowed',
    name: 'provisioningAllowed',
    type: 'boolean' as NodePropertyTypes,
    default: false,
    description: 'Is provisioning allowed for the user?',
    displayOptions: {
        show: {
            operation: ['modifyUser'],
        },
    },
};
export let MODIFY_USER_VISIBLE_APP_IDS = {
    displayName: 'Visible App IDs',
    name: 'visibleApps',
    type: 'string' as NodePropertyTypes,
    default: '',
    description: 'Comma-separated list of App IDs the user can see (leave blank for none)',
    displayOptions: {
        show: {
            operation: ['modifyUser'],
        },
    },
};
export let ADD_USER_VISIBLE_APP_IDS = {
    displayName: 'App IDs to Add',
    name: 'visibleAppsToAdd',
    type: 'string' as NodePropertyTypes,
    default: '',
    description: 'Comma-separated list of App IDs to add to the user',
    displayOptions: {
        show: {
            operation: ['addUserVisibleApps'],
        },
    },
};
export let REPLACE_USER_VISIBLE_APP_IDS = {
    displayName: 'App IDs to Replace',
    name: 'visibleAppsToReplace',
    type: 'string' as NodePropertyTypes,
    default: '',
    description: 'Comma-separated list of App IDs to set as visible for the user (replaces all current visible apps)',
    displayOptions: {
        show: {
            operation: ['replaceUserVisibleApps'],
        },
    },
};