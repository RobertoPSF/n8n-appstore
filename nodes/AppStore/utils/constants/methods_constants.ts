export const USER_METHODS = {
    LIST_USERS: "list_users",
    READ_USER_INFORMATION: "read_user_information",
    MODIFY_A_USER_ACCOUNT: "modify_a_user_account",
    REMOVE_A_USER_ACCOUNT: "remove_a_user_account",
    LIST_ALL_APPS_VISIBLE_TO_A_USER: "list_all_apps_visible_to_a_user",
    GET_ALL_VISIBLE_APP_RESOURCE_IDS_FOR_A_USER: "get_all_visible_app_resource_ids_for_a_user",
    ADD_VISIBLE_APPS_TO_A_USER: "add_visible_apps_to_a_user",
    REPLACE_THE_LIST_OF_VISIBLE_APPS_FOR_A_USER: "replace_the_list_of_visible_apps_for_a_user",
    REMOVE_VISIBLE_APPS_FROM_A_USER: "remove_visible_apps_from_a_user",
}

export const USER_INVITATIONS_METHODS = {
    LIST_INVITED_USERS: "list_invited_users",
    READ_USER_INVITATION_INFORMATION: "read_user_invitation_information",
    INVITE_A_USER: "invite_a_user",
    CANCEL_USER_INVITATION: "cancel_user_invitation",
    LIST_ALL_APPS_VISIBLE_TO_AN_INVITED_USER: "list_all_apps_visible_to_an_invited_user",
    LIST_VISIBLE_APP_RELATIONSHIPS_FOR_INVITED_USER: 'listVisibleAppRelationshipsForInvitedUser',

}

export const SANDBOX_TESTERS_METHODS = {
    LIST_SANDBOX_TESTERS: "list_sandbox_testers",
    MODIFY_A_SANDBOX_TESTER: "modify_a_sandbox_tester",
    CLEAR_PURCHASE_HISTORY_FOR_A_SANDBOX_TESTER: "clear_purchase_history_for_a_sandbox_tester"
};

export const PROVISIONING_BUNDLE_ID_METHODS = {
    REGISTER_NEW_BUNDLE_ID: "register_new_bundle_id",
    MODIFY_BUNDLE_ID: "modify_bundle_id",
    DELETE_BUNDLE_ID: "delete_bundle_id",
    LIST_BUNDLE_IDS: "list_bundle_ids",
    READ_BUNDLE_ID_INFORMATION: "read_bundle_id_information",
    READ_APP_INFORMATION_BUNDLE_ID: "read_app_information_bundle_id",
    LIST_ALL_PROFILES_FOR_BUNDLE_ID: "list_all_profiles_for_bundle_id",
    LIST_ALL_CAPABILITIES_FOR_BUNDLE_ID: "list_all_capabilities_for_bundle_id",
    GET_BUNDLEID_APP_RELATIONSHIP: "get_bundleid_app_relationship",
    GET_BUNDLEID_CAPABILITIES_RELATIONSHIP: "get_bundleid_capabilities_relationship",
    GET_BUNDLEID_PROFILES_RELATIONSHIP: "get_bundleid_profiles_relationship",
}

export const PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS = {
    ENABLE_CAPABILITY: "enable_capability",
    DISABLE_CAPABILITY: "disable_capability",
    MODIFY_CAPABILITY: "modify_capability",
}

export const PROVISIONING_CERTIFICATES_METHODS = {
    CREATE_CERTIFICATE: "create_certificate",
    MODIFY_CERTIFICATE: "modify_certificate",
    LIST_AND_DOWNLOAD_CERTIFICATES: "list_and_download_certificates",
    READ_AND_DOWNLOAD_CERTIFICATE_INFORMATION: "read_and_download_certificate_information",
    LIST_PASSTYPEID_IDS_FOR_CERTIFICATE: "list_passtypeid_ids_for_certificate",
    GET_CERTIFICATE_PASSTYPEID_RELATIONSHIP: "get_certificate_passtypeid_relationship",
    REVOKE_CERTIFICATE: "revoke_certificate",
}

export const PROVISIONING_DEVICES_METHODS = {
    REGISTER_NEW_DEVICE: "register_new_device",
    LIST_DEVICES: "list_devices",
    READ_DEVICE_INFORMATION: "read_device_information",
    MODIFY_REGISTERED_DEVICE: "modify_registered_device",
}

export const PROVISIONING_PROFILES_METHODS = {
    CREATE_PROFILE: "create_profile",
    DELETE_PROFILE: "delete_profile",
    LIST_AND_DOWNLOAD_PROFILES: "list_and_download_profiles",
    READ_AND_DOWNLOAD_PROFILE_INFORMATION: "read_and_download_profile_information",
    READ_BUNDLE_ID_IN_PROFILE: "read_bundle_id_in_profile",
    GET_PROFILE_BUNDLEID_RELATIONSHIP: "get_profile_bundleid_relationship",
    LIST_PROFILE_CERTIFICATES: "list_profile_certificates",
    GET_PROFILE_CERTIFICATES_RELATIONSHIP: "get_profile_certificates_relationship",
    LIST_PROFILE_DEVICES: "list_profile_devices",
    GET_PROFILE_DEVICES_RELATIONSHIP: "get_profile_devices_relationship",
}

export const PROVISIONING_MERCHANT_IDS_METHODS = {
    MANAGE_MERCHANT_IDS_AND_CERTIFICATES: "manage_merchant_ids_and_certificates",
    LIST_MERCHANT_IDS: "list_merchant_ids",
    READ_MERCHANT_ID_DETAILS: "read_merchant_id_details",
    LIST_CERTIFICATES_FOR_MERCHANT_ID: "list_certificates_for_merchant_id",
    GET_MERCHANTID_CERTIFICATES_RELATIONSHIP: "get_merchantid_certificates_relationship",
    MODIFY_MERCHANT_IDS: "modify_merchant_ids",
    CREATE_MERCHANT_ID: "create_merchant_id",
    DELETE_MERCHANT_ID: "delete_merchant_id",
}

export const PROVISIONING_PASSTYPE_IDS_METHODS = {
    LIST_PASSTYPEID_IDS_FOR_CERTIFICATE_PI: "list_passtypeid_ids_for_certificate_pi",
    GET_CERTIFICATE_PASSTYPEID_RELATIONSHIP_DUP: "get_certificate_passtypeid_relationship_dup",
    LIST_PASSTYPEIDS: "list_passtypeids",
    READ_PASSTYPEID_INFORMATION: "read_passtypeid_information",
    LIST_CERTIFICATES_FOR_PASSTYPEID: "list_certificates_for_passtypeid",
    GET_PASSTYPEID_CERTIFICATES_RELATIONSHIP: "get_passtypeid_certificates_relationship",
    MODIFY_PASSTYPEID: "modify_passtypeid",
    CREATE_PASSTYPEID: "create_passtypeid",
    DELETE_PASSTYPEID: "delete_passtypeid",
}