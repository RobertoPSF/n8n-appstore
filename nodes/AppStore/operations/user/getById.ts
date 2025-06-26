import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_USER_BY_ID } from "../../requests/api_routes";

export async function node_get_user(context: any, jwtToken: string) {
    const userId = context.getNodeParameter('userId', 0) as string;
    const includeVisibleApps = context.getNodeParameter('allAppsVisible', 0) as boolean;
    const usersFieldsToGet = (context.getNodeParameter('usersFields', 0) as string[]).join(',');
    const appsFieldsToGet = (context.getNodeParameter('appsFields', 0) as string[]).join(',');
    const limit = context.getNodeParameter('limit', 0) as number;
    let suffix = "?";
    suffix += "fields[users]=" + usersFieldsToGet;
    suffix += "&fields[apps]=" + appsFieldsToGet;
    suffix += includeVisibleApps ? "&include=visibleApps" : "";
    suffix += "&limit[visibleApps]=" + limit;
    try {
        const response = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_USER_BY_ID(userId) + suffix,
            jwtToken,
            helpers: context.helpers,
        });
        return response;
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${error.message}`);
    }
}