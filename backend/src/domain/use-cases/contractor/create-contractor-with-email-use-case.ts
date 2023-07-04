import { Contractor } from '@/domain/entities/contractor'
import { CreateContractorRepository } from '@/domain/repositories/contractor/create-contractor-repository'
import { LoadContractorByEmailRepository } from '@/domain/repositories/contractor/load-contractor-by-email-repository'
import { Hash } from '@/interfaces/encrypt/hash'
import {
  CreateContractorWithEmailUseCase,
  CreateContractorWithEmailUseCaseRequest,
} from '@/interfaces/use-cases/contractor/create-contractor-with-email-use-case'
import { ContractorAlreadyExistsException } from '@/utils/http/exceptions/contractor-already-exists-exception'

export class CreateContractorWithEmailUseCaseAdapter
  implements CreateContractorWithEmailUseCase
{
  constructor(
    private readonly createContractorRepository: CreateContractorRepository,
    private readonly loadContractorByEmailRepository: LoadContractorByEmailRepository,
    private readonly hash: Hash,
  ) {}

  async handle(
    data: CreateContractorWithEmailUseCaseRequest,
  ): Promise<Contractor> {
    const contractorExists =
      await this.loadContractorByEmailRepository.findByEmail(data.email)
    if (contractorExists) {
      throw new ContractorAlreadyExistsException()
    }
    const passwordHash = await this.hash.hash(data.password)
    const contractor = new Contractor({
      firstName: data.firstName,
      email: data.email,
      lastName: data.lastName,
      password: passwordHash,
    })
    await this.createContractorRepository.create(contractor)
    return contractor
  }
}
