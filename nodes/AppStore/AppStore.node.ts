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
	SANDBOX_TESTERS_METHODS,
	PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS,
	USER_INVITATIONS_METHODS,
	USER_METHODS,
	PROVISIONING_BUNDLE_ID_METHODS,
	PROVISIONING_CERTIFICATES_METHODS,
	PROVISIONING_PROFILES_METHODS,
	PROVISIONING_MERCHANT_IDS_METHODS,
	PROVISIONING_PASSTYPE_IDS_METHODS,
} from './utils/constants/methods_constants';


import { node_get_pass_type_relation } from './operations/provisioning/passtype_id/get_relation';
import { node_list_all_pass_type_ids } from './operations/provisioning/passtype_id/list_pass_type_id';
import { node_list_pass_type_ids_by_cert } from './operations/provisioning/passtype_id/list';
import { node_modify_device } from './operations/provisioning/devices/modify';
import { node_register_device } from './operations/provisioning/devices/register';
import { node_list_devices } from './operations/provisioning/devices/list';
import { node_get_device_by_id } from './operations/provisioning/devices/get_by_id';
import { DEVICE_METHODS } from './utils/constants/methods_constants';
import { DEVICES_OPERATIONS, PROVISIONING_MERCHANT_IDS_OPERATIONS, PROVISIONING_PASSTYPE_IDS_OPERATIONS, PROVISIONING_PROFILES_OPERATIONS } from './utils/constants/operations_constants';
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
import { PROVISIONING_BUNDLE_ID_CAPABILITIES_OPERATIONS, PROVISIONING_BUNDLE_ID_OPERATIONS, PROVISIONING_CERTIFICATES_OPERATIONS, SANDBOX_TESTERS_OPERATIONS, USERS_OPERATIONS, USER_INVITATIONS_OPERATIONS } from './utils/constants/operations_constants';
import { node_remove_visible_apps } from './operations/user/remove_visible_apps';
import { node_list_sandbox_testers } from './operations/sandbox_testers/list';
import { node_modify_sandbox_tester } from './operations/sandbox_testers/modify';
import { node_clear_sandbox_tester_history } from './operations/sandbox_testers/clear_history';
import { list_visible_apps_invited_user } from './operations/user_invitations/list_visible_apps_invited_user';
import { node_invite_user } from './operations/user_invitations/invite';
import { node_list_visible_apps_relationship } from './operations/user_invitations/list_visible_apps_relationship';
import { disable_a_bundle_id_capability } from './operations/provisioning/bundle_id_capabilities/disable_a_capability';
import { enable_a_bundle_id_capability } from './operations/provisioning/bundle_id_capabilities/enable_a_capability';
import { modify_a_bundle_id_capability } from './operations/provisioning/bundle_id_capabilities/modify_a_capability';
import { node_cancel_user_invitation } from './operations/user_invitations/cancel_invitation';
import { node_register_a_bundle_id } from './operations/provisioning/bundle_id/register_a_bundle_id';
import { node_read_bundle_id_information } from './operations/provisioning/bundle_id/read_bundle_id_information';
import { node_delete_bundle_id } from './operations/provisioning/bundle_id/delete_bundle_id';
import { node_list_bundle_ids } from './operations/provisioning/bundle_id/list_bundle_ids';
import { node_list_capabilities_of_a_bundle_id } from './operations/provisioning/bundle_id/list_capabilities_of_a_bundle_id';
import { node_get_bundle_id_relations_with_apps } from './operations/provisioning/bundle_id/get_bundle_id_relations_with_apps';
import { node_get_bundle_id_bundle_capabilities_relation } from './operations/provisioning/bundle_id/get_bundle_id_bundle_capabilities_relation';
import { node_get_bundle_id_relationship_profile } from './operations/provisioning/bundle_id/get_bundle_id_relationship_profile';
import { node_list_certificates } from './operations/provisioning/certificates/list_certificates';
import { node_read_certificate_information } from './operations/provisioning/certificates/read_certificate_information';
import { ALL_FIELDS } from './fields/all_fields';
import { node_list_passtype_ids_for_a_certificate } from './operations/provisioning/certificates/list_passtype_id_for_a_certificate';
import { node_get_passtype_id_for_certificate_relation } from './operations/provisioning/certificates/get_passtype_id_for_certificate_relation';
import { node_revoke_certificate } from './operations/provisioning/certificates/revoke_certificate';
import { node_list_and_download_profiles } from './operations/provisioning/profiles/list_and_download_profiles';
import { node_read_and_download_profile_info } from './operations/provisioning/profiles/read_and_download_profile_info';
import { node_read_bundleid_of_profile } from './operations/provisioning/profiles/read_bundleid_of_profile';
import { node_get_profile_bundleid_relation } from './operations/provisioning/profiles/get_profile_bundleid_relation';
import { node_create_profile } from './operations/provisioning/profiles/create';
import { node_list_profile_certificates } from './operations/provisioning/profiles/list_profile_certificates';
import { node_get_profile_certificate_relationship } from './operations/provisioning/profiles/get_profile_certificate_relationship';
import { node_list_profile_devices } from './operations/provisioning/profiles/list_profile_devices';
import { node_get_profile_devices_relationship } from './operations/provisioning/profiles/get_profile_devices_relationship';
import { node_list_certificates_relationships_for_merchant_id } from './operations/provisioning/merchant_id/list_certificates_relationships_for_merchant_id';
import { node_list_certificates_for_merchant_id } from './operations/provisioning/merchant_id/list_certificates_for_merchant_id';
import { node_delete_merchant_id } from './operations/provisioning/merchant_id/delete_merchant_id';
import { node_read_merchant_id_details } from './operations/provisioning/merchant_id/read_merchant_id_details';
import { node_list_merchant_id } from './operations/provisioning/merchant_id/list_merchant_id';
import { node_read_passtype_id_information } from './operations/provisioning/passtype_id/read_passtype_id_information';
import { node_list_all_certificates_for_passtype_id } from './operations/provisioning/passtype_id/list_all_certificates_for_passtype_id';
import { node_get_certificates_relationships_for_passtype_ids } from './operations/provisioning/passtype_id/get_certificates_relationships_for_passtype_ids';
import { node_delete_passtype_id } from './operations/provisioning/passtype_id/delete_passtype_id';
import { node_modify_bundle_id } from './operations/provisioning/bundle_id/modify_a_bundle_id';
import { node_create_certificate } from './operations/provisioning/certificates/create';
import { node_modify_certificate } from './operations/provisioning/certificates/modify';

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
				{ name: 'Bundle ID', value: 'bundleId' },
				{ name: 'Bundle ID Capabilities', value: 'bundleIdCapabilities' },
				{ name: 'Certificates', value: 'certificates' },
				{ name: 'Devices', value: 'devices' },
				{ name: 'Merchant IDs', value: 'merchantIds' },
				{ name: 'Pass Type IDs', value: 'passTypeIds' },
				{ name: 'Profiles', value: 'profiles' },
				{ name: 'Sandbox Tester', value: 'sandboxTesters' },
				{ name: 'User Invitations', value: 'userInvitations' },
				{ name: 'Users', value: 'users' },
			  ],
			  default: 'users',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: { resource: ['devices'] },
				},
				options: DEVICES_OPERATIONS,
				default: '',
				typeOptions: {
					groups: [{ name: 'Devices' }],
				},
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
			{
			  displayName: 'Operation',
			  name: 'operation',
			  type: 'options',
					noDataExpression: true,
			  displayOptions: {
				show: { resource: ['bundleId'] },
			  },
			  options: PROVISIONING_BUNDLE_ID_OPERATIONS,
			  default: '',
			  typeOptions: {
				groups: [{ name: 'Bundle ID' }],
			  },
			},
			{
			  displayName: 'Operation',
			  name: 'operation',
			  type: 'options',
					noDataExpression: true,
			  displayOptions: {
				show: { resource: ['certificates'] },
			  },
			  options: PROVISIONING_CERTIFICATES_OPERATIONS,
			  default: '',
			  typeOptions: {
				groups: [{ name: 'Certificates' }],
			  },
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
					  noDataExpression: true,
				displayOptions: {
				  show: { resource: ['profiles'] },
				},
				options: PROVISIONING_PROFILES_OPERATIONS,
				default: '',
				typeOptions: {
				  groups: [{ name: 'Profiles' }],
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
					noDataExpression: true,
				displayOptions: {
					show: { resource: ['merchantIds'] },
				},
				options: PROVISIONING_MERCHANT_IDS_OPERATIONS,
				default: '',
				typeOptions: {
					groups: [{ name: 'Merchant IDs' }],
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
					noDataExpression: true,
				displayOptions: {
					show: { resource: ['passTypeIds'] },
				},
				options: PROVISIONING_PASSTYPE_IDS_OPERATIONS,
				default: '',
				typeOptions: {
					groups: [{ name: 'Pass Type IDs' }],
				},
			},
			...ALL_FIELDS
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
		if (operation === USER_INVITATIONS_METHODS.CANCEL_USER_INVITATION) returnData.push(await node_cancel_user_invitation(this, jwtToken));

		// sandbox testers
		if (operation === SANDBOX_TESTERS_METHODS.LIST_SANDBOX_TESTERS) returnData = await node_list_sandbox_testers(this, jwtToken);
		if (operation === SANDBOX_TESTERS_METHODS.MODIFY_A_SANDBOX_TESTER) returnData.push(await node_modify_sandbox_tester(this, jwtToken));
		if (operation === SANDBOX_TESTERS_METHODS.CLEAR_PURCHASE_HISTORY_FOR_A_SANDBOX_TESTER) returnData.push(await node_clear_sandbox_tester_history(this, jwtToken));

		// provisioning bundle id capabilities
		if (operation === PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.DISABLE_CAPABILITY) returnData.push(await disable_a_bundle_id_capability(this, jwtToken));
		if (operation === PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.ENABLE_CAPABILITY) returnData.push(await enable_a_bundle_id_capability(this, jwtToken));
		if (operation === PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.MODIFY_CAPABILITY) returnData.push(await modify_a_bundle_id_capability(this, jwtToken));

		// provisioning bundle id
		if (operation === PROVISIONING_BUNDLE_ID_METHODS.LIST_BUNDLE_IDS) returnData = await node_list_bundle_ids(this, jwtToken);
		if (operation === PROVISIONING_BUNDLE_ID_METHODS.REGISTER_NEW_BUNDLE_ID) returnData.push(await node_register_a_bundle_id(this, jwtToken));
		if (operation === PROVISIONING_BUNDLE_ID_METHODS.READ_BUNDLE_ID_INFORMATION) returnData.push(await node_read_bundle_id_information(this, jwtToken));
		if (operation === PROVISIONING_BUNDLE_ID_METHODS.DELETE_BUNDLE_ID) returnData.push(await node_delete_bundle_id(this, jwtToken));
		if (operation === PROVISIONING_BUNDLE_ID_METHODS.MODIFY_BUNDLE_ID) returnData.push(await node_modify_bundle_id(this, jwtToken));

		if (operation === PROVISIONING_BUNDLE_ID_METHODS.LIST_ALL_CAPABILITIES_FOR_BUNDLE_ID) returnData = await node_list_capabilities_of_a_bundle_id(this, jwtToken);
		if (operation === PROVISIONING_BUNDLE_ID_METHODS.GET_BUNDLEID_APP_RELATIONSHIP) returnData = await node_get_bundle_id_relations_with_apps(this, jwtToken);
		if (operation === PROVISIONING_BUNDLE_ID_METHODS.GET_BUNDLEID_CAPABILITIES_RELATIONSHIP) returnData = await node_get_bundle_id_bundle_capabilities_relation(this, jwtToken);
		if (operation === PROVISIONING_BUNDLE_ID_METHODS.GET_BUNDLEID_PROFILES_RELATIONSHIP) returnData = await node_get_bundle_id_relationship_profile(this, jwtToken);

		// provisioning certificates
		if (operation === PROVISIONING_CERTIFICATES_METHODS.CREATE_CERTIFICATE) returnData = await node_create_certificate(this, jwtToken);
		if (operation === PROVISIONING_CERTIFICATES_METHODS.MODIFY_CERTIFICATE) returnData = await node_modify_certificate(this, jwtToken);
		if (operation === PROVISIONING_CERTIFICATES_METHODS.LIST_AND_DOWNLOAD_CERTIFICATES) returnData = await node_list_certificates(this, jwtToken);
		if (operation === PROVISIONING_CERTIFICATES_METHODS.READ_AND_DOWNLOAD_CERTIFICATE_INFORMATION) returnData.push(await node_read_certificate_information(this, jwtToken));
		if (operation === PROVISIONING_CERTIFICATES_METHODS.LIST_PASSTYPEID_IDS_FOR_CERTIFICATE) returnData = await node_list_passtype_ids_for_a_certificate(this, jwtToken);
		if (operation === PROVISIONING_CERTIFICATES_METHODS.GET_CERTIFICATE_PASSTYPEID_RELATIONSHIP) returnData = await node_get_passtype_id_for_certificate_relation(this, jwtToken);
		if (operation === PROVISIONING_CERTIFICATES_METHODS.REVOKE_CERTIFICATE) returnData.push(await node_revoke_certificate(this, jwtToken));

		// device
		if (operation === DEVICE_METHODS.REGISTER_DEVICE) returnData.push(await node_register_device(this, jwtToken));
		if (operation === DEVICE_METHODS.LIST_DEVICES)    returnData       = await node_list_devices(this, jwtToken);
		if (operation === DEVICE_METHODS.READ_DEVICE) returnData.push(await node_get_device_by_id(this, jwtToken));
		if (operation === DEVICE_METHODS.MODIFY_DEVICE) {returnData.push(await node_modify_device(this, jwtToken));}


		// profiles
		if (operation === PROVISIONING_PROFILES_METHODS.LIST_AND_DOWNLOAD_PROFILES) returnData = await node_list_and_download_profiles(this, jwtToken);
		if (operation === PROVISIONING_PROFILES_METHODS.READ_AND_DOWNLOAD_PROFILE_INFORMATION) returnData.push(await node_read_and_download_profile_info(this, jwtToken));
		if (operation === PROVISIONING_PROFILES_METHODS.READ_BUNDLE_ID_IN_PROFILE) returnData.push(await node_read_bundleid_of_profile(this, jwtToken));
		if (operation === PROVISIONING_PROFILES_METHODS.GET_PROFILE_BUNDLEID_RELATIONSHIP) returnData.push(await node_get_profile_bundleid_relation(this, jwtToken));

		if (operation === PROVISIONING_PROFILES_METHODS.CREATE_PROFILE) returnData.push(await node_create_profile(this, jwtToken));
		if (operation === PROVISIONING_PROFILES_METHODS.LIST_PROFILE_CERTIFICATES) returnData = await node_list_profile_certificates(this, jwtToken);
		if (operation === PROVISIONING_PROFILES_METHODS.GET_PROFILE_CERTIFICATES_RELATIONSHIP) returnData = await node_get_profile_certificate_relationship(this, jwtToken);
		if (operation === PROVISIONING_PROFILES_METHODS.LIST_PROFILE_DEVICES) returnData = await node_list_profile_devices(this, jwtToken);
		if (operation === PROVISIONING_PROFILES_METHODS.GET_PROFILE_DEVICES_RELATIONSHIP) returnData = await node_get_profile_devices_relationship(this, jwtToken);

		// merchant id
		if (operation === PROVISIONING_MERCHANT_IDS_METHODS.LIST_MERCHANT_IDS) returnData = await node_list_merchant_id(this, jwtToken);
		if (operation === PROVISIONING_MERCHANT_IDS_METHODS.READ_MERCHANT_ID_DETAILS) returnData.push(await node_read_merchant_id_details(this, jwtToken));
		if (operation === PROVISIONING_MERCHANT_IDS_METHODS.DELETE_MERCHANT_ID) returnData.push(await node_delete_merchant_id(this, jwtToken));
		if (operation === PROVISIONING_MERCHANT_IDS_METHODS.LIST_CERTIFICATES_FOR_MERCHANT_ID) returnData = await node_list_certificates_for_merchant_id(this, jwtToken);
		if (operation === PROVISIONING_MERCHANT_IDS_METHODS.GET_MERCHANTID_CERTIFICATES_RELATIONSHIP) returnData = await node_list_certificates_relationships_for_merchant_id(this, jwtToken);

		// pass type id
		if (operation === PROVISIONING_PASSTYPE_IDS_METHODS.READ_PASSTYPEID_INFORMATION) returnData.push(await node_read_passtype_id_information(this, jwtToken));
		if (operation === PROVISIONING_PASSTYPE_IDS_METHODS.DELETE_PASSTYPEID) returnData.push(await node_delete_passtype_id(this, jwtToken));
		if (operation === PROVISIONING_PASSTYPE_IDS_METHODS.LIST_CERTIFICATES_FOR_PASSTYPEID) returnData = await node_list_all_certificates_for_passtype_id(this, jwtToken);
		if (operation === PROVISIONING_PASSTYPE_IDS_METHODS.GET_PASSTYPEID_CERTIFICATES_RELATIONSHIP) returnData = await node_get_certificates_relationships_for_passtype_ids(this, jwtToken);
		if (operation === PROVISIONING_PASSTYPE_IDS_METHODS.LIST_BY_CERT) {returnData = await node_list_pass_type_ids_by_cert(this, jwtToken);}
		if (operation === PROVISIONING_PASSTYPE_IDS_METHODS.GET_RELATION_BY_CERT) {returnData.push(await node_get_pass_type_relation(this, jwtToken));}
		if (operation === PROVISIONING_PASSTYPE_IDS_METHODS.LIST_ALL_PASS_TYPE_IDS) {returnData = await node_list_all_pass_type_ids(this, jwtToken);}

		return [this.helpers.returnJsonArray(returnData)];
	}
}
