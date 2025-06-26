import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_USERS } from "../../requests/api_routes";

export async function node_list_user(context: any, jwtToken: string) {
    try {
        const response = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_USERS,
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