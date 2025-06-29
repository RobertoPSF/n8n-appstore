import { ROUTE_READ_PASS_TYPE_ID_BY_ID } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";

export async function node_delete_passtype_id(context: any, jwtToken: string) {
    const get = context.getNodeParameter;
    const passTypeId = get('passTypeId', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'DELETE',
            endpoint: ROUTE_READ_PASS_TYPE_ID_BY_ID(passTypeId),
            jwtToken,
            helpers: context.helpers
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