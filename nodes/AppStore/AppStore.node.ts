import {
	IExecuteFunctions,
	ICredentialDataDecryptedObject,
	NodeConnectionType,
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { 
	MODIFY_USER_ALL_APPS_VISIBLE_SWITCH, 
	MODIFY_USER_PROVISIONING_ALLOWED_SWITCH, 
	MODIFY_USER_ROLES_FIELD, 
	APP_IDS_FIELD, 
	LIST_ALL_APPS_USER_FIELDS_FIELD 
} from './fields/users/modify_user_fields';
import { USER_INVITATIONS_METHODS, USER_METHODS } from './utils/constants/constants';
import { generateAppStoreJwt } from './utils/token_generate';
import { node_modify_user } from './operations/user/modify';
import { node_list_user } from './operations/user/list';
import { node_get_user } from './operations/user/get_by_id';
import { node_list_invitated_users } from './operations/user_invitations/list';
import { node_remove_user } from './operations/user/remove';
import { node_list_user_visible_apps } from './operations/user/list_visible_apps';
import { node_list_user_visible_app_relationships } from './operations/user/list_visible_app_relationships';
import { node_add_user_visible_apps } from './operations/user/add_visible_apps';
import { node_replace_user_visible_apps } from './operations/user/replace_visible_apps';
import { USER_ID_FIELD } from './fields/users/user_get_by_id_fields';
import { INCLUDE_VISIBLE_APPS_FIELD } from './fields/users/include_visible_apps_fields';
import { USERS_FIELDS } from './fields/users/users_fields';
import { APPS_FIELDS } from './fields/users/apps_fields';
import { LIMIT } from './fields/users/limit_field';
import { USERS_OPERATIONS, USER_INVITATIONS_OPERATIONS } from './utils/constants/operations_constants';
import { node_remove_visible_apps } from './operations/user/remove_visible_apps';

interface IAppStoreApiCredentials extends ICredentialDataDecryptedObject {
	issuerId: string;
	keyId: string;
	privateKey: string;
}

export class AppStore implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'AppStore',
		name: 'appStore',
		icon: 'file:appstore.svg',
		group: ['transform'],
		version: 1,
		description: 'Consume AppStore API',
		defaults: {
			name: 'AppStore',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'appStoreApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				options: USERS_OPERATIONS.concat(USER_INVITATIONS_OPERATIONS),
				default: '',
			},
			USER_ID_FIELD,
			MODIFY_USER_ROLES_FIELD,
			MODIFY_USER_ALL_APPS_VISIBLE_SWITCH,
			MODIFY_USER_PROVISIONING_ALLOWED_SWITCH,
			APP_IDS_FIELD,
			LIMIT(200, 'Number of apps to return (max 200)', [USER_METHODS.LIST_ALL_APPS_VISIBLE_TO_A_USER]),
			LIST_ALL_APPS_USER_FIELDS_FIELD,
			INCLUDE_VISIBLE_APPS_FIELD,
			USERS_FIELDS,
			APPS_FIELDS,
			LIMIT(50, 'The maximum number of games to show (max 50)', [USER_METHODS.READ_USER_INFORMATION])
			
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let returnData: IDataObject[] = [];
		const operation = this.getNodeParameter('operation', 0) as string;

		const credentials = (await this.getCredentials('appStoreApi')) as IAppStoreApiCredentials;
		const { issuerId, keyId, privateKey } = credentials;

		const jwtToken = generateAppStoreJwt(issuerId, keyId, privateKey);

		// user
		if (operation === USER_METHODS.LIST_USERS) returnData = await node_list_user(this, jwtToken);
		if (operation === USER_METHODS.READ_USER_INFORMATION) returnData.push(await node_get_user(this, jwtToken));
		if (operation === USER_METHODS.MODIFY_A_USER_ACCOUNT) returnData.push(await node_modify_user(this, jwtToken));
		if (operation === USER_METHODS.REMOVE_A_USER_ACCOUNT) returnData.push(await node_remove_user(this, jwtToken));
		if (operation === USER_METHODS.LIST_ALL_APPS_VISIBLE_TO_A_USER) returnData = await node_list_user_visible_apps(this, jwtToken);
		if (operation === USER_METHODS.GET_ALL_VISIBLE_APP_RESOURCE_IDS_FOR_A_USER) returnData = await node_list_user_visible_app_relationships(this, jwtToken);
		if (operation === USER_METHODS.ADD_VISIBLE_APPS_TO_A_USER) returnData = await node_add_user_visible_apps(this, jwtToken);
		if (operation === USER_METHODS.REPLACE_THE_LIST_OF_VISIBLE_APPS_FOR_A_USER) returnData = await node_replace_user_visible_apps(this, jwtToken);
		if (operation === USER_METHODS.REMOVE_VISIBLE_APPS_FROM_A_USER) returnData = await node_remove_visible_apps(this, jwtToken);

		// user invitations
		if (operation === USER_INVITATIONS_METHODS.LIST_INVITED_USERS) returnData.push(await node_list_invitated_users(this, jwtToken));
		
		return [this.helpers.returnJsonArray(returnData)];
	}
}

