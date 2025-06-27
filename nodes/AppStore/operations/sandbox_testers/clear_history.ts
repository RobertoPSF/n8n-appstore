import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_SANDBOX_TESTERS_CLEAR_PURCHASE_HISTORY } from "../../requests/api_routes";

export async function node_clear_sandbox_tester_history(context: any, jwtToken: string) {
    const get = context.getNodeParameter;
    const sandBoxUsersIds = get('sandBoxTesterIds', 0) as string[];
    try {
        const response = await appStoreGeneralRequest({
            method: 'POST',
            endpoint: ROUTE_SANDBOX_TESTERS_CLEAR_PURCHASE_HISTORY,
            jwtToken,
            helpers: context.helpers,
            body: {
                data: {
                    type: "sandboxTestersClearPurchaseHistoryRequest",
                    relationships: {
                      sandboxTesters: {
                        data: sandBoxUsersIds.map(id => {
                          return {
                            id: id,
                            type: "sandboxTesters"
                          };
                        })
                      }
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