import { NodePropertyTypes } from "n8n-workflow";
import { USER_INVITATIONS_METHODS } from "../../utils/constants/methods_constants";


export let INVITE_USER_ALL_APPS_VISIBLE_SWITCH = {
    displayName: 'All Apps Visible',
    name: 'allAppsVisible',
    type: 'boolean' as NodePropertyTypes,
    default: false,
    description: 'Can the user see all apps?',
    displayOptions: {
        show: {
            operation: [USER_INVITATIONS_METHODS.INVITE_A_USER],
        },
    }
};

export let INVITE_USER_PROVISIONING_ALLOWED_SWITCH = {
    displayName: 'Provisioning Allowed',
    name: 'provisioningAllowed',
    type: 'boolean' as NodePropertyTypes,
    default: false,
    description: 'Is provisioning allowed for the user?',
    displayOptions: {
        show: {
            operation: [USER_INVITATIONS_METHODS.INVITE_A_USER],
        },
    },
};

export let INVITE_USER_EMAIL_FIELD = {
    displayName: 'Email',
    name: 'email',
    type: 'string' as NodePropertyTypes,
    default: '',
    placeholder: 'user@example.com',
    hint: 'Enter a valid email address',
    description: 'Email of the user that must be invited',
    displayOptions: {
        show: {
            operation: [
                USER_INVITATIONS_METHODS.INVITE_A_USER,
            ],
        },
    },
};

export let INVITE_USER_FIRST_NAME_FIELD = {
    displayName: 'First Name',
    name: 'firstName',
    type: 'string' as NodePropertyTypes,
    default: '',
    description: 'First name of the user that must be invited',
    displayOptions: {
        show: {
            operation: [
                USER_INVITATIONS_METHODS.INVITE_A_USER,
            ],
        },
    },
};

export let INVITE_USER_LAST_NAME_FIELD = {
    displayName: 'Last Name',
    name: 'lastName',
    type: 'string' as NodePropertyTypes,
    default: '',
    description: 'Last name of the user that must be invited',
    displayOptions: {
        show: {
            operation: [
                USER_INVITATIONS_METHODS.INVITE_A_USER,
            ],
        },
    },
};
