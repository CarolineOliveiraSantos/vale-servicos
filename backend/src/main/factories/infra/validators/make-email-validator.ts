import { EmailValidatorAdapter } from '@/infra/validators/email-validator-adapter'

export const makeEmailValidator = () => new EmailValidatorAdapter()
