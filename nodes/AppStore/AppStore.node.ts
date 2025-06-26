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
	MODIFY_USER_VISIBLE_APP_IDS, 
	ADD_USER_VISIBLE_APP_IDS, 
	REPLACE_USER_VISIBLE_APP_IDS, 
	LIST_ALL_APPS_USER_LIMIT_FIELD, 
	LIST_ALL_APPS_USER_FIELDS_FIELD 
} from './fields/users/modify_user_fields';
import { 
	ADD_VISIBLE_APPS_TO_A_USER, 
	GET_ALL_VISIBLE_APP_RESOURCE_IDS_FOR_A_USER, 
	LIST_ALL_APPS_VISIBLE_TO_A_USER, 
	LIST_INVITED_USERS, 
	LIST_USERS, 
	MODIFY_A_USER_ACCOUNT, 
	READ_USER_INFORMATION, 
	REMOVE_A_USER_ACCOUNT,
	REPLACE_THE_LIST_OF_VISIBLE_APPS_FOR_A_USER
} from './utils/constants';
import { generateAppStoreJwt } from './utils/token_generate';
import { node_modify_user } from './operations/user/modify';
import { node_list_user } from './operations/user/list';
import { node_get_user } from './operations/user/getById';
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
import { LIMIT_APPS_FIELDS } from './fields/users/limit_apps_fields';

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
				options: [
					{
						name: 'List Users',
						value: LIST_USERS,
						description: 'Get a list of users',
					},
					{
						name: 'Read User Information',
						value: READ_USER_INFORMATION,
						description: 'Get a user by their Id',
					},
					{
						name: 'Modify a User Account',
						value: MODIFY_A_USER_ACCOUNT,
						description: 'Modify a user account',
					},
					{
						name: 'Remove a User Account',
						value: REMOVE_A_USER_ACCOUNT,
						description: 'Remove a user account',
					},
					{
						name: 'List Visible Apps for User',
						value: LIST_ALL_APPS_VISIBLE_TO_A_USER,
						description: 'Get a list of apps that a user can view',
					},
					{
						name: 'List Invitated Users',
						value: LIST_INVITED_USERS,
						description: 'Get a list of invitated users'
					},
					{
						name: 'Get All Visible App Resource Ids for a User',
						value: GET_ALL_VISIBLE_APP_RESOURCE_IDS_FOR_A_USER,
						description: 'Get all visible app resource Ids for a user',
					},
					{
						name: 'Add User Visible Apps',
						value: ADD_VISIBLE_APPS_TO_A_USER,
						description: 'Add visible apps to a user',
					},
					{
						name: 'Replace User Visible Apps',
						value: REPLACE_THE_LIST_OF_VISIBLE_APPS_FOR_A_USER,
						description: 'Replace the list of visible apps for a user',

					},
				],
				default: '',
			},
			USER_ID_FIELD,
			MODIFY_USER_ROLES_FIELD,
			MODIFY_USER_ALL_APPS_VISIBLE_SWITCH,
			MODIFY_USER_PROVISIONING_ALLOWED_SWITCH,
			MODIFY_USER_VISIBLE_APP_IDS,
			ADD_USER_VISIBLE_APP_IDS,
			REPLACE_USER_VISIBLE_APP_IDS,
			LIST_ALL_APPS_USER_LIMIT_FIELD,
			LIST_ALL_APPS_USER_FIELDS_FIELD,
			
			// GET_USER_BY_ID
			INCLUDE_VISIBLE_APPS_FIELD,
			USERS_FIELDS,
			APPS_FIELDS,
			LIMIT_APPS_FIELDS

		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let returnData: IDataObject[] = [];
		const operation = this.getNodeParameter('operation', 0) as string;

		const credentials = (await this.getCredentials('appStoreApi')) as IAppStoreApiCredentials;
		const { issuerId, keyId, privateKey } = credentials;

		const jwtToken = generateAppStoreJwt(issuerId, keyId, privateKey);

		// user
		if (operation === LIST_USERS) returnData = await node_list_user(this, jwtToken);
		if (operation === READ_USER_INFORMATION) returnData.push(await node_get_user(this, jwtToken));
		if (operation === MODIFY_A_USER_ACCOUNT) returnData.push(await node_modify_user(this, jwtToken));
		if (operation === REMOVE_A_USER_ACCOUNT) returnData.push(await node_remove_user(this, jwtToken));
		if (operation === LIST_ALL_APPS_VISIBLE_TO_A_USER) returnData = await node_list_user_visible_apps(this, jwtToken);
		if (operation === GET_ALL_VISIBLE_APP_RESOURCE_IDS_FOR_A_USER) returnData = await node_list_user_visible_app_relationships(this, jwtToken);
		if (operation === ADD_VISIBLE_APPS_TO_A_USER) returnData = await node_add_user_visible_apps(this, jwtToken);
		if (operation === REPLACE_THE_LIST_OF_VISIBLE_APPS_FOR_A_USER) returnData = await node_replace_user_visible_apps(this, jwtToken);
		
		// user invitations
		if (operation === LIST_INVITED_USERS) returnData.push(await node_list_invitated_users(this, jwtToken));
		
		return [this.helpers.returnJsonArray(returnData)];
	}
}

