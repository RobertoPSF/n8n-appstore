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

import {
	SANDBOX_TESTERS_METHODS,
	PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS,
	USER_INVITATIONS_METHODS,
	USER_METHODS
} from './utils/constants/methods_constants';

import { generateAppStoreJwt } from './utils/token_generate';
import { node_modify_user } from './operations/user/modify';
import { node_list_user } from './operations/user/list';
import { node_get_user } from './operations/user/get_by_id';
import { node_list_invited_users } from './operations/user_invitations/list';
import { node_get_user_invitation } from './operations/user_invitations/getById';
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
import { PROVISIONING_BUNDLE_ID_CAPABILITIES_OPERATIONS, SANDBOX_TESTERS_OPERATIONS, USERS_OPERATIONS, USER_INVITATIONS_OPERATIONS } from './utils/constants/operations_constants';
import { node_remove_visible_apps } from './operations/user/remove_visible_apps';
import { disable_a_bundle_id_capability } from './provisioning/bundle_id_capabilities/disable_a_capability';
import { node_list_sandbox_testers } from './operations/sandbox_testers/list';
import { CAPABILITY_ID_FIELD, ENABLE_CAPABILITY_BUNDLE_ID_REL_FIELD, CAPABILITY_SETTINGS_FIELD, CAPABILITY_TYPE_FIELD } from './fields/provisioning/bundle_id_capabilities_fields';
import { enable_a_bundle_id_capability } from './provisioning/bundle_id_capabilities/enable_a_capability';
import { modify_a_bundle_id_capability } from './provisioning/bundle_id_capabilities/modify_a_capability';
import { TERRITORY_FIELD } from './fields/sandbox_testers/territory';
import { SANDBOX_USER_ID_FIELD } from './fields/sandbox_testers/sandbox_tester_id_field';
import { SUBSCRIPTION_RENEWAL_RATE_FIELD } from './fields/sandbox_testers/subscription_renewal_rate_field';
import { INTERRUPTED_PURCHASE_FIELD } from './fields/sandbox_testers/interrupted_purchase_field';
import { node_modify_sandbox_tester } from './operations/sandbox_testers/modify';
import { node_clear_sandbox_tester_history } from './operations/sandbox_testers/clear_history';
import { list_visible_apps_invited_user } from './operations/user_invitations/list_visible_apps_invited_user';
import { INVITATION_ID_FIELD } from './fields/user_invitations/invitation_get_by_id_fields';
import { INVITE_USER_ALL_APPS_VISIBLE_SWITCH, INVITE_USER_EMAIL_FIELD, INVITE_USER_FIRST_NAME_FIELD, INVITE_USER_LAST_NAME_FIELD, INVITE_USER_PROVISIONING_ALLOWED_SWITCH } from './fields/user_invitations/invite_user_fields';
import { node_invite_user } from './operations/user_invitations/invite';
import { node_list_visible_apps_relationship } from './operations/user_invitations/list_visible_apps_relationship';

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
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
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
			  displayName: 'Resource',
			  name: 'resource',
			  type: 'options',
					noDataExpression: true,
			  options: [
				{ name: 'Users', value: 'users' },
				{ name: 'User Invitations', value: 'userInvitations' },
				{ name: 'Sandbox Tester', value: 'sandboxTesters' },
				{ name: 'Bundle ID Capabilities', value: 'bundleIdCapabilities' },
			  ],
			  default: 'users',
			},
			{
			  displayName: 'Operation',
			  name: 'operation',
			  type: 'options',
					noDataExpression: true,
			  displayOptions: {
				show: { resource: ['users'] },
			  },
			  options: USERS_OPERATIONS,
			  default: '',
			  typeOptions: {
				groups: [{ name: 'Users' }],
			  },
			},
			{
			  displayName: 'Operation',
			  name: 'operation',
			  type: 'options',
					noDataExpression: true,
			  displayOptions: {
				show: { resource: ['userInvitations'] },
			  },
			  options: USER_INVITATIONS_OPERATIONS,
			  default: '',
			  typeOptions: {
				groups: [{ name: 'User Invitations' }],
			  },
			},
			{
			  displayName: 'Operation',
			  name: 'operation',
			  type: 'options',
					noDataExpression: true,
			  displayOptions: {
				show: { resource: ['sandboxTesters'] },
			  },
			  options: SANDBOX_TESTERS_OPERATIONS,
			  default: '',
			  typeOptions: {
				groups: [{ name: 'Sandbox Testers' }],
			  },
			},
			{
			  displayName: 'Operation',
			  name: 'operation',
			  type: 'options',
					noDataExpression: true,
			  displayOptions: {
				show: { resource: ['bundleIdCapabilities'] },
			  },
			  options: PROVISIONING_BUNDLE_ID_CAPABILITIES_OPERATIONS,
			  default: '',
			  typeOptions: {
				groups: [{ name: 'Bundle ID Capabilities' }],
			  },
			},
			USER_ID_FIELD,
			MODIFY_USER_ROLES_FIELD,
			MODIFY_USER_ALL_APPS_VISIBLE_SWITCH,
			MODIFY_USER_PROVISIONING_ALLOWED_SWITCH,
			APP_IDS_FIELD,
			LIMIT(200, 'Number of apps to return (max 200)', [USER_METHODS.LIST_ALL_APPS_VISIBLE_TO_A_USER]),
			LIMIT(100, 'Limit of apps to fetch',[USER_INVITATIONS_METHODS.LIST_ALL_APPS_VISIBLE_TO_AN_INVITED_USER]),
			LIMIT(200, 'Maximum number of app relationships to return (max 200)', [USER_INVITATIONS_METHODS.LIST_VISIBLE_APP_RELATIONSHIPS_FOR_INVITED_USER]),
			LIST_ALL_APPS_USER_FIELDS_FIELD,

			// GET_USER_BY_ID
			INCLUDE_VISIBLE_APPS_FIELD,
			USERS_FIELDS,
			APPS_FIELDS,
			LIMIT(50, 'The maximum number of games to show (max 50)', [USER_METHODS.READ_USER_INFORMATION]),
			CAPABILITY_ID_FIELD,
			LIMIT(200, 'The maximum number of sandbox testers to show (max 200)', [SANDBOX_TESTERS_METHODS.LIST_SANDBOX_TESTERS]),
			ENABLE_CAPABILITY_BUNDLE_ID_REL_FIELD,
			CAPABILITY_TYPE_FIELD,
			CAPABILITY_SETTINGS_FIELD,
			SUBSCRIPTION_RENEWAL_RATE_FIELD,
			TERRITORY_FIELD,
			SANDBOX_USER_ID_FIELD,
			INTERRUPTED_PURCHASE_FIELD,
			INVITATION_ID_FIELD,
			INVITE_USER_EMAIL_FIELD,
			INVITE_USER_FIRST_NAME_FIELD,
			INVITE_USER_LAST_NAME_FIELD,
			INVITE_USER_ALL_APPS_VISIBLE_SWITCH,
			INVITE_USER_PROVISIONING_ALLOWED_SWITCH
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
		if (operation === USER_INVITATIONS_METHODS.LIST_INVITED_USERS) returnData.push(await node_list_invited_users(this, jwtToken));
		if (operation === USER_INVITATIONS_METHODS.READ_USER_INVITATION_INFORMATION) returnData.push(await node_get_user_invitation(this, jwtToken));
		if (operation === USER_INVITATIONS_METHODS.INVITE_A_USER) returnData.push(await node_invite_user(this, jwtToken));
		if (operation === USER_INVITATIONS_METHODS.LIST_ALL_APPS_VISIBLE_TO_AN_INVITED_USER) returnData = await list_visible_apps_invited_user(this, jwtToken);
		if (operation === USER_INVITATIONS_METHODS.LIST_VISIBLE_APP_RELATIONSHIPS_FOR_INVITED_USER) returnData = await node_list_visible_apps_relationship(this, jwtToken);

		// sandbox testers
		if (operation === SANDBOX_TESTERS_METHODS.LIST_SANDBOX_TESTERS) returnData = await node_list_sandbox_testers(this, jwtToken);
		if (operation === SANDBOX_TESTERS_METHODS.MODIFY_A_SANDBOX_TESTER) returnData.push(await node_modify_sandbox_tester(this, jwtToken));
		if (operation === SANDBOX_TESTERS_METHODS.CLEAR_PURCHASE_HISTORY_FOR_A_SANDBOX_TESTER) returnData.push(await node_clear_sandbox_tester_history(this, jwtToken));

		// provisioning bundle id capabilities
		if (operation === PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.DISABLE_CAPABILITY) returnData.push(await disable_a_bundle_id_capability(this, jwtToken));
		if (operation === PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.ENABLE_CAPABILITY) returnData.push(await enable_a_bundle_id_capability(this, jwtToken));
		if (operation === PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.MODIFY_CAPABILITY) returnData.push(await modify_a_bundle_id_capability(this, jwtToken));

		return [this.helpers.returnJsonArray(returnData)];
	}
}
