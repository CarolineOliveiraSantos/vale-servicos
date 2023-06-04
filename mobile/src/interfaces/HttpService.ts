export interface Response<T> {
  statusCode: number
  data: T
}
export interface Options {
  body: any
}
export interface HttpService {
  get<T = any>(url: string): Promise<Response<T>>
  post<T = any>(url: string, options?: Options): Promise<Response<T>>
  put<T = any>(url: string, options?: Options): Promise<Response<T>>
  delete<T = any>(url: string, options?: Options): Promise<Response<T>>
  patch<T = any>(url: string, options?: Options): Promise<Response<T>>
}
