import { Contractor } from 'src/app/entities/contractor'
export interface CreateContractorWithEmailUseCaseRequest {
  firstName: string
  lastName: string
  email: string
  password: string
}
export interface CreateContractorWithEmailUseCase {
  handle(data: CreateContractorWithEmailUseCaseRequest): Promise<Contractor>
}
