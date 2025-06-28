import { INodeProperties } from 'n8n-workflow';
import { PASS_TYPE_METHODS } from '../../../utils/constants/methods_constants';

export const GET_CERT_PTI_REL_FIELDS: INodeProperties[] = [
	{
		displayName: 'Certificate Resource ID',
		name: 'certificateId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: { operation: [PASS_TYPE_METHODS.GET_RELATION_BY_CERT] },
		},
	},
];
