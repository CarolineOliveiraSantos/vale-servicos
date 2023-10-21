export type Input = Record<string, any>
export interface Validation<T = Input> {
  validate: (input: T) => Promise<Error | null>
}
