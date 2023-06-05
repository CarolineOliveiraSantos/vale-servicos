import { makeContractor } from '../../../test/factories/makeContractor'
import { Contractor } from './Contractor'

describe('Contractor', () => {
  it('should be able create Contractor', () => {
    expect(makeContractor()).toBeInstanceOf(Contractor)
  })
})
