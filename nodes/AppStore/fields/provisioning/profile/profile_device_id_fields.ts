import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_PROFILES_METHODS } from "../../../utils/constants/methods_constants";

export const PROFILE_DEVICES_IDS_FIELDS = {
    displayName: 'Profile Devices IDs',
    name: 'profileDevicesIds',
    type: 'string' as NodePropertyTypes,
    default: [],
    description: 'Profile devices IDs to associate with the profile',
    typeOptions: {
        multipleValues: true,
        multipleValueButtonText: 'Add device id',
    },
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_PROFILES_METHODS.CREATE_PROFILE
            ],
        },
    },
}