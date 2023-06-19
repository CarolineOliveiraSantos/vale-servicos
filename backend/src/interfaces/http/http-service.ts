export interface HttpServiceOptionsHeaders {
  Authorization: string
}
export interface HttpServiceResponse<T> {
  data: T
  statusCode: number
}
export interface HttpServiceOptions {
  headers?: HttpServiceOptionsHeaders
  params?: object
}
export interface HttpService {
  get<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>>
}
