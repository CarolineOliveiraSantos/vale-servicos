import { PrismaService } from '@/infra/database/prisma/prisma-service'
import { PrismaLoadContractorByEmailRepository } from '@/infra/database/prisma/repositories/prisma-load-contractor-by-email-repository'

export const makeLoadContractorByEmailRepository = () =>
  new PrismaLoadContractorByEmailRepository(PrismaService.getInstance())
