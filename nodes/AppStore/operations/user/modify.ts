import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_USER_BY_ID, ROUTE_USER_VISIBLE_APPS } from "../../requests/api_routes";

export async function node_modify_user(context: any, jwtToken: string) {
    const userId = context.getNodeParameter('userId', 0) as string;
    
    const roles = context.getNodeParameter('roles', 0) as string;
    const rolesArray = roles.replace(/\n/g, '').split(',').map(role => role.trim());
    

    const visibleApps = context.getNodeParameter('visibleApps', 0) as string;
    const visibleAppsData = visibleApps.split(',').map(id => ({
        type: "apps",
        id: id.trim()
    }));
    
    const provisioningAllowed = true;

    const data: any = {
        data: {
            type: 'users',
            id: userId,
            attributes: {
                roles: rolesArray,
                provisioningAllowed: provisioningAllowed
            },
        },
    };

    try {
        // Get the user
        const userResponse = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_USER_BY_ID(userId),
            jwtToken,
            helpers: context.helpers,
        });

        
        if (userResponse.data && userResponse.data.attributes && userResponse.data.attributes.roles) {
            const currentRoles = userResponse.data.attributes.roles;
            for (const role of currentRoles) {
                if (!rolesArray.includes(role)) {
                    rolesArray.push(role);
                }
            }
        }

        if (rolesArray.includes('FINANCE') ) {
            data.data.attributes.allAppsVisible = true;
        }
    
        if (rolesArray.length === 1 && rolesArray[0] === 'MARKETING') {
            data.data.attributes.provisioningAllowed = false;   
        }
    
        if (visibleApps.length > 0 && !data.data.attributes.allAppsVisible) {
            data.data.relationships = {
                visibleApps: {
                    data: visibleAppsData
                }
            };
        }

        const params: Record<string, any> = {};
        params['fields[apps]'] = 'name';
        params.limit = 5;
        const visibleAppsResponse = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_USER_VISIBLE_APPS(userId),
            jwtToken,
            helpers: context.helpers,
            params: Object.keys(params).length ? params : undefined,
        });
        

        // Extract the app IDs from the visible apps
        const appsDictionary = visibleAppsResponse.data;
        const extractedAppsData = [];
        for (const app of appsDictionary) {
            extractedAppsData.push({
                type: "apps",
                id: app.id
            });
        }

        // Add the extracted app IDs to visibleAppsData
        visibleAppsData.push(...extractedAppsData);

        // Remove duplicate app IDs from visibleAppsData
        const uniqueVisibleAppsData = [];
        const seenAppIds = new Set();
        for (const app of visibleAppsData) {
            if (!seenAppIds.has(app.id)) {
                uniqueVisibleAppsData.push(app);
                seenAppIds.add(app.id);
            }
        }

        visibleAppsData.length = 0;
        visibleAppsData.push(...uniqueVisibleAppsData);
        
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