import { listUsersInvitations } from "../../requests/users_invitations/list_users_invitations";

export async function node_list_users_invitations(context: any, jwtToken: string){
    try {
        const response = await listUsersInvitations(context.helpers, jwtToken, '/v1/userInvitations');
        if (response.data) {
            return response.data;
        } else {
            return response;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${error.message}`);
    }
}