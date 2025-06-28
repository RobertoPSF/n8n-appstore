import { IExecuteFunctions } from 'n8n-workflow';
import { appStoreGeneralRequest } from '../../../requests/general_request';
import { ROUTE_CERTIFICATES } from '../../../requests/api_routes';

export async function node_get_pass_type_relation(
	context: IExecuteFunctions,
	jwtToken: string,
) {
	const certId = context.getNodeParameter('certificateId', 0) as string;

	const { data } = await appStoreGeneralRequest({
		method:   'GET',
		endpoint: `${ROUTE_CERTIFICATES}/${certId}/relationships/passTypeId`,
		jwtToken,
		helpers:  context.helpers,
	});

	return data;  
}
