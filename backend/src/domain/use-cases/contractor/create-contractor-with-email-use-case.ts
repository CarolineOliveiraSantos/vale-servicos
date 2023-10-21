import { type Contractor } from '@/domain/entities/contractor'

export interface ContractorWithEmailUseCaseDto {
  firstName: string
  lastName: string
  email: string
  password: string
}
export interface CreateContractorWithEmailUseCase {
  execute: (data: ContractorWithEmailUseCaseDto) => Promise<Contractor>
}
