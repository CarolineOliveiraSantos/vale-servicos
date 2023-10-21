export interface HashCompare {
  compare(hash: string, text: string): Promise<boolean>
}
