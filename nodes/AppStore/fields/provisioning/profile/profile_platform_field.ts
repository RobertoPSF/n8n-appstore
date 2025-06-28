import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_PROFILES_METHODS } from "../../../utils/constants/methods_constants";
import { PLATFORM_TYPE } from "../../../utils/constants/platform_type";

export let PROFILE_PLATFORM_TYPE_FIELD = {
    displayName: 'Profile platform',
    name: 'profilePlatform',
    type: 'options' as NodePropertyTypes,
    options: PLATFORM_TYPE.map(name => {
        return {
            name: name,
            value: name
        }
    }),
    default: '',
    description: 'The platform of the profile',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_PROFILES_METHODS.CREATE_PROFILE
            ],
        },
    },
};
