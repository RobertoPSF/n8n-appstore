import { IExecuteFunctions } from 'n8n-workflow';
import { appStoreGeneralRequest } from '../../../requests/general_request';
import { ROUTE_DEVICES } from '../../../requests/api_routes';

export async function node_modify_device(
	context: IExecuteFunctions,
	jwtToken: string,
) {
	let   deviceId = context.getNodeParameter('deviceId', 0) as string;
	const name     = context.getNodeParameter('name',     0, '') as string;
	const status   = context.getNodeParameter('status',   0, '') as string;

	const attributes: Record<string, string> = {};
	if (name)   attributes.name   = name;
	if (status) attributes.status = status;

	if (Object.keys(attributes).length === 0) {
		throw new Error('Preencha ao menos “Nome” ou “Status” para atualizar.');
	}

	const { data } = await appStoreGeneralRequest({
		method:   'PATCH',
		endpoint: `${ROUTE_DEVICES}/${deviceId}`,
		jwtToken,
		body: {
			data: {
				id:   deviceId,
				type: 'devices',
				attributes,
			},
		},
		helpers: context.helpers,
	});

	return data;
}
