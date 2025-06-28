import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_PROFILES_METHODS } from "../../../utils/constants/methods_constants";

export const PROFILE_BUNDLE_ID_FIELD = {
    displayName: 'Profile bundle id',
    name: 'profileBundleId',
    type: 'string' as NodePropertyTypes,
    default: '',
    description: 'The bundle id you want to associate your profile',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_PROFILES_METHODS.CREATE_PROFILE
            ],
        },
    },
}