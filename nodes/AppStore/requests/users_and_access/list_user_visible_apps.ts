import { IHttpRequestOptions } from 'n8n-workflow';

export async function listUserVisibleApps(
    helpers: any,
    jwtToken: string,
    userId: string,
): Promise<any> {
    const options: IHttpRequestOptions = {
        method: 'GET',
        url: `https://api.appstoreconnect.apple.com/v1/users/${userId}/visibleApps`,
        headers: {
            Authorization: `Bearer ${jwtToken}`,
            Accept: 'application/json',
        },
    };
    return helpers.httpRequest(options);
} 