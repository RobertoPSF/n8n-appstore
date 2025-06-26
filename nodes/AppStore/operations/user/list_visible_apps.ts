import { listVisibleAppsForUser } from "../../requests/users_and_access/list_all_apps_user";

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
        const response = await listVisibleAppsForUser(context.helpers, jwtToken, userId, Object.keys(params).length ? params : undefined);
        if (response.data) {
            return response.data;
        } else {
            return response;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${error.message}`);
    }
} 