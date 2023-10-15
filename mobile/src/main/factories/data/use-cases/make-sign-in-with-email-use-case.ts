import { SingInWithEmailUseCaseImpl } from '@/data/use-cases/sign-in-with-email-use-case-impl'

import { MakeHttpClient } from '../../infra/http/make-http-client'

export const MakeSignInWithEmailUseCase = () =>
  new SingInWithEmailUseCaseImpl(MakeHttpClient())
