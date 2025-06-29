import { DEVICE_METHODS, SANDBOX_TESTERS_METHODS, USER_INVITATIONS_METHODS, USER_METHODS } from "../utils/constants/methods_constants";
import { BUNDLE_ID_FIELD } from "./provisioning/bundle_id/bundle_id_get_by_id_fields";
import { BUNDLE_ID_IDENTIFIER_FIELD, BUNDLE_ID_NAME_FIELD, BUNDLE_ID_PLATFORM_FIELD, BUNDLE_ID_SEED_ID_FIELD } from "./provisioning/bundle_id/register_bundle_id_fields";
import { CAPABILITY_ID_FIELD, CAPABILITY_SETTINGS_FIELD, CAPABILITY_TYPE_FIELD, ENABLE_CAPABILITY_BUNDLE_ID_REL_FIELD } from "./provisioning/bundle_id_capabilities/bundle_id_capabilities_fields";
import { CERTIFICATE_ID_FIELD } from "./provisioning/certificates/get_certificate_by_id_fields";
import { LIST_DEVICES_FIELDS } from "./provisioning/devices/list_field";
import { REGISTER_DEVICE_FIELDS } from "./provisioning/devices/register_fields";
import { PROFILE_ID_FIELD } from "./provisioning/profile/profile_id_field";
import { PROFILE_BUNDLE_ID_FIELD } from "./provisioning/profile/profile_bundle_id_field";
import { PROFILE_CERTIFICATES_IDS_FIELDS } from "./provisioning/profile/profile_certificates_ids_fields";
import { PROFILE_DEVICES_IDS_FIELDS } from "./provisioning/profile/profile_device_id_fields";
import { PROFILE_NAME_FIELD } from "./provisioning/profile/profile_name_field";
import { PROFILE_PLATFORM_TYPE_FIELD } from "./provisioning/profile/profile_platform_field";
import { PROFILE_TYPE_FIELD } from "./provisioning/profile/profile_type_field";
import { INTERRUPTED_PURCHASE_FIELD } from "./sandbox_testers/interrupted_purchase_field";
import { SANDBOX_USER_ID_FIELD } from "./sandbox_testers/sandbox_tester_id_field";
import { SANDBOX_TESTER_IDS_FIELDS } from "./sandbox_testers/sandbox_tester_ids_fields";
import { SUBSCRIPTION_RENEWAL_RATE_FIELD } from "./sandbox_testers/subscription_renewal_rate_field";
import { TERRITORY_FIELD } from "./sandbox_testers/territory";
import { INVITATION_ID_FIELD } from "./user_invitations/invitation_get_by_id_fields";
import { INVITE_USER_ALL_APPS_VISIBLE_SWITCH, INVITE_USER_EMAIL_FIELD, INVITE_USER_FIRST_NAME_FIELD, INVITE_USER_LAST_NAME_FIELD, INVITE_USER_PROVISIONING_ALLOWED_SWITCH } from "./user_invitations/invite_user_fields";
import { APPS_FIELDS } from "./users/apps_fields";
import { INCLUDE_VISIBLE_APPS_FIELD } from "./users/include_visible_apps_fields";
import { LIMIT } from "./users/limit_field";
import { APP_IDS_FIELD, LIST_ALL_APPS_USER_FIELDS_FIELD, MODIFY_USER_ALL_APPS_VISIBLE_SWITCH, MODIFY_USER_PROVISIONING_ALLOWED_SWITCH, MODIFY_USER_ROLES_FIELD } from "./users/modify_user_fields";
import { USER_ID_FIELD } from "./users/user_get_by_id_fields";
import { USERS_FIELDS } from "./users/users_fields";
import { GET_DEVICE_FIELDS } from "./provisioning/devices/get_by_id_field";
import { MODIFY_DEVICE_FIELDS } from "./provisioning/devices/modify_field";
import { MERCHANT_ID_FIELD } from "./provisioning/merchant_ids/merchant_id_fields";
import { PASSTYPE_ID_FIELD, PASSTYPE_ID_IDENTIFIER_FIELD, PASSTYPE_ID_NAME_FIELD } from "./provisioning/passtype_id/passtype_id_fields";
import { LIST_PASS_TYPE_IDS_FIELDS } from "./provisioning/passtype_id/list_field";
import { GET_CERT_PTI_REL_FIELDS } from "./provisioning/passtype_id/get_relation_field";
import { LIST_ALL_PTI_FIELDS } from "./provisioning/passtype_id/list_pass_type_id_field";
import { CERTIFICATE_STATUS_FIELD } from "./provisioning/certificates/certificate_status_fields";
import { CSR_CONTENT_FIELD } from "./provisioning/certificates/csr_content_field";
import { CERTIFICATE_TYPE_FIELD } from "./provisioning/certificates/certificate_type_fields";
import { MERCHANT_NAME_FIELD } from "./provisioning/merchant_ids/merchant_name_fields";
import { MERCHANT_IDENTIFIER_FIELD } from "./provisioning/merchant_ids/merchant_identifier_fields";

