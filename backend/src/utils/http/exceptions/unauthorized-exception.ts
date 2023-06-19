import { HttpStatusCode } from '@/helpers/http/http-status-code'

import { UnauthorizedError } from '../errors/unauthorized-error'
import { HttpException } from './http-exception'

export class UnauthorizedException extends HttpException {
  constructor() {
    const contractorAlreadyExists = new UnauthorizedError()
    super(HttpStatusCode.UNAUTHORIZED_ERROR, {
      error: contractorAlreadyExists.message,
      message: contractorAlreadyExists.message,
      cause: contractorAlreadyExists,
    })
    super.name = 'UnauthorizedException'
  }
}
