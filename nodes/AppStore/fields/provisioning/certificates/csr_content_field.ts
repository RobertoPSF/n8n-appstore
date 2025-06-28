import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_CERTIFICATES_METHODS } from "../../../utils/constants/methods_constants";

export const CSR_CONTENT_FIELD = {
    displayName: 'CSR content',
    name: 'csrContent',
    type: 'string' as NodePropertyTypes,
    required: true,
    default: '',
    description: 'csrContent: String PEM Base64 encoded containing the complete Certificate Signing Request, including the lines -----BEGIN CERTIFICATE REQUEST----- and -----END CERTIFICATE REQUEST-----',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_CERTIFICATES_METHODS.CREATE_CERTIFICATE
            ],
        }
    }
}