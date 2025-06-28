import { INodeProperties } from 'n8n-workflow';
import { PASS_TYPE_METHODS } from '../../../utils/constants/methods_constants';

export const LIST_ALL_PTI_FIELDS: INodeProperties[] = [
	{
		displayName: 'PassTypeID ID',
		name: 'filterId',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_ALL_PASS_TYPE_IDS] } },
	},
	{
		displayName: 'Identifier',
		name: 'filterIdentifier',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_ALL_PASS_TYPE_IDS] } },
	},
	{
		displayName: 'Name',
		name: 'filterName',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_ALL_PASS_TYPE_IDS] } },
	},

	{
		displayName: 'Campos De PassTypeIds',
		name: 'fieldsPassTypeIds',
		type: 'multiOptions',
		typeOptions: { allowEmpty: true },
		options: ['name', 'identifier', 'certificates'].map(v => ({ name: v, value: v })),
		default: [],
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_ALL_PASS_TYPE_IDS] } },
	},
	{
		displayName: 'Campos De Certificates',
		name: 'fieldsCertificates',
		type: 'multiOptions',
		typeOptions: { allowEmpty: true },
		options: [
			'name','certificateType','displayName','serialNumber','platform',
			'expirationDate','certificateContent','activated','passTypeId',
		].map(v => ({ name: v, value: v })),
		default: [],
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_ALL_PASS_TYPE_IDS] } },
	},

	{
		displayName: 'Incluir Certificates?',
		name: 'includeCertificates',
		type: 'boolean',
		default: false,
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_ALL_PASS_TYPE_IDS] } },
	},
	{
		displayName: 'Limite Geral (Max 200)',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		description: 'Max number of results to return',
		default: 50,
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_ALL_PASS_TYPE_IDS] } },
	},
	{
		displayName: 'Limite De Certificates (Max 50)',
		name: 'limitCertificates',
		type: 'number',
		description: 'Max number of certificates to return',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		displayOptions: {
			show: {
				operation:           [PASS_TYPE_METHODS.LIST_ALL_PASS_TYPE_IDS],
				includeCertificates: [true],
			},
		},
	},

	{
		displayName: 'Ordenar por',
		name: 'sortBy',
		type: 'options',
		typeOptions: { allowEmpty: true },
		options: [
			{ name: 'ID (A-Z)',         value: 'id' },
			{ name: 'ID (Z-A)',         value: '-id' },
			{ name: 'Identifier (A-Z)', value: 'identifier' },
			{ name: 'Identifier (Z-A)', value: '-identifier' },
			{ name: 'Name (A-Z)',       value: 'name' },
			{ name: 'Name (Z-A)',       value: '-name' },
		],
		default: 'name',
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_ALL_PASS_TYPE_IDS] } },
	},
];