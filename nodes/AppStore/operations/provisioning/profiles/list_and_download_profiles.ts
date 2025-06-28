import { ROUTE_PROFILE } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";


export async function node_list_and_download_profiles(context: any, jwtToken: string) {
	try {
			const response = await appStoreGeneralRequest({
					method: 'GET',
					endpoint: ROUTE_PROFILE,
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