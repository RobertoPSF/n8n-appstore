import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_BUNDLE_ID_METHODS } from "../../../utils/constants/methods_constants";
import { PLATFORMS } from "../../../utils/constants/bundle_id_platform";

export let BUNDLE_ID_IDENTIFIER_FIELD = {
	displayName: 'Bundle ID',
	name: 'bundleId',
	type: 'string' as NodePropertyTypes,
	required: true,
	default: '',
	description: 'The identifier of the bundle ID',
	displayOptions: {
		show: {
			operation: [
				PROVISIONING_BUNDLE_ID_METHODS.REGISTER_NEW_BUNDLE_ID
			],
		},
	},
}

export let BUNDLE_ID_PLATFORM_FIELD = {
	displayName: 'Platform',
	name: 'platform',
	type: 'multiOptions' as NodePropertyTypes,
	required: true,
	options: PLATFORMS.map((platform) => ({
			name: platform,
			value: platform
	})),
	default: [],
	description: 'Select the platform of the bundle ID',
	displayOptions: {
			show: {
					operation: [
							PROVISIONING_BUNDLE_ID_METHODS.REGISTER_NEW_BUNDLE_ID
					],
			},
	},
};

export let BUNDLE_ID_NAME_FIELD = {
    displayName: 'Name',
    name: 'name',
    type: 'string' as NodePropertyTypes,
		required: true,
    default: '',
    description: 'Name of the bundle ID',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_BUNDLE_ID_METHODS.REGISTER_NEW_BUNDLE_ID,
				PROVISIONING_BUNDLE_ID_METHODS.MODIFY_BUNDLE_ID
            ],
        },
    },
};

export let BUNDLE_ID_SEED_ID_FIELD = {
	displayName: 'Seed ID',
	name: 'seedId',
	type: 'string' as NodePropertyTypes,
	default: '',
	description: 'The seed ID of the bundle ID',
	displayOptions: {
		show: {
			operation: [
				PROVISIONING_BUNDLE_ID_METHODS.REGISTER_NEW_BUNDLE_ID
			],
		},
	},
}
