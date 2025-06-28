import { NodePropertyTypes } from 'n8n-workflow';
import { DEVICE_METHODS } from '../../../utils/constants/methods_constants';

export const REGISTER_DEVICE_FIELDS = [
	{
		displayName: 'Device Name',
		name: 'name',
		type: 'string' as NodePropertyTypes,
		required: true,
		default: '',
		description: 'The name of the device',
		displayOptions: {
			show: {
				operation: [DEVICE_METHODS.REGISTER_DEVICE],
			},
		},
	},
	{
		displayName: 'Platform',
		name: 'platform',
		type: 'options' as NodePropertyTypes,
		options: [
			{ name: 'iOS', value: 'IOS' },
			{ name: 'macOS', value: 'MAC_OS' },
			{ name: 'Universal', value: 'UNIVERSAL' },
		],
		required: true,
		default: 'IOS',
		description: 'The platform of the device',
		displayOptions: {
			show: {
				operation: [DEVICE_METHODS.REGISTER_DEVICE],
			},
		},
	},
	{
		displayName: 'UDID',
		name: 'udid',
		type: 'string' as NodePropertyTypes,
		required: true,
		default: '',
		description: 'The UDID of the device',
		displayOptions: {
			show: {
				operation: [DEVICE_METHODS.REGISTER_DEVICE],
			},
		},
	},
];