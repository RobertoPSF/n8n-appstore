import { NodePropertyTypes } from "n8n-workflow";
import { USER_INVITATIONS_METHODS, USER_METHODS } from "../../utils/constants/methods_constants";
import { APPS_PROPERTIES } from "../../utils/constants/apps_properties";
import { ROLES } from "../../utils/constants/app_store_roles";

export let MODIFY_USER_ROLES_FIELD = {
    displayName: 'Roles',
    name: 'roles',
    type: 'multiOptions' as NodePropertyTypes,
    options: ROLES.map((role) => ({
        name: role,
        value: role
    })),
    default: [],
    description: 'Select one or more roles for the user',
    displayOptions: {
        show: {
            operation: [
                USER_METHODS.MODIFY_A_USER_ACCOUNT, 
                USER_INVITATIONS_METHODS.INVITE_A_USER
            ],
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
            operation: [USER_METHODS.MODIFY_A_USER_ACCOUNT],
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
            operation: [USER_METHODS.MODIFY_A_USER_ACCOUNT],
        },
    },
};
export let APP_IDS_FIELD = {
    displayName: 'App IDs',
    name: 'visibleApps',
    type: 'string' as NodePropertyTypes,
    default: [],
    description: 'List of App IDs',
    typeOptions: {
        multipleValues: true,
        multipleValueButtonText: 'Add app id',
    },
    displayOptions: {
        show: {
            operation: [
                USER_METHODS.MODIFY_A_USER_ACCOUNT,
                USER_METHODS.ADD_VISIBLE_APPS_TO_A_USER,
                USER_METHODS.REPLACE_THE_LIST_OF_VISIBLE_APPS_FOR_A_USER,
                USER_METHODS.REMOVE_VISIBLE_APPS_FROM_A_USER
            ],
        },
    },
};
export let LIST_ALL_APPS_USER_FIELDS_FIELD = {
    displayName: 'Fields (Apps)',
    name: 'fieldsApps',
    type: 'multiOptions' as NodePropertyTypes,
    options: APPS_PROPERTIES.map((name) => ({
        name: name,
        value: name,
    })),
    default: [],
    description: 'Fields of the app resource to return',
    displayOptions: {
        show: {
            operation: [USER_METHODS.LIST_ALL_APPS_VISIBLE_TO_A_USER],
        },
    },
};
