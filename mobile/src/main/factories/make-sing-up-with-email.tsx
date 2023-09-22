import { SingUpWithEmailUseCaseImpl } from '@/domain/use-cases/SingUpWithEmailUseCaseImpl'
import { useHttpService } from '@/hooks/useHttpService'
import { SingUpWithEmail } from '@/ui/pages/Authentication/pages/SingUpWithEmail/SingUpWithEmail'

export const MakeSingUpWithEmail = () => {
  const { httpService } = useHttpService()
  const singUpWithEmailUseCaseImpl = new SingUpWithEmailUseCaseImpl(httpService)
  return <SingUpWithEmail singUpWithEmailUseCase={singUpWithEmailUseCaseImpl} />
}
