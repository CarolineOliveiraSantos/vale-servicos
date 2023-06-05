import { ServiceProps, Service } from '../../src/app/entities/service'
import { makeServiceProvider } from './make-service-provider'

export const makeService = (service: Partial<ServiceProps> = {}) => {
  return new Service({
    price: 100,
    serviceProvider: makeServiceProvider(),
    ...service,
  })
}
