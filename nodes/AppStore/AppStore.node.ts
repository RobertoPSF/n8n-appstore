import {
	IExecuteFunctions,
	ICredentialDataDecryptedObject,
	NodeConnectionType,
} from 'n8n-workflow';

import { generateAppStoreJwt } from './utils/token_generate';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { node_modify_user } from './operations/user/modify';
import { node_list_user } from './operations/user/list';
import { node_get_user } from './operations/user/getById';
import { node_list_invitated_users } from './operations/user_invitations/list';
import { node_remove_user } from './operations/user/remove';
import { node_list_user_visible_apps } from './operations/user/list_visible_apps';
import { node_list_user_visible_app_relationships } from './operations/user/list_visible_app_relationships';
import { node_add_user_visible_apps } from './operations/user/add_visible_apps';
import { node_replace_user_visible_apps } from './operations/user/replace_visible_apps';
import { MODIFY_USER_ALL_APPS_VISIBLE_SWITCH, 
	MODIFY_USER_PROVISIONING_ALLOWED_SWITCH, 
	MODIFY_USER_ROLES_FIELD, 
	MODIFY_USER_VISIBLE_APP_IDS, 
	ADD_USER_VISIBLE_APP_IDS, 
	REPLACE_USER_VISIBLE_APP_IDS, 
	LIST_ALL_APPS_USER_LIMIT_FIELD, 
	LIST_ALL_APPS_USER_FIELDS_FIELD } from './fields/users/modify_user_fields';
import { USER_ID_FIELD } from './fields/users/user_get_by_id_fields';

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
						value: 'listUsers',
						description: 'Get a list of users',
					},
					{
						name: 'Get User by ID',
						value: 'getUserById',
						description: 'Get a user by their ID',
					},
					{
						name: 'Modify User',
						value: 'modifyUser',
						description: 'Modify a user account',
					},
					{
						name: 'Remove User',
						value: 'removeUser',
						description: 'Remove a user account',
					},
					{
						name: 'List Visible Apps for User',
						value: 'listVisibleAppsForUser',
						description: 'Get a list of apps that a user can view',
					},
					{
						name: 'List Invitated Users',
						value: 'listInvitatedUsers',
						description: 'Get a list of invitated users'
					},
					{
						name: 'List User Visible App Relationships',
						value: 'listUserVisibleAppRelationships',
						description: 'Get all visible app resource IDs for a user',
					},
					{
						name: 'Add User Visible Apps',
						value: 'addUserVisibleApps',
						description: 'Add visible apps to a user',
					},
					{
						name: 'Replace User Visible Apps',
						value: 'replaceUserVisibleApps',
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
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let returnData: IDataObject[] = [];
		const operation = this.getNodeParameter('operation', 0) as string;

		const credentials = (await this.getCredentials('appStoreApi')) as IAppStoreApiCredentials;
		const { issuerId, keyId, privateKey } = credentials;

		const jwtToken = generateAppStoreJwt(issuerId, keyId, privateKey);

		if (operation === 'listUsers') returnData = await node_list_user(this, jwtToken);
		if (operation === 'getUserById') returnData.push(await node_get_user(this, jwtToken));
		if (operation === 'modifyUser') returnData.push(await node_modify_user(this, jwtToken));
		if (operation === 'listInvitatedUsers') returnData.push(await node_list_invitated_users(this, jwtToken));
		if (operation === 'removeUser') returnData.push(await node_remove_user(this, jwtToken));
		if (operation === 'listVisibleAppsForUser') returnData = await node_list_user_visible_apps(this, jwtToken);
		if (operation === 'listUserVisibleAppRelationships') returnData = await node_list_user_visible_app_relationships(this, jwtToken);
		if (operation === 'addUserVisibleApps') returnData = await node_add_user_visible_apps(this, jwtToken);
		if (operation === 'replaceUserVisibleApps') returnData = await node_replace_user_visible_apps(this, jwtToken);

		
		return [this.helpers.returnJsonArray(returnData)];
	}
}

