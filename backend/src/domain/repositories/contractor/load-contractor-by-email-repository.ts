import { Contractor } from 'src/app/entities/contractor'

export interface LoadContractorByEmailRepository {
  findByEmail(email: string): Promise<Contractor | null>
}
