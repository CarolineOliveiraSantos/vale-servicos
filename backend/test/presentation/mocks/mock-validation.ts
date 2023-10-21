import {
  type Input,
  type Validation,
} from '@/presentation/protocols/validation'

export class ValidationSpy implements Validation {
  input: Input
  error: Error | null = null
  async validate(input: Input): Promise<Error | null> {
    this.input = input
    return this.error
  }
}
