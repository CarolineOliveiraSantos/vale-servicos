import { CreateContractorWithEmailUseCaseAdapter } from '@/app/use-cases/contractor/create-contractor-with-email-use-case'
import { CreateContractorWithEmailController } from '@/presentation/controller/contractor/create-contractor-with-email-controller'
import { BcryptAdapter } from 'src/infra/encrypt/bcrypt-adapter'

export class CreateContractorComposer {
  static route() {
    const bcryptAdapter = new BcryptAdapter(12)
    const createContractorWithEmailUseCaseAdapter =
      new CreateContractorWithEmailUseCaseAdapter()
    const createContractorWithEmailController =
      new CreateContractorWithEmailController()
  }
}
