import { faker } from '@faker-js/faker'

import {
  ServiceProviderProps,
  ServiceProvider,
} from '@/domain/entities/service-provider'
import { makePhone } from './make-phone'

export const makeServiceProvider = (
  serviceProvider: Partial<ServiceProviderProps> = {},
) => {
  return new ServiceProvider({
    id: faker.string.uuid(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    password: faker.internet.password(),
    phone: makePhone(),
    ...serviceProvider,
  })
}
