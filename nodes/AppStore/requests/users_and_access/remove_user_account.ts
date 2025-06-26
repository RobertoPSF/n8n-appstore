import { IHttpRequestOptions } from 'n8n-workflow';

export async function removeUserAccount(
    helpers: any,
    jwtToken: string,
    userId: string,
): Promise<any> {
    const options: IHttpRequestOptions = {
        method: 'DELETE',
        url: `https://api.appstoreconnect.apple.com/v1/users/${userId}`,
        headers: {
            Authorization: `Bearer ${jwtToken}`,
            Accept: 'application/json',
        },
    };
    return helpers.httpRequest(options);
} 