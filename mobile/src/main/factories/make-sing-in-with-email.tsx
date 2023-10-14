import { SingUpWithEmailUseCaseImpl } from '@/data/use-cases/SingUpWithEmailUseCaseImpl'
import { useHttpClient } from '@/ui/hooks/use-http-client'
import { SignInWithEmail } from '@/ui/pages/authentication/pages/sign-in-with-email/sign-in-with-email'

export const MakeSingInWithEmail = () => {
  const { httpClient } = useHttpClient()
  const singUpWithEmailUseCaseImpl = new SingUpWithEmailUseCaseImpl(httpClient)
  return <SignInWithEmail singUpWithEmailUseCase={singUpWithEmailUseCaseImpl} />
}
