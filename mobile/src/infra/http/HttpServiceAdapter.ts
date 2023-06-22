import { HttpService, Options, Response } from '@/interfaces/HttpService'
import axios, { isAxiosError } from 'axios'

export class HttpServiceAdapter implements HttpService {
  async get<T = any>(url: string): Promise<Response<T>> {
    const { data, status } = await axios.get(url)
    return { data, statusCode: status }
  }

  async post<T = any>(url: string, options?: Options): Promise<Response<T>> {
    try {
      const { data, status } = await axios.post(url, options?.body)
      return { data, statusCode: status }
    } catch (error) {
      if (isAxiosError(error)) {
        return {
          data: error.response?.data,
          statusCode: error.response?.status || 500,
        }
      }
      throw error
    }
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
