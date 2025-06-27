import { NodePropertyTypes } from "n8n-workflow";
import { SANDBOX_TESTERS_METHODS } from "../../utils/constants/constants";

export let SANDBOX_USER_ID_FIELD = {
    displayName: 'Sandbox user id',
    name: 'sandBoxUserId',
    type: 'string' as NodePropertyTypes,
    required: true,
    default: '',
    description: 'The ID of the user to retrieve, remove or modify',
    displayOptions: {
        show: {
            operation: [
                SANDBOX_TESTERS_METHODS.MODIFY_A_SANDBOX_TESTER
            ],
        },
    },
}