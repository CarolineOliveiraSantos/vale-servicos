import { HttpStatusCode } from '@/helpers/http/http-status-code'

import { ContractorAlreadyExists } from '../errors/contractor-already-exists'
import { HttpException } from './http-exception'

export class ContractorAlreadyExistsException extends HttpException {
  constructor() {
    const contractorAlreadyExists = new ContractorAlreadyExists()
    super(HttpStatusCode.CONFLICT, {
      error: contractorAlreadyExists.message,
      message: contractorAlreadyExists.message,
      cause: contractorAlreadyExists,
    })
    super.name = 'ContractorAlreadyExistsException'
  }
}
