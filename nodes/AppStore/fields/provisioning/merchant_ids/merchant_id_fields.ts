import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_MERCHANT_IDS_METHODS } from "../../../utils/constants/methods_constants";

export const MERCHANT_ID_FIELD = {
    displayName: 'Merchant ID',
    name: 'merchantId',
    type: 'string' as NodePropertyTypes,
	required: true,
    default: '',
    description: 'The ID of the merchant to retrieve, remove or modify',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_MERCHANT_IDS_METHODS.READ_MERCHANT_ID_DETAILS,
                PROVISIONING_MERCHANT_IDS_METHODS.DELETE_MERCHANT_ID,
                PROVISIONING_MERCHANT_IDS_METHODS.LIST_CERTIFICATES_FOR_MERCHANT_ID,
                PROVISIONING_MERCHANT_IDS_METHODS.GET_MERCHANTID_CERTIFICATES_RELATIONSHIP
            ],
        },
    },
}