import { Contractor } from 'src/app/entities/contractor'
import { LoadContractorByEmailRepository } from 'src/app/repositories/contractor/load-contractor-by-email-repository'
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
