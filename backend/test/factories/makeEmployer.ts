import { Employer, EmployerProps } from '../../src/domain/entities/Employer'
import { makeAddress } from './makeAddress'

export const makeEmployer = (employer: Partial<EmployerProps> = {}) => {
  return new Employer({
    address: makeAddress(),
    email: 'any_email',
    firstName: 'any_firstName',
    lastName: 'any_lastName',
    password: 'any_password',
    telephone: 'any_telephone',
    ...employer,
  })
}
