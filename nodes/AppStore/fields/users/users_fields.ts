import { NodePropertyTypes } from "n8n-workflow";

export let USERS_FIELDS = {
    displayName: 'Users fields to get on response',
    name: 'usersFields',
    type: 'multiOptions' as NodePropertyTypes,
    options: [
        { name: 'username', value: 'username' },
        { name: 'firstName', value: 'firstName' },
        { name: 'lastName', value: 'lastName' },
        { name: 'roles', value: 'roles' },
        { name: 'allAppsVisible', value: 'allAppsVisible' },
        { name: 'provisioningAllowed', value: 'provisioningAllowed' },
        { name: 'visibleApps', value: 'visibleApps' }
    ],
    default: [],
    description: 'The fields of the user that you want to get on the request',
    displayOptions: {
        show: {
            operation: ['getUserById'],
        },
    },
};