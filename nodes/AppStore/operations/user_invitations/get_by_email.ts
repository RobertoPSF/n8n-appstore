import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_USER_INVITATIONS } from "../../requests/api_routes";

export async function node_list_invited_users_by_email(context: any, jwtToken: string) {
    const emailToFind = context.getNodeParameter('email', 0) as string;

    try {
        const response = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_USER_INVITATIONS,
            jwtToken,
            helpers: context.helpers,
        });
        if (response.data) {
            if(Array.isArray(response.data)) {
                const userInvitation = response.data.find(
                    (user: any) => user?.attributes?.email === emailToFind
                );
                return userInvitation || {"error" : "Invitation not found"};
            }
        } else {
            return 1;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${JSON.stringify(error?.response?.data?.errors?.[0] ?? {})}`);
    }
}