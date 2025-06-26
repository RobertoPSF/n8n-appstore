import {
	IExecuteFunctions,
	ICredentialDataDecryptedObject,
	NodeConnectionType,
} from 'n8n-workflow';
import jwt from 'jsonwebtoken';

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
				],
				default: 'listUsers',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		//const items = this.getInputData();
		const returnData: IDataObject[] = [];
		const operation = this.getNodeParameter('operation', 0) as string;

		const credentials = (await this.getCredentials('appStoreApi')) as IAppStoreApiCredentials;
		const { issuerId, keyId, privateKey } = credentials;

		const now = Math.floor(Date.now() / 1000);
		const payload = {
			iss: issuerId,
			iat: now,
			exp: now + 300,
			aud: 'appstoreconnect-v1',
		};

		const jwtToken = jwt.sign(payload, privateKey, {
            algorithm: 'ES256',
			keyid: keyId,
		});

		if (operation === 'listUsers') {
			try {
				const response = await this.helpers.httpRequest({
					method: 'GET',
					url: 'https://api.appstoreconnect.apple.com/v1/users',
					headers: {
						Authorization: `Bearer ${jwtToken}`,
						Accept: 'application/json',
					},
				});
				if (response.data) {
					returnData.push(...response.data);
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
