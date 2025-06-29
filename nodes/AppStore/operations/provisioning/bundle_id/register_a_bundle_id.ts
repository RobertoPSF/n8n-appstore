import { appStoreGeneralRequest } from "../../../requests/general_request";
import { ROUTE_BUNDLE_ID } from "../../../requests/api_routes";


export async function node_register_a_bundle_id(context: any, jwtToken: string) {
	const bundleId = context.getNodeParameter('bundleId', 0) as string;
	const platform = context.getNodeParameter('platform', 0) as string;
	const name = context.getNodeParameter('name', 0) as string;

	const data = {
		data: {
			type: 'bundleIds',
			attributes: {
				bundleId,
				platform,
				name,
			},
		},
	};

	try {
		const response = await appStoreGeneralRequest({
			method: 'POST',
			endpoint: ROUTE_BUNDLE_ID,
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
		throw new Error(`AppStore API request failed: ${JSON.stringify(error?.response?.data?.errors?.[0] ?? {})}`);
	}
}