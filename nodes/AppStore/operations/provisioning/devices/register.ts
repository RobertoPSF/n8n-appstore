import { appStoreGeneralRequest } from '../../../requests/general_request';
import { ROUTE_DEVICES } from '../../../requests/api_routes';

export async function node_register_device(context: any, jwtToken: string) {
	const name = context.getNodeParameter('name', 0) as string;
	const platform = context.getNodeParameter('platform', 0) as string;
	const udid = context.getNodeParameter('udid', 0) as string;

	const response = await appStoreGeneralRequest({
		method: 'POST',
		endpoint: ROUTE_DEVICES,
		jwtToken,
		body: {
			data: {
				type: 'devices',
				attributes: { name, platform, udid },
			},
		},
		helpers: context.helpers,
	});

	return response.data;
}
