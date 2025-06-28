import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_CERTIFICATES_METHODS } from "../../../utils/constants/methods_constants";


export let CERTIFICATE_ID_FIELD = {
	displayName: 'Certificate ID',
	name: 'certificateId',
	type: 'string' as NodePropertyTypes,
	required: true,
	default: '',
	description: 'The ID of the certificate to retrieve, remove or modify',
	displayOptions: {
			show: {
					operation: [
						PROVISIONING_CERTIFICATES_METHODS.READ_AND_DOWNLOAD_CERTIFICATE_INFORMATION,
						PROVISIONING_CERTIFICATES_METHODS.LIST_PASSTYPEID_IDS_FOR_CERTIFICATE,
						PROVISIONING_CERTIFICATES_METHODS.GET_CERTIFICATE_PASSTYPEID_RELATIONSHIP,
					],
			},
	},
}