export const ROUTE_USERS = '/v1/users';
export const ROUTE_USER_BY_ID = (userId: string) => `/v1/users/${userId}`;
export const ROUTE_USER_VISIBLE_APPS = (userId: string) => `/v1/users/${userId}/visibleApps`;
export const ROUTE_USER_VISIBLE_APPS_REL = (userId: string) => `/v1/users/${userId}/relationships/visibleApps`;

export const ROUTE_USER_INVITATIONS = '/v1/userInvitations';
export const ROUTE_USER_INVITATION_BY_ID = (invitationId: string) => `/v1/userInvitations/${invitationId}`;
export const ROUTE_USER_INVITATION_VISIBLE_APPS = (id: string) => `/v1/userInvitations/${id}/visibleApps`;
export const ROUTE_USER_INVITATION_VISIBLE_APP_RELATIONSHIPS = (id: string) => `/v1/userInvitations/${id}/relationships/visibleApps`;

export const ROUTE_SANDBOX_TESTERS = `/v2/sandboxTesters`;
export const ROUTE_SANDBOX_TESTERS_BY_ID = (sandBoxTesterId: string) => `/v2/sandboxTesters/${sandBoxTesterId}`;
export const ROUTE_SANDBOX_TESTERS_CLEAR_PURCHASE_HISTORY = "/v2/sandboxTestersClearPurchaseHistoryRequest";

export const ROUTE_BUNDLE_ID_CAPABILITY_BY_ID = (capabilityId: string) => `/v1/bundleIdCapabilities/${capabilityId}`;
export const ROUTE_BUNDLE_ID_CAPABILITIES = '/v1/bundleIdCapabilities';

export const ROUTE_BUNDLE_ID = '/v1/bundleIds';
export const ROUTE_BUNDLE_ID_BY_ID = (bundleId: string) => `/v1/bundleIds/${bundleId}`;
export const ROUTE_BUNDLE_ID_APP_RELATIONSHIPS = (bundleId: string) => `/v1/bundleIds/${bundleId}/app`;
export const ROUTE_BUNDLE_ID_PROFILES = (bundleId: string) => `/v1/bundleIds/${bundleId}/profiles`;
export const ROUTE_BUNDLE_ID_BUNDLE_ID_CAPABILITIES = (bundleId: string) => `/v1/bundleIds/${bundleId}/bundleIdCapabilities`;
export const ROUTE_BUNDLE_ID_RELATIONSHIPS_APPS = (bundleId: string) => `/v1/bundleIds/${bundleId}/relationships/app`;
export const ROUTE_BUNDLE_ID_BUNDLE_ID_CAPABILITIES_RELATIONSHIPS = (bundleId: string) => `/v1/bundleIds/${bundleId}/relationships/bundleIdCapabilities`;
export const ROUTE_BUNDLE_ID_PROFILES_RELATIONSHIPS = (bundleId: string) => `/v1/bundleIds/${bundleId}/relationships/profiles`;

export const ROUTE_CERTIFICATES = '/v1/certificates';
export const ROUTE_CERTIFICATE_BY_ID = (certificateId: string) => `/v1/certificates/${certificateId}`;
export const ROUTE_CERTIFICATE_PASSTYPE_ID = (certificateId: string) => `/v1/certificates/${certificateId}/passTypeId`;
export const ROUTE_CERTIFICATE_PASSTYPE_IDS_RELATIONSHIPS = (certificateId: string) => `/v1/certificates/${certificateId}/relationships/passTypeId`;

export const ROUTE_DEVICES = '/v1/devices';

export const ROUTE_PROFILE = '/v1/profiles';
export const ROUTE_PROFILE_BY_ID = (profileId: string) => `/v1/profiles/${profileId}`;
export const ROUTE_PROFILE_BUNDLE_ID = (profileId: string) => `/v1/profiles/${profileId}/bundleId`;
export const ROUTE_PROFILE_BUNDLE_ID_RELATIONSHIPS = (profileId: string) => `/v1/profiles/${profileId}/relationships/bundleId`;
export const ROUTE_PROFILE_CERTIFICATES = (profileId: string) => `/v1/profiles/${profileId}/certificates`;
export const ROUTE_PROFILE_CERTIFICATES_RELATIONSHIPS = (profileId: string) => `/v1/profiles/${profileId}/relationships/certificates`;
export const ROUTE_PROFILE_DEVICES = (profileId: string) => `/v1/profiles/${profileId}/devices`;
export const ROUTE_PROFILE_DEVICES_RELATIONSHIPS = (profileId: string) => `/v1/profiles/${profileId}/relationships/devices`;

//merchant id
export const ROUTE_MERCHANT_ID = '/v1/merchantIds';
export const ROUTE_MERCHANT_ID_BY_ID = (merchantId: string) => `/v1/merchantIds/${merchantId}`;
export const ROUTE_MERCHANT_ID_CERTIFICATES = (merchantId: string) => `/v1/merchantIds/${merchantId}/certificates`;
export const ROUTE_MERCHANT_ID_CERTIFICATES_RELATIONSHIPS = (merchantId: string) => `/v1/merchantIds/${merchantId}/relationships/certificates`;

//pass type id
export const ROUTE_PASSTYPE_ID = '/v1/passTypeIds';
export const ROUTE_READ_PASS_TYPE_ID_BY_ID = (passTypeId: string) => `/v1/passTypeIds/${passTypeId}`;
export const ROUTE_READ_ALL_CERTIFICATES_FOR_PASS_TYPE_ID = (passTypeId: string) => `/v1/passTypeIds/${passTypeId}/certificates`;
export const ROUTE_CERTIFICATES_RELATIONSHIPS_FOR_PASS_TYPE_ID = (passTypeId: string) => `/v1/passTypeIds/${passTypeId}/relationships/certificates`;


//apps
export const ROUTE_APPS = '/v1/apps';