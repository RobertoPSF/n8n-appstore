import { IHttpRequestOptions } from "n8n-workflow";

export async function getUserInvitationById(
    helpers: any,
    jwtToken: string,
    userId: string,
): Promise<any> {
    const options: IHttpRequestOptions = {
        method: 'GET',
        url: `https://api.appstoreconnect.apple.com/v1/userInvitations/${userId}`,
        headers: {
            Authorization: `Bearer ${jwtToken}`,
            Accept: 'application/json',
        },
    };
    return helpers.httpRequest(options);
} 