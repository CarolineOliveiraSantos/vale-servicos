import { type Validation } from '@/presentation/protocols/validation'
import { EmailValidation } from '@/validation/validators/email-validation'
import { RequiredFieldValidation } from '@/validation/validators/required-field-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

import { makeEmailValidator } from '../../infra/validators/make-email-validator'

export const makeCreateContractorWithEmailControllerValidation =
  (): ValidationComposite => {
    const validations: Validation[] = []
    for (const field of ['email', 'firstName', 'lastName', 'password']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new EmailValidation('email', makeEmailValidator()))
    return new ValidationComposite(validations)
  }
