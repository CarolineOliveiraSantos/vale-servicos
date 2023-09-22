import { ContractorModel } from '@/domain/models/ContractorModel'
export interface SingUpWithEmailUseCaseDto {
  email: string
  password: string
}
export interface SingUpWithEmailUseCaseResponse {
  contractor: ContractorModel
  accessToken: string
  refreshToken: string
}

export interface SingUpWithEmailUseCase {
  execute(
    body: SingUpWithEmailUseCaseDto,
  ): Promise<SingUpWithEmailUseCaseResponse>
}
