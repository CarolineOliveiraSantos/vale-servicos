import { ContractorModel } from '@/domain/models/ContractorModel'
export interface SingUpWithEmailUseCaseBody {
  firstName: string
  lastName: string
  email: string
  password: string
}
export interface SingUpWithEmailUseCaseResponse {
  contractor: ContractorModel
  accessToken: string
  refreshToken: string
}

export interface SingUpWithEmailUseCase {
  singUp(
    body: SingUpWithEmailUseCaseBody,
  ): Promise<SingUpWithEmailUseCaseResponse>
}
