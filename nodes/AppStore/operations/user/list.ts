import { listUsers } from "../../requests/users_and_access/list_users";

export async function node_list_user(context: any, jwtToken: string){
    try {
        const response = await listUsers(context.helpers, jwtToken, '/v1/users');
        if (response.data) {
            return response.data;
        } else {
            return response;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${error.message}`);
    }
}