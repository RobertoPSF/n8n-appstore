import { appStoreGeneralRequest } from "../../../requests/general_request";
import { ROUTE_BUNDLE_ID_CAPABILITY_BY_ID } from "../../../requests/api_routes";

export async function modify_a_bundle_id_capability(context: any, jwtToken: string) {
    const capabilityId = context.getNodeParameter('capabilityId', 0) as string;
    const capabilityType = context.getNodeParameter('capabilityType', 0) as string;
    const bundleId = context.getNodeParameter('bundleId', 0) as string;
    const settingsRaw = context.getNodeParameter('settings', 0, []) as any;

    let settings: any[] = [];
    if (Array.isArray(settingsRaw.settings)) {
        settings = settingsRaw.settings.map((setting: any) => {
            let options: any[] = [];
            if (setting.options && Array.isArray(setting.options.option)) {
                options = setting.options.option.map((opt: any) => ({
                    key: opt.key,
                    value: opt.value,
                    default: opt.default,
                    name: opt.name,
                    description: opt.description,
                    enabled: opt.enabled,
                    enabledByDefault: opt.enabledByDefault,
                    supportsWildcard: opt.supportsWildcard,
                }));
            }
            return {
                key: setting.key,
                allowedInstances: setting.allowedInstances,
                enabledByDefault: setting.enabledByDefault,
                visible: setting.visible,
                description: setting.description,
                name: setting.name,
                minInstances: setting.minInstances,
                options: options.length > 0 ? options : undefined,
            };
        });
    }

    const data = {
        data: {
            id: capabilityId,
            type: "bundleIdCapabilities",
            attributes: {
                capabilityType,
                ...(settings.length > 0 ? { settings } : {}),
            },
            relationships: {
                bundleId: {
                    data: {
                        type: "bundleIds",
                        id: bundleId,
                    },
                },
            },
        },
    };

    try {
        const response = await appStoreGeneralRequest({
            method: 'PATCH',
            endpoint: ROUTE_BUNDLE_ID_CAPABILITY_BY_ID(capabilityId),
            jwtToken,
            helpers: context.helpers,
            body: data,
        });
        return response;
    } catch (error: any) {
        throw new Error(`AppStore API request failed: ${JSON.stringify(error?.response?.data?.errors?.[0] ?? {})}`);
    }
}