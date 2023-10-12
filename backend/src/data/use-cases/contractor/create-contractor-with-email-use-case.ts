import { Contractor } from '@/domain/entities/contractor'
import { HttpException } from '@/domain/errors/http-exception'
import { CreateContractorRepository } from '@/domain/gateways/repositories/contractor/create-contractor-repository'
import { LoadContractorByEmailRepository } from '@/domain/gateways/repositories/contractor/load-contractor-by-email-repository'
import {
  ContractorWithEmailUseCaseDto,
  CreateContractorWithEmailUseCase,
} from '@/domain/use-cases/contractor/create-contractor-with-email-use-case'
import { HttpStatusCode } from '@/helpers/http/http-status-code'
import { Hash } from '@/interfaces/encrypt/hash'
import { Either, left, right } from '@/shared/either'
import { ContractorAlreadyExists } from '@/utils/http/errors/contractor-already-exists'

export class CreateContractorWithEmailUseCaseImpl
  implements CreateContractorWithEmailUseCase
{
  constructor(
    private readonly createContractorRepository: CreateContractorRepository,
    private readonly loadContractorByEmailRepository: LoadContractorByEmailRepository,
    private readonly hash: Hash,
  ) {}

  async execute(
    data: ContractorWithEmailUseCaseDto,
  ): Promise<Either<HttpException, Contractor>> {
    const contractorExists =
      await this.loadContractorByEmailRepository.findByEmail(data.email)
    if (contractorExists) {
      return left({
        error: new ContractorAlreadyExists(),
        statusCode: HttpStatusCode.CONFLICT,
      })
    }
    const passwordHash = await this.hash.hash(data.password)
    const contractor = new Contractor({
      id: 'k',
      firstName: data.firstName,
      email: data.email,
      lastName: data.lastName,
      password: passwordHash,
    })
    await this.createContractorRepository.create(contractor)
    return right(contractor)
  }
}
