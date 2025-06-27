import { ROUTE_SANDBOX_TESTERS } from "../../requests/api_routes";
import { appStoreGeneralRequest } from "../../requests/general_request";

export async function node_list_sandbox_testers(context: any, jwtToken: string) {
    const limit = context.getNodeParameter('limit', 0) as number;
    try {
        const response = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_SANDBOX_TESTERS + "?limit=" + limit,
            jwtToken,
            helpers: context.helpers,
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