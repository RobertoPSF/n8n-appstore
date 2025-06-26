import { NodePropertyTypes } from "n8n-workflow";

export let USER_ID_FIELD = {
    displayName: 'User ID',
    name: 'userId',
    type: 'string' as NodePropertyTypes,
    required: true,
    default: '',
    description: 'The ID of the user to retrieve, remove or modify',
    displayOptions: {
        show: {
            operation: [
                'getUserById',
                'removeUser',
                'modifyUser',
                'listUserVisibleAppsForUser',
                'listUserVisibleAppRelationships',
                'addUserVisibleApps',
                'replaceUserVisibleApps',
                'listVisibleAppsForUser',
            ],
        },
    },
}