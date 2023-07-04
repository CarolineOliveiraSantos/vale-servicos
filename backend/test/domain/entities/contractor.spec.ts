import { Contractor } from '@/domain/entities/contractor'
import { makeContractor } from '@/test/factories/make-contractor'

describe('Contractor', () => {
  it('should be able create Contractor', () => {
    expect(makeContractor()).toBeInstanceOf(Contractor)
  })
})
