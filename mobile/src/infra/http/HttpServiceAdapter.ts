import { HttpService, Options, Response } from '@/interfaces/HttpService'
import axios from 'axios'

export class HttpServiceAdapter implements HttpService {
  async get<T = any>(url: string): Promise<Response<T>> {
    const { data, status } = await axios.get(url)
    return { data, statusCode: status }
  }

  async post<T = any>(url: string, options?: Options): Promise<Response<T>> {
    const { data, status } = await axios.post(url, options?.body)
    return { data, statusCode: status }
  }

  async put<T = any>(url: string, options?: Options): Promise<Response<T>> {
    const { data, status } = await axios.put(url, options?.body)
    return { data, statusCode: status }
  }

  async delete<T = any>(url: string, options?: Options): Promise<Response<T>> {
    const { data, status } = await axios.delete(url, options?.body)
    return { data, statusCode: status }
  }

  async patch<T = any>(url: string, options?: Options): Promise<Response<T>> {
    const { data, status } = await axios.patch(url, options?.body)
    return { data, statusCode: status }
  }
}
