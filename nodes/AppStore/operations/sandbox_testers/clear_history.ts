import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_USER_VISIBLE_APPS_REL } from "../../requests/api_routes";

export async function node_clear_sandbox_tester_history(context: any, jwtToken: string) {
    const get = context.getNodeParameter;
    const sandBoxUserId = get('sandBoxUserId', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'POST',
            endpoint: ROUTE_USER_VISIBLE_APPS_REL(sandBoxUserId),
            jwtToken,
            helpers: context.helpers,
            body: {
                data: {
                    type: "sandboxTestersClearPurchaseHistoryRequest",
                    relationships: {
                      sandboxTester: {
                        data: {
                          type: "sandboxTesters",
                          id: sandBoxUserId
                        }
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