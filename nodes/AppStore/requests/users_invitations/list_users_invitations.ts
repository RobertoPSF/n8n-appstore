import { IHttpRequestOptions, IHttpRequestMethods } from 'n8n-workflow';

export async function listUsersInvitations(
    helpers: any,
    jwtToken: string,
    endpoint: string,
    method: IHttpRequestMethods = 'GET',
    params?: Record<string, any>,
): Promise<any> {
    const options: IHttpRequestOptions = {
        method,
        url: `https://api.appstoreconnect.apple.com${endpoint}`,
        headers: {
            Authorization: `Bearer ${jwtToken}`,
            Accept: 'application/json',
        },
    };
    if (params) {
        options.qs = params;
    }
    return helpers.httpRequest(options);
} 