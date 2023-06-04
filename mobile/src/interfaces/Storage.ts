export interface Storage {
  getItem<T = any>(key: string): Promise<T | null>
  setItem(key: string, value: any): Promise<void>
  deleteItem(key: string): Promise<void>
}
