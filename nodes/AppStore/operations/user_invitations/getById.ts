import { getUserInvitationById } from "../../requests/users_invitations/read_user_invit_inf";


export async function node_get_user_invitation(context: any, jwtToken: string){
    const userId = context.getNodeParameter('id', 0) as string;
    try {
        const response = await getUserInvitationById(context.helpers, jwtToken, userId);
        if (response.data) {
            return response.data;
        } else {
            return response;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${error.message}`);
    }
}