import { HttpStatus } from '@/helpers/http/http-status'
import { type HttpResponse } from '@/presentation/protocols/http-response'

import { ServerError } from '../errors/server-error'

export const badRequest = (body: any): HttpResponse => {
  return {
    body,
    statusCode: HttpStatus.BAD_REQUEST,
  }
}

export const ok = (body: any): HttpResponse => {
  return {
    body,
    statusCode: HttpStatus.OK,
  }
}

export const serverError = (): HttpResponse => {
  return {
    statusCode: HttpStatus.SERVER_ERROR,
    body: new ServerError(),
  }
}
