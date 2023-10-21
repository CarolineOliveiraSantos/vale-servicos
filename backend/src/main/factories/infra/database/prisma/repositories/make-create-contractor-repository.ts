import { PrismaService } from '@/infra/database/prisma/prisma-service'
import { PrismaCreateContractorRepository } from '@/infra/database/prisma/repositories/prisma-create-contractor-repository'

export const makeCreateContractorRepository = () =>
  new PrismaCreateContractorRepository(PrismaService.getInstance())
