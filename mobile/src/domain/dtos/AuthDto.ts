import type { ContractorDto } from './ContractorDto'

export interface AuthDto {
  contractor: ContractorDto
  accessToken: string
  refreshToken: string
}
