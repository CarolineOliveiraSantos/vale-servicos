import { faker } from '@faker-js/faker'

import {
  ServiceProviderProps,
  ServiceProvider,
} from '../../src/domain/entities/ServiceProvider'
import { makePhone } from './makePhone'

export const makeServiceProvider = (
  serviceProvider: Partial<ServiceProviderProps> = {},
) => {
  return new ServiceProvider({
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    password: faker.internet.password(),
    phone: makePhone(),
    ...serviceProvider,
  })
}
