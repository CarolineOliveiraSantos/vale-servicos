import { FC, ReactNode, createContext } from 'react'

import { Theme } from '../styles/Theme'
export type IThemeContext = typeof Theme
export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)
export interface IThemeProvider {
  children: ReactNode
}
export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  return <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
}
