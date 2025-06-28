import { appStoreGeneralRequest } from "../../../requests/general_request";
import { ROUTE_PASSTYPE_ID } from "../../../requests/api_routes";


export async function node_create_passtype_id(context: any, jwtToken: string) {
	const identifier = context.getNodeParameter('identifier', 0) as string;
	const name = context.getNodeParameter('name', 0) as string;

	const data = {
		data: {
			type: 'passTypeIds',
			attributes: {
				identifier,
				name,
			},
		},
	};

	try {
		const response = await appStoreGeneralRequest({
			method: 'POST',
			endpoint: ROUTE_PASSTYPE_ID,
			jwtToken,
			helpers: context.helpers,
			body: data,
		});
		if (response.data) {
			return response.data;
		} else {
			return response;
		}
	} catch (error: any) {
		throw new Error(`AppStore API request failed: ${error.message}`);
	}
}