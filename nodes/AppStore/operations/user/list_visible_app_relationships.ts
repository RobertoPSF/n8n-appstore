import { listUserVisibleAppRelationships } from "../../requests/users_and_access/list_user_visible_app_relationships";

export async function node_list_user_visible_app_relationships(context: any, jwtToken: string){
    const userId = context.getNodeParameter('userId', 0) as string;
    try {
        const response = await listUserVisibleAppRelationships(context.helpers, jwtToken, userId);
        if (response.data) {
            return response.data;
        } else {
            return response;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${error.message}`);
    }
} 