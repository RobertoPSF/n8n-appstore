import { listUserPermissions } from "../../requests/users_permissions/list_user_permissions";

export async function node_list_user_permissions(context: any, jwtToken: string){
    try {
        const response = await listUserPermissions(context.helpers, jwtToken, '/v1/userInvitations');
        if (response.data) {
            return response.data;
        } else {
            return response;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${error.message}`);
    }
}