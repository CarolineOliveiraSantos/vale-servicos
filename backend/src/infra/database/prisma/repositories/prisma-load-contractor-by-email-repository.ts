import { type Contractor } from '@/domain/entities/contractor'
import { type LoadContractorByEmailRepository } from '@/domain/gateways/repositories/contractor/load-contractor-by-email-repository'

import { PrismaContractorMapper } from '../mappers/prisma-contractor-mapper'
import { type PrismaService } from '../prisma-service'

export class PrismaLoadContractorByEmailRepository
  implements LoadContractorByEmailRepository
{
  constructor(private readonly prismaService: PrismaService) {}
  async findByEmail(email: string): Promise<Contractor | null> {
    const rawContractor = await this.prismaService.contractor.findUnique({
      where: { email },
    })
    if (!rawContractor) {
      return null
    }
    return PrismaContractorMapper.toDomain(rawContractor)
  }
}
