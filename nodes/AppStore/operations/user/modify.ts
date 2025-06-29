import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_USER_BY_ID } from "../../requests/api_routes";

export async function node_modify_user(context: any, jwtToken: string) {
    const userId = context.getNodeParameter('userId', 0) as string;
    const roles = context.getNodeParameter('roles', 0) as string[];
    const allAppsVisible = context.getNodeParameter('allAppsVisible', 0) as boolean;
    const provisioningAllowed = context.getNodeParameter('provisioningAllowed', 0) as boolean;
    const visibleAppsList = context.getNodeParameter('visibleApps', 0) as string[];
    const visibleApps = visibleAppsList.map(id => ({ type: 'apps', id }));
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
        const response = await appStoreGeneralRequest({
            method: 'PATCH',
            endpoint: ROUTE_USER_BY_ID(userId),
            jwtToken,
            helpers: context.helpers,
            body: data,
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