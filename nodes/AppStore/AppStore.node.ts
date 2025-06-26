import {
	IExecuteFunctions,
	ICredentialDataDecryptedObject,
	NodeConnectionType,
} from 'n8n-workflow';

import { generateAppStoreJwt } from './utils/token_generate';
import { callAppStoreApi } from './users_and_access/list_users';
import { getUserById } from './users_and_access/read_user_information';
import { modifyUser } from './users_and_access/modify_a_user_account';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

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
				],
				default: '',
			},
			{
				displayName: 'User ID',
				name: 'userId',
				type: 'string',
				required: true,
				default: '',
				description: 'The ID of the user to retrieve',
				displayOptions: {
					show: {
						operation: ['getUserById'],
					},
				},
			},
			{
				displayName: 'Roles',
				name: 'roles',
				type: 'multiOptions',
				options: [
					{ name: 'ADMIN', value: 'ADMIN' },
					{ name: 'FINANCE', value: 'FINANCE' },
					{ name: 'TECHNICAL', value: 'TECHNICAL' },
					{ name: 'SALES', value: 'SALES' },
					{ name: 'MARKETING', value: 'MARKETING' },
					{ name: 'DEVELOPER', value: 'DEVELOPER' },
					{ name: 'APP MANAGER', value: 'APP_MANAGER' },
					{ name: 'ACCESS TO REPORTS', value: 'ACCESS_TO_REPORTS' },
					{ name: 'CUSTOMER SUPPORT', value: 'CUSTOMER_SUPPORT' },
					{ name: 'CREATE APPS', value: 'CREATE_APPS' },
				],
				default: [],
				description: 'Select one or more roles for the user',
				displayOptions: {
					show: {
						operation: ['modifyUser'],
					},
				},
			},
			{
				displayName: 'All Apps Visible',
				name: 'allAppsVisible',
				type: 'boolean',
				default: false,
				description: 'Can the user see all apps?',
				displayOptions: {
					show: {
						operation: ['modifyUser'],
					},
				},
			},
			{
				displayName: 'Provisioning Allowed',
				name: 'provisioningAllowed',
				type: 'boolean',
				default: false,
				description: 'Is provisioning allowed for the user?',
				displayOptions: {
					show: {
						operation: ['modifyUser'],
					},
				},
			},
			{
				displayName: 'Visible App IDs',
				name: 'visibleApps',
				type: 'string',
				default: '',
				description: 'Comma-separated list of App IDs the user can see (leave blank for none)',
				displayOptions: {
					show: {
						operation: ['modifyUser'],
					},
				},
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const returnData: IDataObject[] = [];
		const operation = this.getNodeParameter('operation', 0) as string;

		const credentials = (await this.getCredentials('appStoreApi')) as IAppStoreApiCredentials;
		const { issuerId, keyId, privateKey } = credentials;

		const jwtToken = generateAppStoreJwt(issuerId, keyId, privateKey);

		if (operation === 'listUsers') {
			try {
				const response = await callAppStoreApi(this.helpers, jwtToken, '/v1/users');
				if (response.data) {
					returnData.push(...response.data);
				} else {
					returnData.push(response);
				}
			} catch (error: any) {
				throw new Error(`AppStore API request failed: ${error.message}`);
			}
		}

		if (operation === 'getUserById') {
			const userId = this.getNodeParameter('userId', 0) as string;
			try {
				const response = await getUserById(this.helpers, jwtToken, userId);
				if (response.data) {
					returnData.push(response.data);
				} else {
					returnData.push(response);
				}
			} catch (error: any) {
				throw new Error(`AppStore API request failed: ${error.message}`);
			}
		}

		if (operation === 'modifyUser') {
			const userId = this.getNodeParameter('userId', 0) as string;
			const roles = this.getNodeParameter('roles', 0) as string[];
			const allAppsVisible = this.getNodeParameter('allAppsVisible', 0) as boolean;
			const provisioningAllowed = this.getNodeParameter('provisioningAllowed', 0) as boolean;
			const visibleAppsStr = this.getNodeParameter('visibleApps', 0) as string;
			const visibleApps = visibleAppsStr
				.split(',')
				.map(id => id.trim())
				.filter(id => id.length > 0)
				.map(id => ({ type: 'apps', id }));

			const data: any = {
				data: {
					type: 'users',
					id: userId,
					attributes: {
						roles,
						allAppsVisible,
						provisioningAllowed,
					},
				},
			};
			if (visibleApps.length > 0) {
				data.data.relationships = {
					visibleApps: {
						data: visibleApps,
					},
				};
			}

			try {
				const response = await modifyUser(this.helpers, jwtToken, userId, data);
				if (response.data) {
					returnData.push(response.data);
				} else {
					returnData.push(response);
				}
			} catch (error: any) {
				throw new Error(`AppStore API request failed: ${error.message}`);
			}
		}

		return [this.helpers.returnJsonArray(returnData)];
	}
}

