import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_MERCHANT_IDS_METHODS } from "../../../utils/constants/methods_constants";

export const MERCHANT_NAME_FIELD = {
    displayName: 'Merchant Name',
    name: 'merchantName',
    type: 'string' as NodePropertyTypes,
	required: true,
    default: '',
    description: 'The new name of the merchant that you want',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_MERCHANT_IDS_METHODS.MODIFY_MERCHANT_IDS
            ],
        },
    },
}