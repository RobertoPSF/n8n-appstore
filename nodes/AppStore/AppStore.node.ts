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
import { node_list_users_invitations } from './operations/user_invitations/list';
import { node_remove_user } from './operations/user/remove';
import { MODIFY_USER_ALL_APPS_VISIBLE_SWITCH, MODIFY_USER_PROVISIONING_ALLOWED_SWITCH, MODIFY_USER_ROLES_FIELD, MODIFY_USER_VISIBLE_APP_IDS } from './fields/users/modify_user_fields';
import { ID_FIELD } from './fields/users/user_get_by_id_fields';
import { node_get_user_invitation } from './operations/user_invitations/getById';

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
						name: 'List Users Invitations',
						value: 'listUsersInvitations',
						description: 'get a list of users invitations'
					},
					{
						name: 'Get User Invitation By Id',
						value: 'getUserInvitationById',
						description: 'get a user invitation by id'
					},
					{
						name: 'Remove User',
						value: 'removeUser',
						description: 'Remove a user account',
					}
				],
				default: '',
			},
			ID_FIELD,
			MODIFY_USER_ROLES_FIELD,
			MODIFY_USER_ALL_APPS_VISIBLE_SWITCH,
			MODIFY_USER_PROVISIONING_ALLOWED_SWITCH,
			MODIFY_USER_VISIBLE_APP_IDS
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
		if (operation === 'listUsersInvitations') returnData.push(await node_list_users_invitations(this, jwtToken));
		if (operation === 'getUserInvitationById') returnData.push(await node_get_user_invitation(this, jwtToken));
		if (operation === 'removeUser') returnData.push(await node_remove_user(this, jwtToken));
		
		return [this.helpers.returnJsonArray(returnData)];
	}
}

