import { NodePropertyTypes } from "n8n-workflow";
import { ADD_VISIBLE_APPS_TO_A_USER, GET_ALL_VISIBLE_APP_RESOURCE_IDS_FOR_A_USER, LIST_ALL_APPS_VISIBLE_TO_A_USER, MODIFY_A_USER_ACCOUNT, READ_USER_INFORMATION, REMOVE_A_USER_ACCOUNT, REPLACE_THE_LIST_OF_VISIBLE_APPS_FOR_A_USER } from "../../utils/constants";

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
                READ_USER_INFORMATION,
                REMOVE_A_USER_ACCOUNT,
                MODIFY_A_USER_ACCOUNT,
                'listUserVisibleAppsForUser',
                GET_ALL_VISIBLE_APP_RESOURCE_IDS_FOR_A_USER,
                ADD_VISIBLE_APPS_TO_A_USER,
                REPLACE_THE_LIST_OF_VISIBLE_APPS_FOR_A_USER,
                LIST_ALL_APPS_VISIBLE_TO_A_USER,
            ],
        },
    },
}