import { HttpClientContext } from '@/ui/contexts/http-client-context'
import { useContext } from 'react'

import { WithoutProviderError } from '../../domain/errors/without-provider-error'
export const useHttpClient = () => {
  const value = useContext(HttpClientContext)
  if (Object.keys(value).length === 0) {
    throw new WithoutProviderError(
      'useHttpClient must be used within an HttpClientProvider',
    )
  }
  return value
}
