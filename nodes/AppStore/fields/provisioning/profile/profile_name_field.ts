import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_PROFILES_METHODS } from "../../../utils/constants/methods_constants";

export const PROFILE_NAME_FIELD = {
    displayName: 'Profile Name',
    name: 'profileName',
    type: 'string' as NodePropertyTypes,
    default: '',
    description: 'The name you want to the profile',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_PROFILES_METHODS.CREATE_PROFILE
            ],
        },
    },
}