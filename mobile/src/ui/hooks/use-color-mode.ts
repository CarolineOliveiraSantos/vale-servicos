import { WithoutProviderError } from '@/domain/errors/without-provider-error'
import { ColorModeContext } from '@/ui/contexts/color-mode-context'
import { useContext } from 'react'
export const useColorMode = () => {
  const value = useContext(ColorModeContext)
  if (Object.keys(value).length === 0) {
    throw new WithoutProviderError(
      'useColorMode must be used within an ColorModeProvider',
    )
  }
  return value
}
