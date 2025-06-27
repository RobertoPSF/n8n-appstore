import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_SANDBOX_TESTERS_BY_ID } from "../../requests/api_routes";
import { countryTerritoryCodes } from "../../utils/constants/territory_codes";

export async function node_modify_sandbox_tester(context: any, jwtToken: string) {
    const get = context.getNodeParameter;
    const sanboxUserId = get('sandBoxUserId', 0) as string;
    const interruptedPurchase = get('interruptedPurchase', 0) as boolean;
    const territory = get('territoryField', 0) as string;
    const subscription = get('subscriptionRenewalRate', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'PATCH',
            endpoint: ROUTE_SANDBOX_TESTERS_BY_ID(sanboxUserId),
            jwtToken,
            helpers: context.helpers,
            body: {
                data: {
                    id: sanboxUserId,
                    type: "sandboxTesters",
                    attributes: {
                        interruptPurchases: interruptedPurchase,
                        subscriptionRenewalRate: subscription,
                        territory: countryTerritoryCodes[territory]
                    }
                }
            },
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