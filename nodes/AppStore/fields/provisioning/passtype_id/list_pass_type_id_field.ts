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
		displayName: 'Campos de PassTypeIds',
		name: 'fieldsPassTypeIds',
		type: 'multiOptions',
		typeOptions: { allowEmpty: true },
		options: ['name', 'identifier', 'certificates'].map(v => ({ name: v, value: v })),
		default: [],
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_ALL_PASS_TYPE_IDS] } },
	},
	{
		displayName: 'Campos de Certificates',
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
		displayName: 'Limite geral (max 200)',
		name: 'limit',
		type: 'number',
		typeOptions: { minValue: 1, maxValue: 200 },
		default: 200,
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_ALL_PASS_TYPE_IDS] } },
	},
	{
		displayName: 'Limite de Certificates (max 50)',
		name: 'limitCertificates',
		type: 'number',
		typeOptions: { minValue: 1, maxValue: 50 },
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
			{ name: 'Name (A-Z)',       value: 'name' },
			{ name: 'Name (Z-A)',       value: '-name' },
			{ name: 'Identifier (A-Z)', value: 'identifier' },
			{ name: 'Identifier (Z-A)', value: '-identifier' },
			{ name: 'ID (A-Z)',         value: 'id' },
			{ name: 'ID (Z-A)',         value: '-id' },
		],
		default: '',
		displayOptions: { show: { operation: [PASS_TYPE_METHODS.LIST_ALL_PASS_TYPE_IDS] } },
	},
];