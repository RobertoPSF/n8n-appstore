import { ROUTE_PROFILE } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";

export async function node_create_profile(context: any, jwtToken: string) {
    const get = context.getNodeParameter;
    const profileName = get('profileName', 0) as string;
    const profileType = get('profileType', 0) as string;
    const profilePlatform = get('profilePlatform', 0) as string;
    const profileBundleId = get('profileBundleId', 0) as string;
    const profileCertificatesIds = get('profileCertificatesIds', 0) as string[];
    const profileDevicesIds = get('profileDevicesIds') as string[];
    try {
        const response = await appStoreGeneralRequest({
            method: 'POST',
            endpoint: ROUTE_PROFILE,
            jwtToken,
            helpers: context.helpers,
            body: {
                data: {
                    type: "profiles",
                    attributes: {
                        name: profileName,
                        profileType: profileType,
                        platform: profilePlatform
                    },
                    relationships: {
                        bundleId: {
                            data: {
                                "type": "bundleIds", 
                                "id": profileBundleId
                            }
                        },
                    certificates: {
                        data: profileCertificatesIds.map(certificateId => {
                            return {
                                "type": "certificates", 
                                "id": certificateId
                            }
                        })
                    },
                    devices: {
                        data: profileDevicesIds.map(deviceId => {
                            return {
                                "type": "devices", 
                                "id": deviceId
                            }
                        })
                    }
                  }
                }
              },
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