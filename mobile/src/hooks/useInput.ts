import { InputContext } from '@/contexts/InputContext'
import { useContext } from 'react'

import { WithoutProviderError } from '../errors/WithoutProviderError'
export const useInput = () => {
  const value = useContext(InputContext)
  if (Object.keys(value).length === 0) {
    throw new WithoutProviderError(
      'useInput must be used within an InputProvider',
    )
  }
  return value
}
