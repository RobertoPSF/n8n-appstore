import { modifyUser } from "../../requests/users_and_access/modify_a_user_account";

export async function node_modify_user(context: any, jwtToken: string){

    const userId = context.getNodeParameter('userId', 0) as string;
    const roles = context.getNodeParameter('roles', 0) as string[];
    const allAppsVisible = context.getNodeParameter('allAppsVisible', 0) as boolean;
    const provisioningAllowed = context.getNodeParameter('provisioningAllowed', 0) as boolean;
    const visibleAppsStr = context.getNodeParameter('visibleApps', 0) as string;
    const visibleApps = visibleAppsStr
        .split(',')
        .map(id => id.trim())
        .filter(id => id.length > 0)
        .map(id => ({ type: 'apps', id }));

    const data: any = {
        data: {
            type: 'users',
            id: userId,
            attributes: {
                roles,
                allAppsVisible,
                provisioningAllowed,
            },
        },
    };
    if (visibleApps.length > 0) {
        data.data.relationships = {
            visibleApps: {
                data: visibleApps,
            },
        };
    }

    try {
        const response = await modifyUser(context.helpers, jwtToken, userId, data);
        if (response.data) {
            return response.data;
        } else {
            return response;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${error.message}`);
    }
}