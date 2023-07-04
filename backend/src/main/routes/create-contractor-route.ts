import { ExpressRouterAdapter } from '@/main/adapters/express-router-adapter'
import { CreateContractorComposer } from '@/main/composers/contractor/create-contractor-composer'
import { Router } from 'express'

export default function CreateContractorRoute(router: Router) {
  router.post(
    '/contractor/sing-up/email',
    ExpressRouterAdapter.adapter(CreateContractorComposer.route()),
  )
}
