import { faker } from '@faker-js/faker'

import { Contractor, ContractorProps } from '../../src/app/entities/contractor'
import { makePhone } from './make-phone'

export const makeContractor = (contractor: Partial<ContractorProps> = {}) => {
  return new Contractor({
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    password: faker.internet.password(),
    phone: makePhone(),
    ...contractor,
  })
}
