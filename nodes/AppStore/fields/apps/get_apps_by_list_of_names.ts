import { NodePropertyTypes } from "n8n-workflow";
import { APP_METHODS } from "../../utils/constants/methods_constants";


export let APP_NAMES_FIELD = {
    displayName: 'App Names',
    name: 'appNames',
    type: 'string' as NodePropertyTypes,
    required: true,
    default: '',
    description: 'The list of app names to retrieve',
    displayOptions: {
        show: {
            operation: [
                APP_METHODS.GET_APPS_BY_LIST_OF_NAMES,
            ],
        },
    },
}
