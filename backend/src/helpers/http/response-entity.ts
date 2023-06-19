import { HttpResponse } from '@/interfaces/http/http-response'

import { ServerError } from '../errors/server-error'
import { HttpStatusCode } from './http-status-code'
export interface HttpResponseCustomErrorOptions {
  error: string
  message?: string | string[]
}
export class ResponseEntity {
  static customError(
    statusCode: number,
    options: HttpResponseCustomErrorOptions,
  ): HttpResponse {
    return {
      body: {
        statusCode,
        error: options.error,
        message: options.message,
      },
      statusCode,
    }
  }

  static badRequest(body: any): HttpResponse {
    return {
      body,
      statusCode: HttpStatusCode.BAD_REQUEST,
    }
  }

  static ok(body: any): HttpResponse {
    return {
      body,
      statusCode: HttpStatusCode.OK,
    }
  }

  static serverError(): HttpResponse {
    return {
      statusCode: HttpStatusCode.SERVER_ERROR,
      body: new ServerError().message,
    }
  }
}
