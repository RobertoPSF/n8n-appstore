import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_USERS } from "../../requests/api_routes";

export async function node_get_user_by_email(context: any, jwtToken: string) {
    const emailToFind = context.getNodeParameter('email', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_USERS,
            jwtToken,
            helpers: context.helpers,
        });
        if (response.data) {
            if (Array.isArray(response.data)) {
                const user = response.data.find(
                    (user: any) => user?.attributes?.username === emailToFind
                );
                return user || {"error": "User not found"};
            } else {
                return {};
            }
        } else {
            return response;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${JSON.stringify(error?.response?.data?.errors?.[0] ?? {})}`);
    }
}