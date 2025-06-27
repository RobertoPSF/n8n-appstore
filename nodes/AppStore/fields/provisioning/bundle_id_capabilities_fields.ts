import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS } from "../../utils/constants/constants";

export let CAPABILITY_ID_FIELD = {
    displayName: 'Capability ID',
    name: 'capabilityId',
    type: 'string' as NodePropertyTypes,
    required: true,
    default: '',
    description: 'The ID of the capability to retrieve, remove or modify',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.DISABLE_CAPABILITY,
            ],
        },
    },
}