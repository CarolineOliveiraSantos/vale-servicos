import { makeService } from '../../../test/factories/makeService'
import { Service } from './Service'

describe('Service', () => {
  it('should be able create Service', () => {
    expect(makeService()).toBeInstanceOf(Service)
  })
})
