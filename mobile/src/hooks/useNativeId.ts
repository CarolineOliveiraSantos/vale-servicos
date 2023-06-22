import { useId } from 'react'
export const useNativeId = (name: string) => {
  const id = useId()
  return name + id
}
