import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_PROFILES_METHODS } from "../../../utils/constants/methods_constants";

export const PROFILE_ID_FIELD = {
    displayName: 'Profile ID',
    name: 'profileId',
    type: 'string' as NodePropertyTypes,
	required: true,
    default: '',
    description: 'The ID of the profile to retrieve, remove or modify',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_PROFILES_METHODS.READ_AND_DOWNLOAD_PROFILE_INFORMATION,
                PROVISIONING_PROFILES_METHODS.DELETE_PROFILE,
                PROVISIONING_PROFILES_METHODS.READ_BUNDLE_ID_IN_PROFILE,
                PROVISIONING_PROFILES_METHODS.LIST_PROFILE_CERTIFICATES,
                PROVISIONING_PROFILES_METHODS.GET_PROFILE_CERTIFICATES_RELATIONSHIP,
                PROVISIONING_PROFILES_METHODS.LIST_PROFILE_DEVICES,
                PROVISIONING_PROFILES_METHODS.GET_PROFILE_DEVICES_RELATIONSHIP,
                PROVISIONING_PROFILES_METHODS.GET_PROFILE_BUNDLEID_RELATIONSHIP
            ],
        },
    },
}