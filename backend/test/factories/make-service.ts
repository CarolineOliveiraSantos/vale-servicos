import { ServiceProps, Service } from '@/domain/entities/service'
import { makeServiceProvider } from './make-service-provider'

export const makeService = (service: Partial<ServiceProps> = {}) => {
  return new Service({
    price: 100,
    serviceProvider: makeServiceProvider(),
    ...service,
  })
}
