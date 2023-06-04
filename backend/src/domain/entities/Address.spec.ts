import { makeAddress } from '../../../test/factories/makeAddress'
import { Address } from './Address'

describe('Address', () => {
  it('should be able create Address', () => {
    expect(makeAddress()).toBeInstanceOf(Address)
  })
})
