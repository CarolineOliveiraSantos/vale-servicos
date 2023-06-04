import { SecureStorage } from '@/interfaces/SecureStorage'
import * as ExpoSecureStore from 'expo-secure-store'
export class SecureStorageAdapter implements SecureStorage {
  async getItem<T = any>(key: string): Promise<T | null> {
    const item = await ExpoSecureStore.getItemAsync(key)
    if (!item) return null
    return JSON.parse(item)
  }

  async setItem(key: string, value: any): Promise<void> {
    await ExpoSecureStore.setItemAsync(key, JSON.stringify(value))
  }

  async deleteItem(key: string): Promise<void> {
    await ExpoSecureStore.deleteItemAsync(key)
  }
}
