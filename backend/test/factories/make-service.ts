import { type ServiceProps, Service } from '@/domain/entities/service'
import { faker } from '@faker-js/faker'

import { makeServiceProvider } from './make-service-provider'

export const makeService = (service: Partial<ServiceProps> = {}) => {
  return new Service({
    id: faker.string.uuid(),
    price: 100,
    serviceProvider: makeServiceProvider(),
    ...service,
  })
}
