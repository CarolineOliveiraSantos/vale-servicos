import { ServiceProps, Service } from '../../src/domain/entities/Service'
import { makeServiceProvider } from './makeServiceProvider'

export const makeService = (service: Partial<ServiceProps> = {}) => {
  return new Service({
    price: 100,
    serviceProvider: makeServiceProvider(),
    ...service,
  })
}
