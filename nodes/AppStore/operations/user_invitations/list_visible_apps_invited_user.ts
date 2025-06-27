import { appStoreGeneralRequest } from '../../requests/general_request';
import { ROUTE_USER_INVITATION_VISIBLE_APPS } from '../../requests/api_routes';

export async function list_visible_apps_invited_user(context: any, jwtToken: string) {
  const userId = context.getNodeParameter('userId', 0) as string;
  const limit = context.getNodeParameter('limit', 0, undefined) as number | undefined;
  const appsFields = context.getNodeParameter('appsFields', 0, undefined) as string[] | undefined;

  const params: Record<string, any> = {};
  if (limit) params.limit = limit;
  if (appsFields && appsFields.length > 0) {
    params['fields[apps]'] = appsFields.join(',');
  }

  const response = await appStoreGeneralRequest({
    method: 'GET',
    endpoint: ROUTE_USER_INVITATION_VISIBLE_APPS(userId),
    jwtToken,
    helpers: context.helpers,
    params,
  });

  return response.data || response;
}