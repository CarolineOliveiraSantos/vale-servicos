/* eslint-disable react-hooks/exhaustive-deps */
import { keys } from '@/constants/keys'
import { type Storage } from '@/data/protocols/storage/storage'
import { ThemeDark, ThemeLight } from '@/ui/styles/theme'
import { ThemeProvider } from '@shopify/restyle'
import { type FC, createContext, useEffect, useState } from 'react'
import { Appearance, useColorScheme } from 'react-native'
export type ColorModeType = 'dark' | 'light' | 'system'
export type ThemeModeType = 'dark' | 'light'
export interface ColorModeProviderProps extends React.PropsWithChildren {
  storage: Storage
}
export interface ColorModeContextProps {
  colorMode: ColorModeType
  themeMode: ThemeModeType
  changeToThemeDark: () => Promise<void>
  changeToThemeLight: () => Promise<void>
  changeToThemeSystem: () => Promise<void>
}
export const ColorModeContext = createContext<ColorModeContextProps>(
  {} as ColorModeContextProps,
)
export const ColorModeProvider: FC<ColorModeProviderProps> = ({
  children,
  storage,
}) => {
  const [themeMode, setThemeMode] = useState<ThemeModeType>('dark')
  const [colorMode, setColorMode] = useState<ColorModeType>('dark')
  const systemColorScheme = useColorScheme()

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
    if (systemColorScheme) {
      setThemeMode(systemColorScheme)
    } else {
      setThemeMode('light')
    }
    await storage.setItem<ColorModeType>(keys.COLOR_MODE, 'system')
  }
  useEffect(() => {
    const loadColorModeInStorage = async () => {
      await storage.deleteItem(keys.COLOR_MODE)
      const colorModeInStorage = await storage.getItem<ColorModeType>(
        keys.COLOR_MODE,
      )

      if (colorModeInStorage === 'dark') {
        await changeToThemeDark()
      } else if (colorModeInStorage === 'light') {
        await changeToThemeLight()
      } else if (colorModeInStorage === 'system') {
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
