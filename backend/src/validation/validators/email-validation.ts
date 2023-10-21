import { InvalidParamError } from '@/presentation/errors/invalid-param-error'
import {
  type Input,
  type Validation,
} from '@/presentation/protocols/validation'

import { type EmailValidator } from '../protocols/email-validator'

export class EmailValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly emailValidator: EmailValidator,
  ) {}

  async validate(input: Input): Promise<Error | null> {
    if (
      input[this.fieldName] ||
      input[this.fieldName] === '' ||
      input[this.fieldName] === 0 ||
      Number.isNaN(input[this.fieldName]) ||
      input[this.fieldName] === null ||
      input[this.fieldName] === false ||
      input[this.fieldName] === true
    ) {
      const isValid = await this.emailValidator.isValid(input[this.fieldName])
      if (!isValid) {
        return new InvalidParamError(this.fieldName)
      }
      return null
    }
    return null
  }
}
