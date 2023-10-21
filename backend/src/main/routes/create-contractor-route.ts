import { makeExpressRouterAdapter } from '@/main/adapters/make-express-router-adapter'
import { type Router } from 'express'

import { makeCreateContractorWithEmailController } from '../factories/controller/contractor/make-create-contractor-with-email-controller'

export default function CreateContractorRoute(router: Router) {
  router.post(
    '/contractor/sing-up/email',
    makeExpressRouterAdapter(makeCreateContractorWithEmailController()),
  )
}
