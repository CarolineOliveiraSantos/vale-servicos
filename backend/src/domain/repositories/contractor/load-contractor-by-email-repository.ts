import { Contractor } from '@/domain/entities/contractor'

export interface LoadContractorByEmailRepository {
  findByEmail(email: string): Promise<Contractor | null>
}
