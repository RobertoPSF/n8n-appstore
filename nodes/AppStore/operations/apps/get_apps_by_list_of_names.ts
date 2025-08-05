import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_APPS } from "../../requests/api_routes";

export async function node_get_apps_by_list_of_names(context: any, jwtToken: string) {
    const appNames = context.getNodeParameter('appNames', 0) as string;

    const appNamesArray = appNames.split(',');
    try {
        const response = await appStoreGeneralRequest({
            method: 'GET',
            endpoint: ROUTE_APPS,
            jwtToken,
            helpers: context.helpers,
        });
        if (response.data) {    
            if (Array.isArray(response.data)) {
                const apps = response.data.filter(
                    (app: any) => appNamesArray.includes(app?.attributes?.name)
                ).map((app: any) => ({
                    id: app.id,
                    name: app.attributes?.name
                }));
                return apps.length > 0 ? apps : {};
            } else {
                return {};
            }
        } else {
            return response;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${JSON.stringify(error?.response?.data?.errors?.[0] ?? {})}`);
    }
}