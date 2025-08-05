import { NodePropertyTypes } from "n8n-workflow";
import { USER_INVITATIONS_METHODS, USER_METHODS } from "../../utils/constants/methods_constants";
import { APPS_PROPERTIES } from "../../utils/constants/apps_properties";

export let MODIFY_USER_ROLES_FIELD = {
    displayName: 'Roles',
    name: 'roles',
    type: 'string' as NodePropertyTypes,
    default: '',
    description: 'Comma separated list of roles for the user',
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
            operation: [],
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
            operation: [],
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
