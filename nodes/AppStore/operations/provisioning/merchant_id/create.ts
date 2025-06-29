import { ROUTE_MERCHANT_ID } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";

export async function node_create_merchant_id(context: any, jwtToken: string) {
    const get = context.getNodeParameter;
    const merchantIdentifier = get('merchantIdentifier', 0) as string;
    const merchantName = get('merchantName', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'POST',
            endpoint: ROUTE_MERCHANT_ID,
            jwtToken,
            helpers: context.helpers,
            body: {
                data: {
                    type: "merchantIds",
                    attributes: {
                        identifier: merchantIdentifier,
                        name: merchantName
                    }
                }
            }
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