export const ALL_FIELDS = [
    USER_ID_FIELD,
    MODIFY_USER_ROLES_FIELD,
    MODIFY_USER_ALL_APPS_VISIBLE_SWITCH,
    MODIFY_USER_PROVISIONING_ALLOWED_SWITCH,
    APP_IDS_FIELD,
    LIMIT(200, 'Number of apps to return (max 200)', [USER_METHODS.LIST_ALL_APPS_VISIBLE_TO_A_USER]),
    LIMIT(100, 'Limit of apps to fetch',[USER_INVITATIONS_METHODS.LIST_ALL_APPS_VISIBLE_TO_AN_INVITED_USER]),
    LIMIT(200, 'Maximum number of app relationships to return (max 200)', [USER_INVITATIONS_METHODS.LIST_VISIBLE_APP_RELATIONSHIPS_FOR_INVITED_USER]),
    LIST_ALL_APPS_USER_FIELDS_FIELD,
    ...REGISTER_DEVICE_FIELDS,
    ...LIST_DEVICES_FIELDS,
    ...GET_DEVICE_FIELDS,
    ...MODIFY_DEVICE_FIELDS,
    ...GET_CERT_PTI_REL_FIELDS,
    ...LIST_PASS_TYPE_IDS_FIELDS,
    ...LIST_ALL_PTI_FIELDS,
    LIMIT(200, 'Maximum number of devices to return (max 200)', [DEVICE_METHODS.LIST_DEVICES]),
    INCLUDE_VISIBLE_APPS_FIELD,
    USERS_FIELDS,
    APPS_FIELDS,
    LIMIT(50, 'The maximum number of games to show (max 50)', [USER_METHODS.READ_USER_INFORMATION]),
    CAPABILITY_ID_FIELD,
    LIMIT(200, 'The maximum number of sandbox testers to show (max 200)', [SANDBOX_TESTERS_METHODS.LIST_SANDBOX_TESTERS]),
    ENABLE_CAPABILITY_BUNDLE_ID_REL_FIELD,
    CAPABILITY_TYPE_FIELD,
    CAPABILITY_SETTINGS_FIELD,
    SUBSCRIPTION_RENEWAL_RATE_FIELD,
    TERRITORY_FIELD,
    SANDBOX_USER_ID_FIELD,
    INTERRUPTED_PURCHASE_FIELD,
    INVITATION_ID_FIELD,
    INVITE_USER_EMAIL_FIELD,
    INVITE_USER_FIRST_NAME_FIELD,
    INVITE_USER_LAST_NAME_FIELD,
    INVITE_USER_ALL_APPS_VISIBLE_SWITCH,
    INVITE_USER_PROVISIONING_ALLOWED_SWITCH,
    SANDBOX_TESTER_IDS_FIELDS,
    BUNDLE_ID_IDENTIFIER_FIELD,
    BUNDLE_ID_PLATFORM_FIELD,
    BUNDLE_ID_NAME_FIELD,
    BUNDLE_ID_SEED_ID_FIELD,
    BUNDLE_ID_FIELD,
    CERTIFICATE_ID_FIELD,
    PROFILE_NAME_FIELD,
    PROFILE_BUNDLE_ID_FIELD,
    PROFILE_PLATFORM_TYPE_FIELD,
    PROFILE_TYPE_FIELD,
    PROFILE_CERTIFICATES_IDS_FIELDS,
    PROFILE_DEVICES_IDS_FIELDS,
    PROFILE_ID_FIELD,
    MERCHANT_ID_FIELD,
    PASSTYPE_ID_FIELD,
    CERTIFICATE_STATUS_FIELD,
    CERTIFICATE_TYPE_FIELD,
    CSR_CONTENT_FIELD,
    PASSTYPE_ID_IDENTIFIER_FIELD,
    PASSTYPE_ID_NAME_FIELD,
    MERCHANT_NAME_FIELD,
    MERCHANT_IDENTIFIER_FIELD
];