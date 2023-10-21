export interface HttpClientOptionsHeaders {
  Authorization: string
}
export interface HttpClientResponse<T> {
  data: T
  statusCode: number
}
export interface HttpClientOptions {
  headers?: HttpClientOptionsHeaders
  params?: object
}
export interface HttpClient {
  get: <T = any>(
    url: string,
    options?: HttpClientOptions,
  ) => Promise<HttpClientResponse<T>>
}
