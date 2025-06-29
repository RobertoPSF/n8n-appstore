import { ROUTE_BUNDLE_ID_APP_RELATIONSHIPS } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";


export async function node_get_bundle_id_relations_with_apps(context: any, jwtToken: string) {
	const bundleId = context.getNodeParameter('bundleId', 0) as string;
	try {
			const response = await appStoreGeneralRequest({
					method: 'GET',
					endpoint: ROUTE_BUNDLE_ID_APP_RELATIONSHIPS(bundleId),
					jwtToken,
					helpers: context.helpers,
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