/* eslint-disable @typescript-eslint/no-explicit-any */
import { Storage } from '@/data/protocols/storage/storage'
import { MMKV } from 'react-native-mmkv'
const storage = new MMKV()
export class ReactNativeMMKVAdapter implements Storage {
  async getItem<T = any>(key: string): Promise<T | null> {
    const value = storage.getString(key)
    if (!value) return null
    return JSON.parse(value)
  }

  async setItem<T = any>(key: string, value: T): Promise<void> {
    storage.set(key, JSON.stringify(value))
  }

  async deleteItem(key: string): Promise<void> {
    storage.delete(key)
  }
}
