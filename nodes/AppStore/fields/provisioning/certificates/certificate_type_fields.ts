import { NodePropertyTypes } from "n8n-workflow";
import { CERTIFICATE_TYPES } from "../../../utils/constants/certificate_types";
import { PROVISIONING_CERTIFICATES_METHODS } from "../../../utils/constants/methods_constants";

export let CERTIFICATE_TYPE_FIELD = {
    displayName: 'Certificate Type',
    name: 'certificateType',
    type: 'options' as NodePropertyTypes,
    options: CERTIFICATE_TYPES.map((name) => ({
        name: name,
        value: name,
    })),
    required: true,
    default: '',
    description: 'The type of the certificate you want',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_CERTIFICATES_METHODS.CREATE_CERTIFICATE
            ],
        },
    },
};