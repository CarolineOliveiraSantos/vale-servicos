import { SecureStorageAdapter } from '@/infra/storage/SecureStorageAdapter'
import { StorageAdapter } from '@/infra/storage/StorageAdapter'
import { SecureStorage } from '@/interfaces/SecureStorage'
import { Storage } from '@/interfaces/Storage'
import { FC, ReactNode, createContext } from 'react'

export type IStorageContext = {
  storage: Storage
  secureStorage: SecureStorage
}
export const StorageContext = createContext<IStorageContext>(
  {} as IStorageContext,
)
export interface IStorageProvider {
  children: ReactNode
}
export const StorageProvider: FC<IStorageProvider> = ({ children }) => {
  const secureStorageAdapter = new SecureStorageAdapter()
  const storageAdapter = new StorageAdapter()

  return (
    <StorageContext.Provider
      value={{
        secureStorage: secureStorageAdapter,
        storage: storageAdapter,
      }}
    >
      {children}
    </StorageContext.Provider>
  )
}
