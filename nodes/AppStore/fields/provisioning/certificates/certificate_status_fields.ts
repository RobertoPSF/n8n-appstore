import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_CERTIFICATES_METHODS } from "../../../utils/constants/methods_constants";

export let CERTIFICATE_STATUS_FIELD = {
    displayName: 'Certificate active',
    name: 'certificateStatus',
    type: 'boolean' as NodePropertyTypes,
    required: true,
    default: false,
    description: 'The status you want your certificate change to',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_CERTIFICATES_METHODS.MODIFY_CERTIFICATE
            ],
        },
    },
};