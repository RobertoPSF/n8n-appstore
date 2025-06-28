import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_PASSTYPE_IDS_METHODS } from "../../../utils/constants/methods_constants";

export const PASSTYPE_ID_FIELD = {
    displayName: 'Pass Type ID',
    name: 'passTypeId',
    type: 'string' as NodePropertyTypes,
	required: true,
    default: '',
    description: 'The ID of the pass type to retrieve, remove or modify',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_PASSTYPE_IDS_METHODS.READ_PASSTYPEID_INFORMATION,
                PROVISIONING_PASSTYPE_IDS_METHODS.DELETE_PASSTYPEID,
                PROVISIONING_PASSTYPE_IDS_METHODS.LIST_CERTIFICATES_FOR_PASSTYPEID,
                PROVISIONING_PASSTYPE_IDS_METHODS.GET_PASSTYPEID_CERTIFICATES_RELATIONSHIP
            ],
        },
    },
}