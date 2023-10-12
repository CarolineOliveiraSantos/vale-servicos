/* eslint-disable @typescript-eslint/no-explicit-any */
import { SecureStorage } from '@/data/protocols/storage/secure-storage'
import * as ExpoSecureStore from 'expo-secure-store'
export class SecureStorageAdapter implements SecureStorage {
  async getItem<T = any>(key: string): Promise<T | null> {
    const item = await ExpoSecureStore.getItemAsync(key)
    if (!item) return null
    return JSON.parse(item)
  }

  async setItem<T = any>(key: string, value: T): Promise<void> {
    await ExpoSecureStore.setItemAsync(key, JSON.stringify(value))
  }

  async deleteItem(key: string): Promise<void> {
    await ExpoSecureStore.deleteItemAsync(key)
  }
}
