import { SignInWithEmail } from '@/ui/pages/authentication/sign-in-with-email/sign-in-with-email'

import { MakeSignInWithEmailUseCase } from './data/use-cases/make-sign-in-with-email-use-case'

export const MakeSingInWithEmail = () => {
  return (
    <SignInWithEmail signInWithEmailUseCase={MakeSignInWithEmailUseCase()} />
  )
}
