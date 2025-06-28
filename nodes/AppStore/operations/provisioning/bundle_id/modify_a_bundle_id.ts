import { ROUTE_BUNDLE_ID_BY_ID } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";

export async function node_modify_bundle_id(context: any, jwtToken: string) {
    const profileBundleId = context.getNodeParameter('bundleId', 0) as string;
    const bundleIdName = context.getNodeParameter('name', 0) as string;
	try {
        const response = await appStoreGeneralRequest({
            method: 'PATCH',
            endpoint: ROUTE_BUNDLE_ID_BY_ID(profileBundleId),
            jwtToken,
            helpers: context.helpers,
            body: {
                data: {
                    type: "bundleIds",
                    id: profileBundleId,
                    attributes: {
                        "name": bundleIdName
                    }
                }
            }
        });
        if (response.data) {
            return response.data;
        } else {
            return response;
        }
	} catch (error: any) {
        throw new Error(`AppStore API request failed: ${error.message}`);
	}
}