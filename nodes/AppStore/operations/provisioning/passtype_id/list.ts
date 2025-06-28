import { IExecuteFunctions } from 'n8n-workflow';
import { appStoreGeneralRequest } from '../../../requests/general_request';
import { ROUTE_CERTIFICATES } from '../../../requests/api_routes';

export async function node_list_pass_type_ids_by_cert(
	context: IExecuteFunctions,
	jwtToken: string,
) {
	const certId       = context.getNodeParameter('certificateId', 0) as string;
	const fieldsCerts  = context.getNodeParameter('fieldsCertificates', 0, []) as string[];
	const fieldsPTI    = context.getNodeParameter('fieldsPassTypeIds', 0, []) as string[];
	const includeCerts = context.getNodeParameter('includeCertificates', 0)   as boolean;
	const limitCerts   = context.getNodeParameter('limitCertificates', 0)     as number;

	const query: Record<string, string | number> = {};

	if (fieldsCerts.length) query['fields[certificates]'] = fieldsCerts.join(',');
	if (fieldsPTI.length)   query['fields[passTypeIds]']  = fieldsPTI.join(',');

	if (includeCerts) {
		query['include'] = 'certificates';
		if (limitCerts) query['limit[certificates]'] = limitCerts;
	}

	const { data } = await appStoreGeneralRequest({
		method:   'GET',
		endpoint: `${ROUTE_CERTIFICATES}/${certId}/passTypeId`,
		jwtToken,
		params:   query,
		helpers:  context.helpers,
	});

	return data; 
}
