import { HttpServiceContext } from '@/contexts/HttpServiceContext'
import { useContext } from 'react'

import { WithoutProviderError } from '../domain/errors/WithoutProviderError'
export const useHttpService = () => {
  const value = useContext(HttpServiceContext)
  if (Object.keys(value).length === 0) {
    throw new WithoutProviderError(
      'useHttpService must be used within an HttpServiceProvider',
    )
  }
  return value
}
