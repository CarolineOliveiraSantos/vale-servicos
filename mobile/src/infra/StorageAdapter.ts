import { Storage } from '@/interfaces/Storage'
import { MMKV } from 'react-native-mmkv'
const storage = new MMKV()
export class StorageAdapter implements Storage {
  async getItem<T = any>(key: string): Promise<T | null> {
    const value = storage.getString(key)
    if (!value) return null
    return JSON.parse(value)
  }

  async setItem(key: string, value: any): Promise<void> {
    storage.set(key, JSON.stringify(value))
  }

  async deleteItem(key: string): Promise<void> {
    storage.delete(key)
  }
}
