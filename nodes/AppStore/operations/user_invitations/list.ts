import { listInvitatedUsers } from "../../requests/users_invitations/list_invitated_users";

export async function node_list_invitated_users(context: any, jwtToken: string){
    try {
        const response = await listInvitatedUsers(context.helpers, jwtToken, '/v1/userInvitations');
        if (response.data) {
            return response.data;
        } else {
            return response;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${error.message}`);
    }
}