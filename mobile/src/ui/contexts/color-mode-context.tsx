/* eslint-disable react-hooks/exhaustive-deps */
import { keys } from '@/constants/keys'
import { useStorage } from '@/ui/hooks/use-storage'
import { ThemeDark, ThemeLight } from '@/ui/styles/theme'
import { ThemeProvider } from '@shopify/restyle'
import { FC, ReactNode, createContext, useEffect, useState } from 'react'
import { Appearance, useColorScheme } from 'react-native'
export type ColorModeType = 'dark' | 'light' | 'system'
export type ThemeModeType = 'dark' | 'light'
export interface ColorModeProviderProps {
  children: ReactNode
}
export interface ColorModeContextProps {
  colorMode: ColorModeType
  themeMode: ThemeModeType
  changeToThemeDark(): Promise<void>
  changeToThemeLight(): Promise<void>
  changeToThemeSystem(): Promise<void>
}
export const ColorModeContext = createContext<ColorModeContextProps>(
  {} as ColorModeContextProps,
)
export const ColorModeProvider: FC<ColorModeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeModeType>('dark')
  const [colorMode, setColorMode] = useState<ColorModeType>('dark')

  const { storage } = useStorage()
  const colorScheme = useColorScheme()

  Appearance.addChangeListener(({ colorScheme }) => {
    if (colorScheme && colorMode === 'system') {
      setThemeMode(colorScheme)
    }
  })
  const changeToThemeDark = async () => {
    setColorMode('dark')
    setThemeMode('dark')
    await storage.setItem<ColorModeType>(keys.COLOR_MODE, 'dark')
  }
  const changeToThemeLight = async () => {
    setColorMode('light')
    setThemeMode('light')
    await storage.setItem<ColorModeType>(keys.COLOR_MODE, 'light')
  }
  const changeToThemeSystem = async () => {
    setColorMode('system')
    if (colorScheme) {
      setThemeMode(colorScheme)
    } else {
      setThemeMode('light')
    }
    await storage.setItem<ColorModeType>(keys.COLOR_MODE, 'system')
  }
  useEffect(() => {
    const loadColorModeInStorage = async () => {
      await storage.deleteItem(keys.COLOR_MODE)
      const colorMode = await storage.getItem<ColorModeType>(keys.COLOR_MODE)
      if (colorMode === 'dark') {
        await changeToThemeDark()
      } else if (colorMode === 'light') {
        await changeToThemeLight()
      } else if (colorMode === 'system') {
        await changeToThemeSystem()
      } else {
        await changeToThemeSystem()
      }
    }
    loadColorModeInStorage()
  }, [])

  return (
    <ColorModeContext.Provider
      value={{
        changeToThemeDark,
        changeToThemeLight,
        changeToThemeSystem,
        colorMode,
        themeMode,
      }}
    >
      <ThemeProvider theme={themeMode === 'dark' ? ThemeDark : ThemeLight}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
