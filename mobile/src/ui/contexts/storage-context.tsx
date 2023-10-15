import { type SecureStorage } from '@/data/protocols/storage/secure-storage'
import { type Storage } from '@/data/protocols/storage/storage'
import { ReactNativeMMKVAdapter } from '@/infra/storage/react-native-mmkv-adapter'
import { SecureStorageAdapter } from '@/infra/storage/SecureStorageAdapter'
import { type FC, type ReactNode, createContext } from 'react'

export interface IStorageContext {
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
