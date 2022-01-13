import { AxiosError, AxiosResponse } from 'axios';
import { FailResponseError, HttpMethodFailResponse, HttpMethodSuccessResponse } from './types.http';

export const httpSuccessResponseAdapter = <T>(responseDetails: AxiosResponse<T>): HttpMethodSuccessResponse<T> => ({
  statusCode: responseDetails.status,
  data: responseDetails.data,
});

export const httpFailResponseAdapter = (errorDetails: AxiosError<FailResponseError[]>): HttpMethodFailResponse => ({
  statusCode: errorDetails.response!.status,
  errors: errorDetails.response!.data,
});
