import { NodePropertyTypes } from "n8n-workflow";

export let LIMIT = (max: number, description: string, where_to_show: string[]) => {
	return {
		displayName: 'Limit',
		name: 'limit',
		type: 'number' as NodePropertyTypes,
		required: true,
		typeOptions: {
			maxValue: max,
			minValue: 1
		},
		default: 1,
		description: description,
		displayOptions: {
			show: {
				operation: where_to_show,
			}
		}
	}
};