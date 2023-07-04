import { Address } from '@/domain/entities/address'
import { makeAddress } from '@/test/factories/make-address'

describe('Address', () => {
  it('should be able create Address', () => {
    expect(makeAddress()).toBeInstanceOf(Address)
  })
})
