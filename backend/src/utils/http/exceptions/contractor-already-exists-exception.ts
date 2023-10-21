import { HttpStatus } from '@/helpers/http/http-status'

import { Exception } from './exception'

export class ContractorAlreadyExistsException extends Exception {
  constructor() {
    super('Contractor already exists')
    this.name = 'ContractorAlreadyExists'
    this.statusCode = HttpStatus.CONFLICT
  }
}
