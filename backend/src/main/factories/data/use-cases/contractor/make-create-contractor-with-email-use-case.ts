import { CreateContractorWithEmailUseCaseImpl } from '@/data/use-cases/contractor/create-contractor-with-email-use-case'
import { GenerateUUIDAdapter } from '@/infra/gateways/uuid/generate-uuid-adapter'
import { makeCreateContractorRepository } from '@/main/factories/infra/database/prisma/repositories/make-create-contractor-repository'
import { makeLoadContractorByEmailRepository } from '@/main/factories/infra/database/prisma/repositories/make-load-contractor-by-email-repository'

import { makeHash } from '../../protocols/make-hash'

export const makeCreateContractorWithEmailUseCase = () =>
  new CreateContractorWithEmailUseCaseImpl(
    makeCreateContractorRepository(),
    makeLoadContractorByEmailRepository(),
    makeHash(),
    new GenerateUUIDAdapter(),
  )
