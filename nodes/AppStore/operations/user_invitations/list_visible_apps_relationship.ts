import { appStoreGeneralRequest } from '../../requests/general_request';
import { ROUTE_USER_INVITATION_VISIBLE_APP_RELATIONSHIPS } from '../../requests/api_routes';

export async function node_list_visible_apps_relationship(context: any, jwtToken: string) {
  const userId = context.getNodeParameter('userId', 0) as string;
  const limit = context.getNodeParameter('limit', 0, undefined) as number | undefined;

  const params: Record<string, any> = {};
  if (limit) params.limit = limit;

  const response = await appStoreGeneralRequest({
    method: 'GET',
    endpoint: ROUTE_USER_INVITATION_VISIBLE_APP_RELATIONSHIPS(userId),
    jwtToken,
    helpers: context.helpers,
    params,
  });

  return response.data || response;
}
