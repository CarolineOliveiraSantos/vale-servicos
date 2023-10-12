/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Storage {
  getItem<T = any>(key: string): Promise<T | null>
  setItem<T = any>(key: string, value: T): Promise<void>
  deleteItem(key: string): Promise<void>
}
