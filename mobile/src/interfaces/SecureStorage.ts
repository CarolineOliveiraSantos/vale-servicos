export interface SecureStorage {
  getItem<T = any>(key: string): Promise<T | null>
  setItem<T = any>(key: string, value: T): Promise<void>
  deleteItem(key: string): Promise<void>
}
