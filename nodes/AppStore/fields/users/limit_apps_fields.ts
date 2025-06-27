import { NodePropertyTypes } from "n8n-workflow";
import { USER_METHODS } from "../../utils/constants/methods_constants";

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
			operation: [USER_METHODS.READ_USER_INFORMATION],
		}
	},
}