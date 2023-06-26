import { ReactNativeMMKVAdapter } from '@/infra/storage/ReactNativeMmkvAdapter'
import { SecureStorageAdapter } from '@/infra/storage/SecureStorageAdapter'
import { SecureStorage } from '@/interfaces/storage/SecureStorage'
import { Storage } from '@/interfaces/storage/Storage'
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
  const reactNativeMMKVAdapter = new ReactNativeMMKVAdapter()

  return (
    <StorageContext.Provider
      value={{
        secureStorage: secureStorageAdapter,
        storage: reactNativeMMKVAdapter,
      }}
    >
      {children}
    </StorageContext.Provider>
  )
}
