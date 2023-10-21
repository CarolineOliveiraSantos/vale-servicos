import { CreateContractorWithEmailController } from '@/presentation/controller/contractor/create-contractor-with-email-controller'

import { makeCreateContractorWithEmailUseCase } from '../../data/use-cases/contractor/make-create-contractor-with-email-use-case'
import { makeCreateContractorWithEmailControllerValidation } from './make-create-contractor-with-email-controller-validation'

export const makeCreateContractorWithEmailController = () =>
  new CreateContractorWithEmailController(
    makeCreateContractorWithEmailUseCase(),
    makeCreateContractorWithEmailControllerValidation(),
  )
