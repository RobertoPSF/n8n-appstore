import { ROUTE_READ_ALL_CERTIFICATES_FOR_PASS_TYPE_ID } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";

export async function node_list_all_certificates_for_passtype_id(context: any, jwtToken: string) {
    const get = context.getNodeParameter;
    const passTypeId = get('passTypeId', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_READ_ALL_CERTIFICATES_FOR_PASS_TYPE_ID(passTypeId),
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