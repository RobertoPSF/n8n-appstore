import { replaceUserVisibleApps } from "../../requests/users_and_access/replace_user_visible_apps";

export async function node_replace_user_visible_apps(context: any, jwtToken: string){
    const userId = context.getNodeParameter('userId', 0) as string;
    const visibleAppsStr = context.getNodeParameter('visibleAppsToReplace', 0) as string;
    const appIds = visibleAppsStr
        .split(',')
        .map(id => id.trim())
        .filter(id => id.length > 0);
    try {
        const response = await replaceUserVisibleApps(context.helpers, jwtToken, userId, appIds);
        if (response.data) {
            return response.data;
        } else {
            return response;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${error.message}`);
    }
} 