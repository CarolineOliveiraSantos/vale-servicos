import { ThemeDark, ThemeLight } from '@/styles/theme'
import { ThemeProvider } from '@shopify/restyle'
import { FC, ReactNode, createContext, useEffect, useState } from 'react'
import { Appearance } from 'react-native'

export interface IThemeProvider {
  children: ReactNode
}
export interface ColorModeContextProps {}
export const ColorModeContext = createContext<ColorModeContextProps>(
  {} as ColorModeContextProps,
)
export const ColorModeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  useEffect(() => {
    const colorScheme = Appearance.getColorScheme()
    if (colorScheme) {
      setTheme(colorScheme)
    }
  }, [])
  Appearance.addChangeListener(({ colorScheme }) => {
    if (colorScheme) {
      setTheme(colorScheme)
    }
  })
  return (
    <ThemeProvider theme={theme === 'dark' ? ThemeDark : ThemeLight}>
      {children}
    </ThemeProvider>
  )
}
