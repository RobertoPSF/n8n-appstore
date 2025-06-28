import { ROUTE_BUNDLE_ID } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";


export async function node_list_bundles_ids(context: any, jwtToken: string) {
	try {
			const response = await appStoreGeneralRequest({
					method: 'GET',
					endpoint: ROUTE_BUNDLE_ID,
					jwtToken,
					helpers: context.helpers,
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