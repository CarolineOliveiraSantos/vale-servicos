import { HttpClientContext } from '@/ui/contexts/http-client-context'
import { useContext } from 'react'

import { WithoutProviderError } from '../../domain/errors/WithoutProviderError'
export const useHttpClient = () => {
  const value = useContext(HttpClientContext)
  if (Object.keys(value).length === 0) {
    throw new WithoutProviderError(
      'useHttpService must be used within an HttpServiceProvider',
    )
  }
  return value
}
