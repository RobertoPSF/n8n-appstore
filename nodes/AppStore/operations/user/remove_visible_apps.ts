import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_USER_VISIBLE_APPS_REL } from "../../requests/api_routes";

export async function node_remove_visible_apps(context: any, jwtToken: string) {
    const userId = context.getNodeParameter('userId', 0) as string;
    const visibleAppsStr = context.getNodeParameter('visibleApps', 0) as string;
    const visibleApps = visibleAppsStr
        .split(',')
        .map(id => id.trim())
        .filter(id => id.length > 0)
        .map(id => ({ type: 'apps', id: id }));
    try {
        const response = await appStoreGeneralRequest({
            method: 'DELETE',
            endpoint: ROUTE_USER_VISIBLE_APPS_REL(userId),
            jwtToken,
            helpers: context.helpers,
            body: { data: visibleApps }
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