import { INodeProperties } from 'n8n-workflow';
import { PASS_TYPE_METHODS } from '../../../utils/constants/methods_constants';

export const LIST_PASS_TYPE_IDS_FIELDS: INodeProperties[] = [
	{
		displayName: 'Certificate Resource ID',
		name: 'certificateId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_BY_CERT] } },
	},
	{
		displayName: 'Campos de Certificates',
		name: 'fieldsCertificates',
		type: 'multiOptions',
		typeOptions: { allowEmpty: true },
		options: [
			'name','certificateType','displayName','serialNumber',
			'platform','expirationDate','certificateContent','activated','passTypeId',
		].map(v => ({ name: v, value: v })),
		default: [],
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_BY_CERT] } },
	},
	{
		displayName: 'Campos de PassTypeIds',
		name: 'fieldsPassTypeIds',
		type: 'multiOptions',
		typeOptions: { allowEmpty: true },
		options: ['name','identifier','certificates']
			.map(v => ({ name: v, value: v })),
		default: [],
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_BY_CERT] } },
	},
	{
		displayName: 'Incluir Certificates?',
		name: 'includeCertificates',
		type: 'boolean',
		default: false,
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_BY_CERT] } },
	},
	{
		displayName: 'Limite de Certificates (max 50)',
		name: 'limitCertificates',
		type: 'number',
		typeOptions: { minValue: 1, maxValue: 50 },
		default: 50,
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_BY_CERT] } },
	},
];
