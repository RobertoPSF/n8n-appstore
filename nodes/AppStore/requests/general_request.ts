import { IHttpRequestOptions, IHttpRequestMethods } from 'n8n-workflow';

export interface GeneralRequestOptions {
    method?: IHttpRequestMethods;
    endpoint: string;
    jwtToken: string;
    helpers: any;
    params?: Record<string, any>;
    body?: object;
    contentType?: string;
}

export async function appStoreGeneralRequest({
    method = 'GET',
    endpoint,
    jwtToken,
    helpers,
    params,
    body,
    contentType,
}: GeneralRequestOptions): Promise<any> {
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
    if (body) {
        options.body = body;
        options.json = true;
        options.headers = options.headers || {};
        options.headers['Content-Type'] = contentType || 'application/json';
    }
    return helpers.httpRequest(options);
} 