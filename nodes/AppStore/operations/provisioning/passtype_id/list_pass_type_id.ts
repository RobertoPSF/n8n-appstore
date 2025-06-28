import { IExecuteFunctions } from 'n8n-workflow';
import { appStoreGeneralRequest } from '../../../requests/general_request';

export async function node_list_all_pass_type_ids(
	context: IExecuteFunctions,
	jwtToken: string,
) {
	const add = (q: Record<string, string | number>, k: string, v: any) => {
		if (Array.isArray(v) ? v.length : v) q[k] = Array.isArray(v) ? v.join(',') : v;
	};

	const query: Record<string, string | number> = {};

	add(query, 'filter[id]',         context.getNodeParameter('filterId',         0, ''));
	add(query, 'filter[identifier]', context.getNodeParameter('filterIdentifier', 0, ''));
	add(query, 'filter[name]',       context.getNodeParameter('filterName',       0, ''));

	add(query, 'fields[passTypeIds]', context.getNodeParameter('fieldsPassTypeIds', 0, []));
	add(query, 'fields[certificates]',context.getNodeParameter('fieldsCertificates',0, []));

	const include = context.getNodeParameter('includeCertificates', 0) as boolean;
	if (include) {
		query['include'] = 'certificates';
		const limCert = context.getNodeParameter('limitCertificates', 0) as number;
		if (limCert) query['limit[certificates]'] = limCert;
	}

	const lim = context.getNodeParameter('limit', 0) as number;
	if (lim) query['limit'] = lim;

	add(query, 'sort', context.getNodeParameter('sortBy', 0, ''));

	const { data } = await appStoreGeneralRequest({
		method:   'GET',
		endpoint: '/v1/passTypeIds',
		jwtToken,
		params:   query,
		helpers:  context.helpers,
	});

	return data; // PassTypeIdsResponse
}
