import {
	IExecuteFunctions,
	ICredentialDataDecryptedObject,
	NodeConnectionType,
} from 'n8n-workflow';

import { generateAppStoreJwt } from './utils/token_generate';
import { callAppStoreApi } from './users_and_access/list_users';
import { getUserById } from './users_and_access/read_user_information';

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
				],
				default: '',
			},
			{
				displayName: 'List Users',
				name: 'listUsers',
				type: 'boolean',
				required: true,
				default: false,
				description: 'List users',
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

		return [this.helpers.returnJsonArray(returnData)];
	}
}

