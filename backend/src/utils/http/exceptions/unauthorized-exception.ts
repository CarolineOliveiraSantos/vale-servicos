import { HttpStatus } from '@/helpers/http/http-status'

import { Exception } from './exception'

export class UnauthorizedException extends Exception {
  constructor() {
    super('Unauthorized')
    this.name = 'UnauthorizedError'
    this.statusCode = HttpStatus.UNAUTHORIZED_ERROR
  }
}
