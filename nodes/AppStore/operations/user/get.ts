import { getUserById } from "../../requests/users_and_access/read_user_information";

export async function node_get_user(context: any, jwtToken: string){
    const userId = context.getNodeParameter('userId', 0) as string;
    try {
        const response = await getUserById(context.helpers, jwtToken, userId);
        if (response.data) {
            return response.data;
        } else {
            return response;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${error.message}`);
    }
}