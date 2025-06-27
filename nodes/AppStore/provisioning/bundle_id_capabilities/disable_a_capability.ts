import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_BUNDLE_ID_CAPABILITY_BY_ID } from "../../requests/api_routes";

export async function disable_a_bundle_id_capability(context: any, jwtToken: string) {
    const capabilityId = context.getNodeParameter('id', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'DELETE',
            endpoint: ROUTE_BUNDLE_ID_CAPABILITY_BY_ID(capabilityId),
            jwtToken,
            helpers: context.helpers,
        });
        return response;
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${error.message}`);
    }
} 