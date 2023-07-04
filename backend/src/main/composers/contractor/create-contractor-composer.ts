import { CreateContractorWithEmailUseCaseAdapter } from 'src/app/use-cases/contractor/create-contractor-with-email-use-case'
import { CreateContractorWithEmailController } from '@/presentation/controller/contractor/create-contractor-with-email-controller'
import { PrismaCreateContractorRepository } from '@/infra/database/prisma/repositories/prisma-create-contractor-repository'
import { BcryptAdapter } from '@/infra/encrypt/bcrypt-adapter'
import { PrismaService } from '@/infra/database/prisma/prisma-service'
import { PrismaLoadContractorByEmailRepository } from '@/infra/database/prisma/repositories/prisma-load-contractor-by-email-repository'

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
