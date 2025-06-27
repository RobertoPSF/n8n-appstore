import { NodePropertyTypes } from "n8n-workflow";
import { USER_METHODS } from "../../utils/constants/methods_constants";
import { USER_PROPERTIES } from "../../utils/constants/user_properties";

export let USERS_FIELDS = {
    displayName: 'Users fields to get on response',
    name: 'usersFields',
    type: 'multiOptions' as NodePropertyTypes,
    options: USER_PROPERTIES.map((user_property) => ({
        name: user_property,
        value: user_property
    })),
    default: [],
    description: 'The fields of the user that you want to get on the request',
    displayOptions: {
        show: {
            operation: [USER_METHODS.READ_USER_INFORMATION],
        },
    },
};