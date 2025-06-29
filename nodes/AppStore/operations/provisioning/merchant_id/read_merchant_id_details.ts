import { ROUTE_MERCHANT_ID_BY_ID } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";

export async function node_read_merchant_id_details(context: any, jwtToken: string) {
    const get = context.getNodeParameter;
    const merchantId = get('merchantId', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_MERCHANT_ID_BY_ID(merchantId),
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