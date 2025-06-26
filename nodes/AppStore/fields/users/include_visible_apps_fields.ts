import { NodePropertyTypes } from "n8n-workflow";
import { READ_USER_INFORMATION } from "../../utils/constants";

export let INCLUDE_VISIBLE_APPS_FIELD = {
    displayName: 'Include visible apps?',
    name: 'allAppsVisible',
    type: 'boolean' as NodePropertyTypes,
    default: false,
    description: 'Should be true if you want to include all visible apps',
    displayOptions: {
        show: {
            operation: [READ_USER_INFORMATION],
        },
    },
};