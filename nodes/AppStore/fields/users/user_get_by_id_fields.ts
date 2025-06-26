import { NodePropertyTypes } from "n8n-workflow";

export let MODIFY_USER_USER_ID_FIELD = {
    displayName: 'User ID',
    name: 'userId',
    type: 'string' as NodePropertyTypes,
    required: true,
    default: '',
    description: 'The ID of the user to retrieve',
    displayOptions: {
        show: {
            operation: ['getUserById'],
        },
    },
}