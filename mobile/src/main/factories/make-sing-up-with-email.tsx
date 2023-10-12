import { SingUpWithEmailUseCaseImpl } from '@/data/use-cases/SingUpWithEmailUseCaseImpl'
import { useHttpClient } from '@/ui/hooks/use-http-client'
import { SingUpWithEmail } from '@/ui/pages/Authentication/pages/SingUpWithEmail/SingUpWithEmail'

export const MakeSingUpWithEmail = () => {
  const { httpClient } = useHttpClient()
  const singUpWithEmailUseCaseImpl = new SingUpWithEmailUseCaseImpl(httpClient)
  return <SingUpWithEmail singUpWithEmailUseCase={singUpWithEmailUseCaseImpl} />
}
