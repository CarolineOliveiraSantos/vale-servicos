import { CreateContractorWithEmailUseCaseAdapter } from '@/domain/use-cases/contractor/create-contractor-with-email-use-case'
import { PrismaService } from '@/infra/database/prisma/prisma-service'
import { PrismaCreateContractorRepository } from '@/infra/database/prisma/repositories/prisma-create-contractor-repository'
import { PrismaLoadContractorByEmailRepository } from '@/infra/database/prisma/repositories/prisma-load-contractor-by-email-repository'
import { BcryptAdapter } from '@/infra/encrypt/bcrypt-adapter'
import { CreateContractorWithEmailController } from '@/presentation/controller/contractor/create-contractor-with-email-controller'

export class CreateContractorComposer {
  static route() {
    const prismaCreateContractorRepository =
      new PrismaCreateContractorRepository(PrismaService.getInstance())
    const bcryptAdapter = new BcryptAdapter(12)
    const prismaLoadContractorByEmailRepository =
      new PrismaLoadContractorByEmailRepository(PrismaService.getInstance())
    const createContractorWithEmailUseCaseAdapter =
      new CreateContractorWithEmailUseCaseAdapter(
        prismaCreateContractorRepository,
        prismaLoadContractorByEmailRepository,
        bcryptAdapter,
      )
    const createContractorWithEmailController =
      new CreateContractorWithEmailController(
        createContractorWithEmailUseCaseAdapter,
      )
    return createContractorWithEmailController
  }
}
