import { Contractor } from '@/domain/entities/contractor'

export interface CreateContractorRepository {
  create(contractor: Contractor): Promise<void>
}
