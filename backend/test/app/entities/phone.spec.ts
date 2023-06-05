import { Phone } from '@/app/entities/phone'
import { makePhone } from '@/test/factories/make-phone'

describe('Phone', () => {
  it('should be able create Phone', () => {
    expect(makePhone()).toBeInstanceOf(Phone)
  })
})
