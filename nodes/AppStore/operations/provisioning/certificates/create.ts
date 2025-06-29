import { ROUTE_CERTIFICATES } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";

export async function node_create_certificate(context: any, jwtToken: string) {
    const csrContent = context.getNodeParameter('csrContent', 0) as string;
    const certificateType = context.getNodeParameter('certificateType', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'POST',
            endpoint: ROUTE_CERTIFICATES,
            jwtToken,
            helpers: context.helpers,
            body: {
                data: {
                    type: "certificates",
                    attributes: {
                        certificateType: certificateType,
                        csrContent: csrContent
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
        throw new Error(`AppStore API request failed: ${JSON.stringify(error?.response?.data?.errors?.[0] ?? {})}`);
    }
}
