import { MissingParamError } from '@/presentation/errors/missing-param-error'
import {
  type Input,
  type Validation,
} from '@/presentation/protocols/validation'

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}
  async validate(input: Input): Promise<Error | null> {
    if (input[this.fieldName]) {
      return null
    }
    return new MissingParamError(this.fieldName)
  }
}
