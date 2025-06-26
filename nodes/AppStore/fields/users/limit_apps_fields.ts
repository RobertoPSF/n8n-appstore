import { NodePropertyTypes } from "n8n-workflow";
import { READ_USER_INFORMATION } from "../../utils/constants";

export let LIMIT_APPS_FIELDS = {
	displayName: 'Limit',
	name: 'limit',
	type: 'number' as NodePropertyTypes,
	required: true,
	typeOptions: {
		maxValue: 50,
		minValue: 1
	},
	default: 50,
	description: 'The maximum number of games to show',
	displayOptions: {
		show: {
			operation: [READ_USER_INFORMATION],
		}
	},
}