import { NodePropertyTypes } from "n8n-workflow";

export let ID_FIELD = {
    displayName: 'Id',
    name: 'id',
    type: 'string' as NodePropertyTypes,
    required: true,
    default: '',
    description: 'The ID of the object to retrieve, remove or modify',
    displayOptions: {
        show: {
            operation: ['getUserById', 'removeUser', 'modifyUser', 'getUserInvitationById'],
        },
    },
}