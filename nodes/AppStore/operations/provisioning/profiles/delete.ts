import { ROUTE_PROFILE_BY_ID } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";

export async function node_delete_profile(context: any, jwtToken: string) {
    const get = context.getNodeParameter;
    const profileId = get('profileId', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'DELETE',
            endpoint: ROUTE_PROFILE_BY_ID(profileId),
            jwtToken,
            helpers: context.helpers
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