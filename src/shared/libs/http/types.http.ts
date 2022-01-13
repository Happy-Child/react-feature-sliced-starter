export interface FailResponseError {
  readonly field: string | number;
  readonly messages: string[];
  readonly children?: FailResponseError[];
}

export interface HttpMethodSuccessResponse<T> {
  readonly statusCode: number;
  readonly data: T;
}

export interface HttpMethodFailResponse {
  readonly statusCode: number;
  readonly errors: FailResponseError[],
}

export type HttpMethodResponse<Res> = Promise<HttpMethodSuccessResponse<Res> | HttpMethodFailResponse>;

export type DefaultHttpReq = Record<string, unknown> | undefined;

export type HttpMethod<Res, Req extends DefaultHttpReq> = (data: Req) => HttpMethodResponse<Res>;
