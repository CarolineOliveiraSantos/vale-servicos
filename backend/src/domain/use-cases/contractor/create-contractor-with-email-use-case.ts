import { Contractor } from '@/domain/entities/contractor'
import { Either } from '@/shared/either'

import { HttpException } from '../../errors/http-exception'
export interface ContractorWithEmailUseCaseDto {
  firstName: string
  lastName: string
  email: string
  password: string
}
export interface CreateContractorWithEmailUseCase {
  execute(
    data: ContractorWithEmailUseCaseDto,
  ): Promise<Either<HttpException, Contractor>>
}
