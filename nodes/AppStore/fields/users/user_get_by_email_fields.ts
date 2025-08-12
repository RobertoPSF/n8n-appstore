import { NodePropertyTypes } from "n8n-workflow";
import { USER_INVITATIONS_METHODS, USER_METHODS } from "../../utils/constants/methods_constants";

export let USER_EMAIL_FIELD = {
    displayName: 'User Email',
    name: 'email',
    type: 'string' as NodePropertyTypes,
    required: true,
    default: '',
    description: 'The email of the user to retrieve',
    displayOptions: {
        show: {
            operation: [
                USER_METHODS.GET_USER_BY_EMAIL,
                USER_INVITATIONS_METHODS.READ_USER_INVITATION_BY_EMAIL
            ],
        },
    },
}
