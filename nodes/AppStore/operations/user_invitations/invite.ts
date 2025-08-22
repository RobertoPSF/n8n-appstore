import { ROUTE_USER_INVITATIONS } from "../../requests/api_routes";
import { appStoreGeneralRequest } from "../../requests/general_request";


export async function node_invite_user(context: any, jwtToken: string) {
    const email = context.getNodeParameter('email', 0) as string;
    const firstName = context.getNodeParameter('firstName', 0) as string;
    const lastName = context.getNodeParameter('lastName', 0) as string;


    const roles = context.getNodeParameter('roles', 0) as string;
    const rolesArray = roles.replace(/\n/g, '').split(',').map(role => role.trim());
    

    const visibleApps = context.getNodeParameter('visibleApps', 0) as string;
    const visibleAppsData = visibleApps.split(',').map(id => ({
        type: "apps",
        id: id.trim()
    }));
    
    const provisioningAllowed = false;
    
    const data: any = {
        data: {
            type: 'userInvitations',
            attributes: {
                email: email,
                firstName: firstName,
                lastName: lastName,

                provisioningAllowed: provisioningAllowed,
                roles: rolesArray,
            }
        }
    };

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

    try {
        const response = await appStoreGeneralRequest({
            method: 'POST',
            endpoint: ROUTE_USER_INVITATIONS,
            jwtToken,
            helpers: context.helpers,
            body: data
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