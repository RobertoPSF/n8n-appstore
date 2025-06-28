import { ROUTE_CERTIFICATES } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";


export async function node_list_certificates(context: any, jwtToken: string) {
	try {
			const response = await appStoreGeneralRequest({
					method: 'GET',
					endpoint: ROUTE_CERTIFICATES,
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