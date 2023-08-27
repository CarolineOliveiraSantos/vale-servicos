import { ServiceProps, Service } from '@/domain/entities/service'
import { makeServiceProvider } from './make-service-provider'
import { faker } from '@faker-js/faker'

export const makeService = (service: Partial<ServiceProps> = {}) => {
  return new Service({
    id: faker.string.uuid(),
    price: 100,
    serviceProvider: makeServiceProvider(),
    ...service,
  })
}
