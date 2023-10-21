import { type Hash } from '@/data/protocols/encrypt/hash'
import { Contractor } from '@/domain/entities/contractor'
import { type CreateContractorRepository } from '@/domain/gateways/repositories/contractor/create-contractor-repository'
import { type LoadContractorByEmailRepository } from '@/domain/gateways/repositories/contractor/load-contractor-by-email-repository'
import { type GenerateUUID } from '@/domain/gateways/uuid/generate-uuid'
import {
  type ContractorWithEmailUseCaseDto,
  type CreateContractorWithEmailUseCase,
} from '@/domain/use-cases/contractor/create-contractor-with-email-use-case'
import { ContractorAlreadyExistsException } from '@/utils/http/exceptions/contractor-already-exists-exception'
export class CreateContractorWithEmailUseCaseImpl
  implements CreateContractorWithEmailUseCase
{
  constructor(
    private readonly createContractorRepository: CreateContractorRepository,
    private readonly loadContractorByEmailRepository: LoadContractorByEmailRepository,
    private readonly hash: Hash,
    private readonly generateUUID: GenerateUUID,
  ) {}

  async execute(data: ContractorWithEmailUseCaseDto): Promise<Contractor> {
    const contractorExists =
      await this.loadContractorByEmailRepository.findByEmail(data.email)
    if (contractorExists) {
      throw new ContractorAlreadyExistsException()
    }
    const passwordHash = await this.hash.hash(data.password)
    const contractor = new Contractor({
      id: await this.generateUUID.randomUUID(),
      firstName: data.firstName,
      email: data.email,
      lastName: data.lastName,
      password: passwordHash,
    })
    await this.createContractorRepository.create(contractor)
    return contractor
  }
}
