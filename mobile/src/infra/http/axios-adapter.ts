/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  type HttpClient,
  type Options,
  type Response,
} from '@/data/protocols/http/http-client'
import { UnexpectedError } from '@/domain/errors/UnexpectedError'
import axios, { isAxiosError } from 'axios'

export class AxiosAdapter implements HttpClient {
  async get<T = any>(url: string): Promise<Response<T>> {
    try {
      const { data, status } = await axios.get(url)
      return { data, statusCode: status }
    } catch (error) {
      if (isAxiosError(error)) {
        return {
          data: error.response?.data,
          statusCode: error.response?.status ?? 500,
        }
      }
      throw new UnexpectedError()
    }
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
      throw new UnexpectedError()
    }
  }

  async put<T = any>(url: string, options?: Options): Promise<Response<T>> {
    try {
      const { data, status } = await axios.put(url, options?.body)
      return { data, statusCode: status }
    } catch (error) {
      if (isAxiosError(error)) {
        return {
          data: error.response?.data,
          statusCode: error.response?.status || 500,
        }
      }
      throw new UnexpectedError()
    }
  }

  async delete<T = any>(url: string, options?: Options): Promise<Response<T>> {
    try {
      const { data, status } = await axios.delete(url, options?.body)
      return { data, statusCode: status }
    } catch (error) {
      if (isAxiosError(error)) {
        return {
          data: error.response?.data,
          statusCode: error.response?.status || 500,
        }
      }
      throw new UnexpectedError()
    }
  }

  async patch<T = any>(url: string, options?: Options): Promise<Response<T>> {
    try {
      const { data, status } = await axios.patch(url, options?.body)
      return { data, statusCode: status }
    } catch (error) {
      if (isAxiosError(error)) {
        return {
          data: error.response?.data,
          statusCode: error.response?.status || 500,
        }
      }
      throw new UnexpectedError()
    }
  }
}
