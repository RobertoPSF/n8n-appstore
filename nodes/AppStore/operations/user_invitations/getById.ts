import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_USER_INVITATION_BY_ID } from "../../requests/api_routes";

export async function node_get_user_invitation(context: any, jwtToken: string) {
    const invitationId = context.getNodeParameter('invitationId', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_USER_INVITATION_BY_ID(invitationId),
            jwtToken,
            helpers: context.helpers,
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