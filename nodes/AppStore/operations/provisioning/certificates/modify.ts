import { ROUTE_CERTIFICATE_BY_ID } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";

export async function node_modify_certificate(context: any, jwtToken: string) {
    const certificateStatus = context.getNodeParameter('certificateStatus', 0) as boolean;
    const certificateId = context.getNodeParameter('certificateId', 0) as string;
    const data = {
        data: {
            type: "certificates",
            id: certificateId,
            attributes: {
                activated: certificateStatus
            }
        }
    };
    try {
        const response = await appStoreGeneralRequest({
            method: 'PATCH',
            endpoint: ROUTE_CERTIFICATE_BY_ID(certificateId),
            jwtToken,
            helpers: context.helpers,
            body: data
        });
        if (response.data) {
            return response.data;
        } else {
            return response;
        }
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${JSON.stringify(error?.response?.data?.errors?.[0] ?? {})}`);
    }
}
