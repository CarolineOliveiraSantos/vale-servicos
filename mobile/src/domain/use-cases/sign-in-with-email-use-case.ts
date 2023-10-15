import { type ContractorModel } from '@/domain/models/ContractorModel'
export interface SignInWithEmailUseCaseDto {
  email: string
  password: string
}
export interface SignInWithEmailUseCaseResponse {
  contractor: ContractorModel
  accessToken: string
  refreshToken: string
}

export interface SignInWithEmailUseCase {
  execute: (
    body: SignInWithEmailUseCaseDto,
  ) => Promise<SignInWithEmailUseCaseResponse>
}
