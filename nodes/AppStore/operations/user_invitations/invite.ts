import { ROUTE_USER_INVITATIONS } from "../../requests/api_routes";
import { appStoreGeneralRequest } from "../../requests/general_request";


export async function node_invite_user(context: any, jwtToken: string) {
    const allAppsVisible = context.getNodeParameter('allAppsVisible', 0) as boolean;
    const provisioningAllowed = context.getNodeParameter('provisioningAllowed', 0) as boolean;
    const email = context.getNodeParameter('email', 0) as string;
    const firstName = context.getNodeParameter('firstName', 0) as string;
    const lastName = context.getNodeParameter('lastName', 0) as string;
    const roles = context.getNodeParameter('roles', 0) as string[];

    const data: any = {
        data: {
            type: 'userInvitations',
            attributes: {
                allAppsVisible,
                email,
                firstName,
                lastName,
                provisioningAllowed,
                roles,
            }
        }
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