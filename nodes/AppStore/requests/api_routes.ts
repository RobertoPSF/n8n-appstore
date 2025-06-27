export const ROUTE_USERS = '/v1/users';
export const ROUTE_USER_BY_ID = (userId: string) => `/v1/users/${userId}`;
export const ROUTE_USER_VISIBLE_APPS = (userId: string) => `/v1/users/${userId}/visibleApps`;
export const ROUTE_USER_VISIBLE_APPS_REL = (userId: string) => `/v1/users/${userId}/relationships/visibleApps`;
export const ROUTE_USER_INVITATIONS = '/v1/userInvitations';
export const ROUTE_USER_INVITATION_BY_ID = (invitationId: string) => `/v1/userInvitations/${invitationId}`;
export const ROUTE_SANDBOX_TESTERS = `/v2/sandboxTesters`;