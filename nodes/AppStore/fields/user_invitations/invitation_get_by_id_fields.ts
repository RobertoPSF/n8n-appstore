import { NodePropertyTypes } from "n8n-workflow";
import { USER_INVITATIONS_METHODS} from "../../utils/constants/methods_constants";

export let INVITATION_ID_FIELD = {
    displayName: 'Invitation ID',
    name: 'invitationId',
    type: 'string' as NodePropertyTypes,
    required: true,
    default: '',
    description: 'The ID of the invitation to retrieve, remove or modify',
    displayOptions: {
        show: {
            operation: [
                USER_INVITATIONS_METHODS.READ_USER_INVITATION_INFORMATION
            ],
        },
    },
}