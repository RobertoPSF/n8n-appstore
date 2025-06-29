import { ROUTE_PROFILE_DEVICES } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";


export async function node_list_profile_devices(context: any, jwtToken: string) {
  const profileId = context.getNodeParameter('profileId', 0) as string;
  try {
      const response = await appStoreGeneralRequest({
          method: 'GET',
          endpoint: ROUTE_PROFILE_DEVICES(profileId),
          jwtToken,
          helpers: context.helpers,
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
