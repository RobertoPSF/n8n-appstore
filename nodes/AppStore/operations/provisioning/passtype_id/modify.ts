import { ROUTE_READ_PASS_TYPE_ID_BY_ID } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";

export async function node_modify_passtype_id(context: any, jwtToken: string) {
    const get = context.getNodeParameter;
    const passTypeId = get('identifier', 0) as string;
    const passTypeName = get('name', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'PATCH',
            endpoint: ROUTE_READ_PASS_TYPE_ID_BY_ID(passTypeId),
            jwtToken,
            helpers: context.helpers,
            body: {
                data: {
                    type: "passTypeIds",
                    id: passTypeId,
                    attributes: {
                        name: passTypeName
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
        console.log(error.response.data.errors);
        throw new Error(`AppStore API request failed: ${error.message}`);
    }
}