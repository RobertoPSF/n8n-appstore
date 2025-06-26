import { IHttpRequestOptions } from 'n8n-workflow';

export async function replaceUserVisibleApps(
    helpers: any,
    jwtToken: string,
    userId: string,
    appIds: string[],
): Promise<any> {
    const data = {
        data: appIds.map(id => ({ type: 'apps', id })),
    };
    const options: IHttpRequestOptions = {
        method: 'PATCH',
        url: `https://api.appstoreconnect.apple.com/v1/users/${userId}/relationships/visibleApps`,
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