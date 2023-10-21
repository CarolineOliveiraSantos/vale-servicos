import { ContractedService } from '@/domain/entities/contracted-service'
import { faker } from '@faker-js/faker'

import { makeContractor } from './make-contractor'
import { makeRating } from './make-rating'
import { makeService } from './make-service'

export const makeContractedService = (
  contractedService: Partial<ContractedService> = {},
) => {
  return new ContractedService({
    id: faker.string.uuid(),
    contractor: makeContractor(),
    rating: makeRating(),
    service: makeService(),
    ...contractedService,
  })
}
