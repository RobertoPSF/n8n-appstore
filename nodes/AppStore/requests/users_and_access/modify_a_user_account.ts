import { IHttpRequestOptions } from 'n8n-workflow';

export async function modifyUser(
    helpers: any,
    jwtToken: string,
    userId: string,
    data: object,
): Promise<any> {
    const options: IHttpRequestOptions = {
        method: 'PATCH',
        url: `https://api.appstoreconnect.apple.com/v1/users/${userId}`,
        headers: {
            Authorization: `Bearer ${jwtToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: data,
        json: true,
    };
    return helpers.httpRequest(options);
} 