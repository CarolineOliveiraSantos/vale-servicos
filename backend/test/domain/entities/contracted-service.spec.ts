import { ContractedService } from 'src/app/entities/contracted-service'
import { makeContractedService } from '@/test/factories/make-contracted-service'

describe('ContractedService', () => {
  it('should be able create ContractedService', () => {
    expect(makeContractedService()).toBeInstanceOf(ContractedService)
  })
})
