import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class AppStoreApi implements ICredentialType {
	name = 'appStoreApi';
	displayName = 'App Store API';
	properties: INodeProperties[] = [
		{
			displayName: 'JWT',
			name: 'jwt',
			type: 'string',
			default: '',
			description: 'JWT token for App Store Connect API authentication',
		},
		{
            displayName: 'Issuer ID',
            name: 'issuerId',
            type: 'string',
            default: '',
            placeholder: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
            description: 'Your App Store Connect Issuer ID',
        },
        {
            displayName: 'Key ID',
            name: 'keyId',
            type: 'string',
            default: '',
            placeholder: 'XXXXXXXXXX',
            description: 'The ID of the API Key you downloaded (.p8 file)',
        },
		{
			displayName: 'Private Key',
			name: 'privateKey',
			type: 'string',
			typeOptions: {
				rows: 6,
				password: true,
			},
			default: '',
			description: 'The private key (contents of the .p8 file). Keep this secret!',
		},
	];
}
