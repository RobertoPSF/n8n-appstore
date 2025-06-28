import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_PROFILES_METHODS } from "../../../utils/constants/methods_constants";

export const PROFILE_CERTIFICATES_IDS_FIELDS = {
    displayName: 'Profile certificates ids',
    name: 'profileCertificatesIds',
    type: 'string' as NodePropertyTypes,
    default: [],
    description: 'Profile certificates ids to associate with the profile',
    typeOptions: {
        multipleValues: true,
        multipleValueButtonText: 'Add certificate id',
    },
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_PROFILES_METHODS.CREATE_PROFILE
            ],
        },
    },
}