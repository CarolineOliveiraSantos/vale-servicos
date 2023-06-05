import { ContractedService } from '../../src/app/entities/contracted-service'
import { makeContractor } from './make-contractor'
import { makeRating } from './make-rating'
import { makeService } from './make-service'

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
