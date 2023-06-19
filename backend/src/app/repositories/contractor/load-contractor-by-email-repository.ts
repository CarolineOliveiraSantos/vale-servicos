import { Contractor } from '@/app/entities/contractor'

export interface LoadContractorByEmailRepository {
  findByEmail(email: string): Promise<Contractor | null>
}
