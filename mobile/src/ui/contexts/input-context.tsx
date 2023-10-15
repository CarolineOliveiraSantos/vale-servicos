import { type FC, type ReactNode, createContext, useState } from 'react'

export interface IInputContext {
  changeToFocus: () => void
  changeWithoutFocus: () => void
  isFocus: boolean
}
export const InputContext = createContext<IInputContext>({} as IInputContext)
export interface IInputProvider {
  children: ReactNode
}
export const InputProvider: FC<IInputProvider> = ({ children }) => {
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const changeWithoutFocus = () => {
    setIsFocus(false)
  }
  const changeToFocus = () => {
    setIsFocus(true)
  }
  return (
    <InputContext.Provider
      value={{
        changeToFocus,
        changeWithoutFocus,
        isFocus,
      }}
    >
      {children}
    </InputContext.Provider>
  )
}
