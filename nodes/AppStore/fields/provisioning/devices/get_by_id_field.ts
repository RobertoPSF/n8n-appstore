import { INodeProperties } from 'n8n-workflow';
import { DEVICE_METHODS } from '../../../utils/constants/methods_constants';

export const GET_DEVICE_FIELDS: INodeProperties[] = [
	{
		displayName: 'Device ID',
		name: 'deviceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: [DEVICE_METHODS.READ_DEVICE] } },
	},
	{
		displayName: 'Campos a retornar',
		name: 'fieldsDevices',
		type: 'multiOptions',
		typeOptions: { allowEmpty: true },
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
		displayOptions: { show: { operation: [DEVICE_METHODS.READ_DEVICE] } },
	},
];
