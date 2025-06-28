import { ROUTE_CERTIFICATE_PASSTYPE_IDS_RELATIONSHIPS } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";


export async function node_get_passtype_id_for_certificate_relation(context: any, jwtToken: string) {
  const certificateId = context.getNodeParameter('certificateId', 0) as string;
  try {
      const response = await appStoreGeneralRequest({
          method: 'GET',
          endpoint: ROUTE_CERTIFICATE_PASSTYPE_IDS_RELATIONSHIPS(certificateId),
          jwtToken,
          helpers: context.helpers,
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
