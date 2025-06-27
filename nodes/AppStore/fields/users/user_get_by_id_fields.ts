import { NodePropertyTypes } from "n8n-workflow";
import {USER_METHODS } from "../../utils/constants/constants";

export let USER_ID_FIELD = {
    displayName: 'User ID',
    name: 'userId',
    type: 'string' as NodePropertyTypes,
    required: true,
    default: '',
    description: 'The ID of the user to retrieve, remove or modify',
    displayOptions: {
        show: {
            operation: [
                USER_METHODS.READ_USER_INFORMATION,
                USER_METHODS.REMOVE_A_USER_ACCOUNT,
                USER_METHODS.MODIFY_A_USER_ACCOUNT,
                'listUserVisibleAppsForUser',
                USER_METHODS.GET_ALL_VISIBLE_APP_RESOURCE_IDS_FOR_A_USER,
                USER_METHODS.ADD_VISIBLE_APPS_TO_A_USER,
                USER_METHODS.REPLACE_THE_LIST_OF_VISIBLE_APPS_FOR_A_USER,
                USER_METHODS.LIST_ALL_APPS_VISIBLE_TO_A_USER,
                USER_METHODS.REMOVE_VISIBLE_APPS_FROM_A_USER
            ],
        },
    },
}