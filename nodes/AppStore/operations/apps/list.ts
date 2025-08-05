import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_APPS } from "../../requests/api_routes";

export async function node_get_all_apps(context: any, jwtToken: string) {
    try {

        const suffix = "?limit=200";
        const response = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_APPS + suffix,
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