import { faker } from '@faker-js/faker'

import {
  Contractor,
  ContractorProps,
} from '../../src/domain/entities/Contractor'
import { makePhone } from './makePhone'

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
