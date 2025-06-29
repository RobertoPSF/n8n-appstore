import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_USER_VISIBLE_APPS_REL } from "../../requests/api_routes";

export async function node_list_user_visible_app_relationships(context: any, jwtToken: string) {
    const userId = context.getNodeParameter('userId', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_USER_VISIBLE_APPS_REL(userId),
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