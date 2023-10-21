export interface Hash {
  hash(text: string): Promise<string>
}
