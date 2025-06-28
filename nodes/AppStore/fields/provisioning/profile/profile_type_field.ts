import { NodePropertyTypes } from "n8n-workflow";
import { PROFILE_TYPES } from "../../../utils/constants/profile_types";
import { PROVISIONING_PROFILES_METHODS } from "../../../utils/constants/methods_constants";

export let PROFILE_TYPE_FIELD = {
    displayName: 'Profile type',
    name: 'profileType',
    type: 'options' as NodePropertyTypes,
    options: PROFILE_TYPES.map(name => {
        return {
            name: name,
            value: name
        }
    }),
    default: '',
    description: 'The type of the profile',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_PROFILES_METHODS.CREATE_PROFILE
            ],
        },
    },
};
