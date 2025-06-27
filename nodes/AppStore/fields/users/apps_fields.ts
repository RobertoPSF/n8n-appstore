import { NodePropertyTypes } from "n8n-workflow";
import { USER_METHODS } from "../../utils/constants/methods_constants";
import { USER_INVITATIONS_METHODS } from "../../utils/constants/methods_constants";
import { APPS_PROPERTIES } from "../../utils/constants/apps_properties";

export let APPS_FIELDS = {
    displayName: 'Apps fields to get on response',
    name: 'appsFields',
    type: 'multiOptions' as NodePropertyTypes,
    options: APPS_PROPERTIES.map((name) => ({
        name: name,
        value: name,
    })),
    default: [],
    description: 'The fields of the games that you want to get on the request',
    displayOptions: {
        show: {
            operation: [
                USER_METHODS.READ_USER_INFORMATION,
                USER_INVITATIONS_METHODS.LIST_ALL_APPS_VISIBLE_TO_AN_INVITED_USER,
            ],
        },
    },
};
