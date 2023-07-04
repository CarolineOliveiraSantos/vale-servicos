import { Contractor } from '@/domain/entities/contractor'
import { LoadContractorByEmailRepository } from '@/domain/repositories/contractor/load-contractor-by-email-repository'
import { PrismaService } from '../prisma-service'
import { PrismaContractorMapper } from '../mappers/prisma-contractor-mapper'

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
