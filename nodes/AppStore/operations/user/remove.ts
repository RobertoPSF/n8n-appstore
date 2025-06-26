import { removeUserAccount } from "../../requests/users_and_access/remove_user_account";

export async function node_remove_user(context: any, jwtToken: string){
    const userId = context.getNodeParameter('userId', 0) as string;
    try {
        const response = await removeUserAccount(context.helpers, jwtToken, userId);
        if (response.data) {
            return response.data;
        } else {
            return response;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${error.message}`);
    }
}