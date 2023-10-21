import { Exception } from '@/utils/http/exceptions/exception'

import { serverError } from '../helpers/http-helpers'
import { type HttpResponse } from '../protocols/http-response'

export const exceptionHandler = (error: any): HttpResponse => {
  if (error instanceof Exception) {
    return {
      body: error.message,
      statusCode: error.statusCode,
    }
  }
  return serverError()
}
