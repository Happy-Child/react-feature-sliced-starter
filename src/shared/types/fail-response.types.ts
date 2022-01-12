export interface FailResponseDetail {
  readonly field: string | number;
  readonly messages: string[];
  readonly children?: FailResponseDetail[];
}

export interface FailResponse {
  readonly errors: FailResponseDetail[],
}
