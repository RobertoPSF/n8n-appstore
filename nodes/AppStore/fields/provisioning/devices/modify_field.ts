import { INodeProperties } from 'n8n-workflow';
import { DEVICE_METHODS } from '../../../utils/constants/methods_constants';

export const MODIFY_DEVICE_FIELDS: INodeProperties[] = [
	{
		displayName: 'Device Resource ID',
		name: 'deviceId',
		type: 'string',
		required: true,
		default: '',
		description: 'Valor do campo <id> retornado por List/Register (não é o UDID).',
		displayOptions: { show: { operation: [DEVICE_METHODS.MODIFY_DEVICE] } },
	},
	{
		displayName: 'Novo nome (opcional)',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: { show: { operation: [DEVICE_METHODS.MODIFY_DEVICE] } },
	},
	{
		displayName: 'Novo status (opcional)',
		name: 'status',
		type: 'options',
		typeOptions: { allowEmpty: true },
		options: [
			{ name: 'Enabled',  value: 'ENABLED' },
			{ name: 'Disabled', value: 'DISABLED' },
		],
		default: '',
		displayOptions: { show: { operation: [DEVICE_METHODS.MODIFY_DEVICE] } },
	},
];
