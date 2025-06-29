import { ROUTE_USER_INVITATION_BY_ID } from "../../requests/api_routes";
import { appStoreGeneralRequest } from "../../requests/general_request";


export async function node_cancel_user_invitation(context: any, jwtToken: string) {
	const invitationId = context.getNodeParameter('invitationId', 0) as string;
	try {
			const response = await appStoreGeneralRequest({
					method: 'DELETE',
					endpoint: ROUTE_USER_INVITATION_BY_ID(invitationId),
					jwtToken,
					helpers: context.helpers,
			});
			if (response.data) {
					return response.data;
			} else {
					return response;
			}
	} catch (error: any) {
			throw new Error(`AppStore API request failed: ${JSON.stringify(error?.response?.data?.errors?.[0] ?? {})}`);
	}
}