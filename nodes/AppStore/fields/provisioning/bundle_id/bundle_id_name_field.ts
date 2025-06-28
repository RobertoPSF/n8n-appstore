import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_BUNDLE_ID_METHODS } from "../../../utils/constants/methods_constants";

export const BUNDLE_ID_NAME_FIELD = {
    displayName: 'Bundle ID name',
    name: 'bundleIdName',
    type: 'string' as NodePropertyTypes,
    default: '',
    description: 'The Name you want your bundle id change to',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_BUNDLE_ID_METHODS.MODIFY_BUNDLE_ID
            ],
        },
    },
}