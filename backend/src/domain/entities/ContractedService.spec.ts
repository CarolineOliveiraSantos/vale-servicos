import { makeContractedService } from '../../../test/factories/makeContractedService'
import { ContractedService } from './ContractedService'

describe('ContractedService', () => {
  it('should be able create ContractedService', () => {
    expect(makeContractedService()).toBeInstanceOf(ContractedService)
  })
})
