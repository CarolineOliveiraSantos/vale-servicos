import { HttpResponse } from '@/interfaces/http/http-response'

import { ServerError } from '../errors/server-error'
import { HttpStatusCode } from './http-status-code'

export class ResponseEntity {
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
