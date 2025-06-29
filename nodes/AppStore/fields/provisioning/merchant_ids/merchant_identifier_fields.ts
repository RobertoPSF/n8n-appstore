import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_MERCHANT_IDS_METHODS } from "../../../utils/constants/methods_constants";

export const MERCHANT_IDENTIFIER_FIELD = {
    displayName: 'Merchant Identifier',
    name: 'merchantIdentifier',
    type: 'string' as NodePropertyTypes,
	required: true,
    default: '',
    description: 'The merchant identifier',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_MERCHANT_IDS_METHODS.CREATE_MERCHANT_ID
            ],
        },
    },
}