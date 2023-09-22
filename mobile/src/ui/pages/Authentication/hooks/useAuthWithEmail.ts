import {
  SingUpWithEmailUseCase,
  SingUpWithEmailUseCaseDto,
} from '@/interfaces/use-cases/SingUpWithEmailUseCase'
import { useState } from 'react'

export interface UseAuthWithEmailProps {
  singUpWithEmailUseCase: SingUpWithEmailUseCase
}
export const useAuthWithEmail = ({
  singUpWithEmailUseCase,
}: UseAuthWithEmailProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const execute = async (dto: SingUpWithEmailUseCaseDto) => {
    try {
      setIsLoading(true)
      await singUpWithEmailUseCase.execute(dto)
    } finally {
      setIsLoading(false)
    }
  }
  return { execute, isLoading }
}
