import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS } from "../../../utils/constants/methods_constants";
import { CAPABILITIES_TYPES } from "../../../utils/constants/capabilities_types";

export let CAPABILITY_ID_FIELD = {
    displayName: 'Capability ID',
    name: 'capabilityId',
    type: 'string' as NodePropertyTypes,
    required: true,
    default: '',
    description: 'The ID of the capability to retrieve, remove or modify',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.DISABLE_CAPABILITY,
                PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.MODIFY_CAPABILITY,
            ],
        },
    },
};

export let CAPABILITY_TYPE_FIELD = {
    displayName: 'Capability Type',
    name: 'capabilityType',
    type: 'options' as NodePropertyTypes,
    options: CAPABILITIES_TYPES.map((name) => ({
        name: name,
        value: name,
    })),
    required: true,
    default: '',
    description: 'The type of capability to enable',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.ENABLE_CAPABILITY,
                PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.MODIFY_CAPABILITY
            ],
        },
    },
};

export let CAPABILITY_SETTINGS_FIELD = {
    displayName: 'Settings',
    name: 'settings',
    type: 'fixedCollection' as NodePropertyTypes,
    typeOptions: {
        multipleValues: true,
    },
    default: {},
    options: [
        {
            name: 'settings',
            displayName: 'Settings',
            values: [
                {
                    displayName: 'Key',
                    name: 'key',
                    type: 'options' as NodePropertyTypes,
                    options: [
                        { name: 'ICLOUD_VERSION', value: 'ICLOUD_VERSION' },
                        { name: 'DATA_PROTECTION_PERMISSION_LEVEL', value: 'DATA_PROTECTION_PERMISSION_LEVEL' },
                        { name: 'APPLE_ID_AUTH_APP_CONSENT', value: 'APPLE_ID_AUTH_APP_CONSENT' },
                    ],
                    default: '',
                },
                {
                    displayName: 'Allowed Instances',
                    name: 'allowedInstances',
                    type: 'options' as NodePropertyTypes,
                    options: [
                        { name: 'ENTRY', value: 'ENTRY' },
                        { name: 'SINGLE', value: 'SINGLE' },
                        { name: 'MULTIPLE', value: 'MULTIPLE' },
                    ],
                    default: '',
                },
                {
                    displayName: 'Description',
                    name: 'description',
                    type: 'string' as NodePropertyTypes,
                    default: '',
                },
                {
                    displayName: 'Enabled By Default',
                    name: 'enabledByDefault',
                    type: 'boolean' as NodePropertyTypes,
                    default: false,
                },
                {
                    displayName: 'Name',
                    name: 'name',
                    type: 'string' as NodePropertyTypes,
                    default: '',
                },
                {
                    displayName: 'Visible',
                    name: 'visible',
                    type: 'boolean' as NodePropertyTypes,
                    default: false,
                },
                {
                    displayName: 'Min Instances',
                    name: 'minInstances',
                    type: 'number' as NodePropertyTypes,
                    default: 0,
                },
                {
                    displayName: 'Options',
                    name: 'options',
                    type: 'fixedCollection' as NodePropertyTypes,
                    typeOptions: {
                        multipleValues: true,
                    },
                    default: {},
                    options: [
                        {
                            name: 'option',
                            displayName: 'Option',
                            values: [
                                {
                                    displayName: 'Key',
                                    name: 'key',
                                    type: 'options' as NodePropertyTypes,
                                    options: [
                                        { name: 'XCODE_5', value: 'XCODE_5' },
                                        { name: 'XCODE_6', value: 'XCODE_6' },
                                        { name: 'COMPLETE_PROTECTION', value: 'COMPLETE_PROTECTION' },
                                        { name: 'PROTECTED_UNLESS_OPEN', value: 'PROTECTED_UNLESS_OPEN' },
                                        { name: 'PROTECTED_UNTIL_FIRST_USER_AUTH', value: 'PROTECTED_UNTIL_FIRST_USER_AUTH' },
                                        { name: 'PRIMARY_APP_CONSENT', value: 'PRIMARY_APP_CONSENT' },
                                    ],
                                    default: '',
                                },
                                {
                                    displayName: 'Value',
                                    name: 'value',
                                    type: 'string' as NodePropertyTypes,
                                    default: '',
                                },
                                {
                                    displayName: 'Default',
                                    name: 'default',
                                    type: 'string' as NodePropertyTypes,
                                    default: '',
                                },
                                {
                                    displayName: 'Name',
                                    name: 'name',
                                    type: 'string' as NodePropertyTypes,
                                    default: '',
                                },
                                {
                                    displayName: 'Description',
                                    name: 'description',
                                    type: 'string' as NodePropertyTypes,
                                    default: '',
                                },
                                {
                                    displayName: 'Enabled',
                                    name: 'enabled',
                                    type: 'boolean' as NodePropertyTypes,
                                    default: false,
                                },
                                {
                                    displayName: 'Enabled By Default',
                                    name: 'enabledByDefault',
                                    type: 'boolean' as NodePropertyTypes,
                                    default: false,
                                },
                                {
                                    displayName: 'Supports Wildcard',
                                    name: 'supportsWildcard',
                                    type: 'boolean' as NodePropertyTypes,
                                    default: false,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    description: 'Settings for the capability (opcional)',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.ENABLE_CAPABILITY,
                PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.MODIFY_CAPABILITY
            ],
        },
    },
};

export let ENABLE_CAPABILITY_BUNDLE_ID_REL_FIELD = {
    displayName: 'Bundle ID (Relationship)',
    name: 'bundleId',
    type: 'string' as NodePropertyTypes,
    required: true,
    default: '',
    description: 'The bundleId to associate with the capability (relationship)',
    displayOptions: {
        show: {
            operation: [
                PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.ENABLE_CAPABILITY,
                PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.MODIFY_CAPABILITY
            ],
        },
    },
};
