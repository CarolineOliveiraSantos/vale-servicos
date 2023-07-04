import { Service } from 'src/app/entities/service'
import { makeService } from '@/test/factories/make-service'

describe('Service', () => {
  it('should be able create Service', () => {
    expect(makeService()).toBeInstanceOf(Service)
  })
})
