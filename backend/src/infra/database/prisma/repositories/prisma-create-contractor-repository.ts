import type { Contractor } from '@/domain/entities/contractor'
import type { CreateContractorRepository } from '@/domain/gateways/repositories/contractor/create-contractor-repository'

import { PrismaContractorMapper } from '../mappers/prisma-contractor-mapper'
import type { PrismaService } from '../prisma-service'

export class PrismaCreateContractorRepository
  implements CreateContractorRepository
{
  constructor(private readonly prismaService: PrismaService) {}
  async create(contractor: Contractor): Promise<void> {
    const rawContractor = PrismaContractorMapper.toPrisma(contractor)
    await this.prismaService.contractor.create({
      data: rawContractor,
    })
  }
}
