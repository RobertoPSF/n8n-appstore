import { ROUTE_MERCHANT_ID_CERTIFICATES_RELATIONSHIPS } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";

export async function node_list_certificates_relationships_for_merchant_id(context: any, jwtToken: string) {
    const get = context.getNodeParameter;
    const merchantId = get('merchantId', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_MERCHANT_ID_CERTIFICATES_RELATIONSHIPS(merchantId),
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