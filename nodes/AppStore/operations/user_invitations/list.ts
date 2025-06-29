import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_USER_INVITATIONS } from "../../requests/api_routes";

export async function node_list_invited_users(context: any, jwtToken: string) {
    try {
        const response = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_USER_INVITATIONS,
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