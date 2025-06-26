import { IHttpRequestOptions } from 'n8n-workflow';

export async function listVisibleAppsForUser(
	helpers: any,
	jwtToken: string,
	userId: string,
	params?: Record<string, any>,
): Promise<any> {
	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `https://api.appstoreconnect.apple.com/v1/users/${userId}/visibleApps`,
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
