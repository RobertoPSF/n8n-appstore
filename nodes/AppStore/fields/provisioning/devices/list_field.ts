import { INodeProperties } from 'n8n-workflow';
import { DEVICE_METHODS } from '../../../utils/constants/methods_constants';

export const LIST_DEVICES_FIELDS: INodeProperties[] = [
	{
		displayName: 'Device ID',
		name: 'deviceId',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: [DEVICE_METHODS.LIST_DEVICES] } },
	},
	{
		displayName: 'Device Name',
		name: 'deviceName',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: [DEVICE_METHODS.LIST_DEVICES] } },
	},
	{
		displayName: 'Platform',
		name: 'platform',
		type: 'options',
		typeOptions: { allowEmpty: true },
		options: [
			{ name: 'iOS',       value: 'IOS' },
			{ name: 'macOS',     value: 'MAC_OS' },
			{ name: 'Universal', value: 'UNIVERSAL' },
		],
		default: '',
		displayOptions: { show: { operation: [DEVICE_METHODS.LIST_DEVICES] } },
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		typeOptions: { allowEmpty: true },
		options: [
			{ name: 'Enabled',  value: 'ENABLED' },
			{ name: 'Disabled', value: 'DISABLED' },
		],
		default: '',
		displayOptions: { show: { operation: [DEVICE_METHODS.LIST_DEVICES] } },
	},
	{
		displayName: 'UDID',
		name: 'udid',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: [DEVICE_METHODS.LIST_DEVICES] } },
	},

	{
		displayName: 'Campos a retornar',
		name: 'fieldsDevices',
		type: 'multiOptions',
		options: [
			'name',
			'platform',
			'udid',
			'deviceClass',
			'status',
			'model',
			'addedDate',
		].map(v => ({ name: v, value: v })),
		default: [],
		displayOptions: { show: { operation: [DEVICE_METHODS.LIST_DEVICES] } },
	},

	{
		displayName: 'Ordenar por',
		name: 'sortBy',
		type: 'options',
		typeOptions: { allowEmpty: true },
		options: [
			{ name: 'Name (A-Z)',       value: 'name' },
			{ name: 'Name (Z-A)',       value: '-name' },
			{ name: 'Platform (A-Z)',   value: 'platform' },
			{ name: 'Platform (Z-A)',   value: '-platform' },
			{ name: 'UDID (A-Z)',       value: 'udid' },
			{ name: 'UDID (Z-A)',       value: '-udid' },
			{ name: 'Status (A-Z)',     value: 'status' },
			{ name: 'Status (Z-A)',     value: '-status' },
			{ name: 'ID (A-Z)',         value: 'id' },
			{ name: 'ID (Z-A)',         value: '-id' },
		],
		default: '',
		displayOptions: { show: { operation: [DEVICE_METHODS.LIST_DEVICES] } },
	},
];
