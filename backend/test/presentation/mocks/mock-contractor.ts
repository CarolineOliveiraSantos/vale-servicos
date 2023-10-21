import { type Contractor } from '@/domain/entities/contractor'
import {
  type ContractorWithEmailUseCaseDto,
  type CreateContractorWithEmailUseCase,
} from '@/domain/use-cases/contractor/create-contractor-with-email-use-case'
import { makeContractor } from '@/test/factories/make-contractor'

export class CreateContractorWithEmailUseCaseSpy
  implements CreateContractorWithEmailUseCase
{
  data: ContractorWithEmailUseCaseDto
  res = makeContractor()
  async execute(data: ContractorWithEmailUseCaseDto): Promise<Contractor> {
    this.data = data
    return this.res
  }
}
