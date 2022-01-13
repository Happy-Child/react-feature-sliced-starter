import axios, { AxiosResponse } from 'axios';
import qs from 'query-string';
import { isUndefined } from 'lodash';
import { httpFailResponseAdapter, httpSuccessResponseAdapter } from './adapters.http';
import { DefaultHttpReq, HttpMethodResponse } from './types.http';

const getQueryStr = (query: Record<string, unknown>): string => qs.stringify(query, { arrayFormat: 'bracket' });

export const httpGet = <Res, Req extends DefaultHttpReq>(
  url: string,
  query?: Req,
): HttpMethodResponse<Res> => {
  const finalUrl = isUndefined(query) ? url : `${url}?${getQueryStr(query)}`;
  return axios.get<Res>(finalUrl).then(httpSuccessResponseAdapter, httpFailResponseAdapter);
};

export const httpPost = <Res, Req extends DefaultHttpReq>(url: string, data?: Req): HttpMethodResponse<Res> => (
  axios.post<Res, AxiosResponse<Res>, Req>(url, data).then(httpSuccessResponseAdapter, httpFailResponseAdapter)
);

export const httpPut = <Res, Req extends DefaultHttpReq>(url: string, data?: Req): HttpMethodResponse<Res> => (
  axios.put<Res, AxiosResponse<Res>, Req>(url, data).then(httpSuccessResponseAdapter, httpFailResponseAdapter)
);

export const httpPatch = <Res, Req extends DefaultHttpReq>(url: string, data?: Req): HttpMethodResponse<Res> => (
  axios.patch<Res, AxiosResponse<Res>, Req>(url, data).then(httpSuccessResponseAdapter, httpFailResponseAdapter)
);

export const httpDelete = <Res, Req extends DefaultHttpReq>(url: string, data?: Req): HttpMethodResponse<Res> => (
  axios.delete<Res, AxiosResponse<Res>, Req>(url, data).then(httpSuccessResponseAdapter, httpFailResponseAdapter)
);
