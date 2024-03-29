import { ServiceProvider } from '@/domain/entities/service-provider'
import { makeServiceProvider } from '@/test/factories/make-service-provider'

describe('ServiceProvider', () => {
  it('should be able create ServiceProvider', () => {
    expect(makeServiceProvider()).toBeInstanceOf(ServiceProvider)
  })
})
