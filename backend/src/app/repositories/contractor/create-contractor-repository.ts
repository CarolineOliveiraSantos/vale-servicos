import { Contractor } from '@/app/entities/contractor'

export interface CreateContractorRepository {
  create(contractor: Contractor): Promise<void>
}
