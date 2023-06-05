import { ContractedService } from '../../src/domain/entities/ContractedService'
import { makeContractor } from './makeContractor'
import { makeRating } from './makeRating'
import { makeService } from './makeService'

export const makeContractedService = (
  contractedService: Partial<ContractedService> = {},
) => {
  return new ContractedService({
    contractor: makeContractor(),
    rating: makeRating(),
    service: makeService(),
    ...contractedService,
  })
}
