export interface IAPIProps {
  url: string;
  token?: string;
  params?: object;
  data?: any;
  body?: object;
  options?: object;
  timeout?: number;
  headers?: {};
}

interface IAPIMeta {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface IAPIResponse<T> extends IAPIMeta {
  data: T;
}
