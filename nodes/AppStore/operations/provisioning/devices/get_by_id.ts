import { IExecuteFunctions } from 'n8n-workflow';
import { appStoreGeneralRequest } from '../../../requests/general_request';
import { ROUTE_DEVICES } from '../../../requests/api_routes';

export async function node_get_device_by_id(
	context: IExecuteFunctions,
	jwtToken: string,
) {
	const deviceId = context.getNodeParameter('deviceId', 0) as string;
	const fields   = context.getNodeParameter('fieldsDevices', 0, []) as string[];

	const query: Record<string, string> = {};
	if (fields.length) query['fields[devices]'] = fields.join(',');

	const { data } = await appStoreGeneralRequest({
		method:   'GET',
		endpoint: `${ROUTE_DEVICES}/${deviceId}`,
		jwtToken,
		params:   query,
		helpers:  context.helpers,
	});

	return data;        
}
