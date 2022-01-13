import { HttpMethod, HttpMethodResponse, httpPost } from '../../http';
import { getFullApiUrl } from '../urls.api';
import { API_ENDPOINTS } from '../endpoints.api';

export type SignInRequest = {
  readonly email: string;
  readonly password: string;
}

export type SignInResponse = HttpMethodResponse<{ readonly name: string; }>

export const callSignInApi: HttpMethod<SignInResponse, SignInRequest> = (
  body,
) => httpPost(getFullApiUrl(API_ENDPOINTS.SIGN_IN), body);
