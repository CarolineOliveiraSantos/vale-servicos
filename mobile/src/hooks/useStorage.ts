import { StorageContext } from '@/contexts/StorageContext'
import { useContext } from 'react'

import { WithoutProviderError } from '../errors/WithoutProviderError'
export const useStorage = () => {
  const value = useContext(StorageContext)
  if (Object.keys(value).length === 0) {
    throw new WithoutProviderError(
      'useStorage must be used within an StorageProvider',
    )
  }
  return value
}
