import type {
  SignInWithEmailUseCase,
  SignInWithEmailUseCaseDto,
} from '@/domain/use-cases/sign-in-with-email-use-case'
import { useState } from 'react'

export interface UseAuthWithEmailProps {
  signInWithEmailUseCase: SignInWithEmailUseCase
}
export const useAuthWithEmail = ({
  signInWithEmailUseCase,
}: UseAuthWithEmailProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const execute = async (dto: SignInWithEmailUseCaseDto) => {
    try {
      setIsLoading(true)
      await signInWithEmailUseCase.execute(dto)
    } finally {
      setIsLoading(false)
    }
  }
  return { execute, isLoading }
}
