import { API_ENDPOINTS } from './endpoints.api';

const DEFAULT_API_VERSION = '/v1';
const ROOT_API_URL = process.env.ROOT_API_URL as string;

export const getFullApiUrl = (endpoint: API_ENDPOINTS, version = DEFAULT_API_VERSION): string => (
  `${ROOT_API_URL}${version}${endpoint}`
);
