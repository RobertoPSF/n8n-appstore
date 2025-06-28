import { IExecuteFunctions } from 'n8n-workflow';
import { appStoreGeneralRequest } from '../../../requests/general_request';
import { ROUTE_DEVICES } from '../../../requests/api_routes';

export async function node_list_devices(
  context: IExecuteFunctions,
  jwtToken: string,
) {
  const raw = {
    deviceId:   context.getNodeParameter('deviceId', 0, '') as string,
    deviceName: context.getNodeParameter('deviceName', 0, '') as string,
    platform:   context.getNodeParameter('platform', 0, '') as string,
    status:     context.getNodeParameter('status', 0, '') as string,
    udid:       context.getNodeParameter('udid', 0, '') as string,
    sortBy:     context.getNodeParameter('sortBy', 0, '') as string,
    fields:     context.getNodeParameter('fieldsDevices', 0, []) as string[],
    limit:      context.getNodeParameter('limit', 0, '') as string | number,
  };

  const query: Record<string, string | number> = {};
  if (raw.deviceId)   query['filter[id]']       = raw.deviceId;
  if (raw.deviceName) query['filter[name]']     = raw.deviceName;
  if (raw.platform)   query['filter[platform]'] = raw.platform;
  if (raw.status)     query['filter[status]']   = raw.status;
  if (raw.udid)       query['filter[udid]']     = raw.udid;
  if (raw.sortBy)     query['sort']             = raw.sortBy;
  if (raw.fields.length) query['fields[devices]'] = raw.fields.join(',');
  if (raw.limit)      query['limit']            = raw.limit;

  const { data } = await appStoreGeneralRequest({
    method: 'GET',
    endpoint: ROUTE_DEVICES,
    jwtToken,
    params: query,
    helpers: context.helpers,
  });

  return data;
}
