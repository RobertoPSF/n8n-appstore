import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_USER_VISIBLE_APPS } from "../../requests/api_routes";

export async function node_list_user_visible_apps(context: any, jwtToken: string) {
    const userId = context.getNodeParameter('userId', 0) as string;
    // Prepare query params if provided
    const params: Record<string, any> = {};
    const limit = context.getNodeParameter('limit', 0, undefined) as number | undefined;
    const fieldsApps = context.getNodeParameter('fieldsApps', 0, undefined) as string[] | undefined;
    if (limit !== undefined && limit !== null) {
        params.limit = limit;
    }
    if (fieldsApps && Array.isArray(fieldsApps) && fieldsApps.length > 0) {
        params['fields[apps]'] = fieldsApps.join(',');
    }
    try {
        const response = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_USER_VISIBLE_APPS(userId),
            jwtToken,
            helpers: context.helpers,
            params: Object.keys(params).length ? params : undefined,
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