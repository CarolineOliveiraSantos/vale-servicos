import { Contractor } from 'src/app/entities/contractor'

export interface CreateContractorRepository {
  create(contractor: Contractor): Promise<void>
}
