import { Service } from '@/domain/entities/service'
import { makeService } from '@/test/factories/make-service'

describe('Service', () => {
  it('should be able create Service', () => {
    expect(makeService()).toBeInstanceOf(Service)
  })
})
