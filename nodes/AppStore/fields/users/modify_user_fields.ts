import { NodePropertyTypes } from "n8n-workflow";
import { ADD_VISIBLE_APPS_TO_A_USER, LIST_ALL_APPS_VISIBLE_TO_A_USER, MODIFY_A_USER_ACCOUNT, REPLACE_THE_LIST_OF_VISIBLE_APPS_FOR_A_USER } from "../../utils/constants";

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
            operation: [MODIFY_A_USER_ACCOUNT],
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
            operation: [MODIFY_A_USER_ACCOUNT],
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
            operation: [MODIFY_A_USER_ACCOUNT],
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
            operation: [MODIFY_A_USER_ACCOUNT],
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
            operation: [ADD_VISIBLE_APPS_TO_A_USER],
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
            operation: [REPLACE_THE_LIST_OF_VISIBLE_APPS_FOR_A_USER],
        },
    },
};
export let LIST_ALL_APPS_USER_LIMIT_FIELD = {
    displayName: 'Limit',
    name: 'limit',
    type: 'number' as NodePropertyTypes,
    typeOptions: {
        minValue: 1,
        maxValue: 200,
    },

    default: 100,
    description: 'Number of apps to return (max 200)',
    displayOptions: {
        show: {
        operation: [LIST_ALL_APPS_VISIBLE_TO_A_USER],
        },
    },
};
export let LIST_ALL_APPS_USER_FIELDS_FIELD = {
    displayName: 'Fields (apps)',
    name: 'fieldsApps',
    type: 'multiOptions' as NodePropertyTypes,
    options: [
        { name: 'accessibilityUrl', value: 'accessibilityUrl' },
        { name: 'name', value: 'name' },
        { name: 'bundleId', value: 'bundleId' },
        { name: 'sku', value: 'sku' },
        { name: 'primaryLocale', value: 'primaryLocale' },
        { name: 'isOrEverWasMadeForKids', value: 'isOrEverWasMadeForKids' },
        { name: 'subscriptionStatusUrl', value: 'subscriptionStatusUrl' },
        { name: 'subscriptionStatusUrlVersion', value: 'subscriptionStatusUrlVersion' },
        { name: 'subscriptionStatusUrlForSandbox', value: 'subscriptionStatusUrlForSandbox' },
        { name: 'subscriptionStatusUrlVersionForSandbox', value: 'subscriptionStatusUrlVersionForSandbox' },
        { name: 'contentRightsDeclaration', value: 'contentRightsDeclaration' },
        { name: 'streamlinedPurchasingEnabled', value: 'streamlinedPurchasingEnabled' },
        { name: 'appStoreVersions', value: 'appStoreVersions' },
    ],
    default: [],
    description: 'Fields of the app resource to return',
    displayOptions: {
        show: {
            operation: [LIST_ALL_APPS_VISIBLE_TO_A_USER],
        },
    },
};