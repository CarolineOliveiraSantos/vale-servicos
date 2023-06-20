import { keys } from '@/constants/keys'
import {
  ColorModeProviderProps,
  ColorModeContext,
  ColorModeType,
  ThemeModeType,
} from '@/contexts/ColorModeContext'
import { useStorage } from '@/hooks/useStorage'
import { ThemeDark, ThemeLight } from '@/styles/theme'
import { ThemeProvider } from '@shopify/restyle'
import { FC, useState } from 'react'
import { useColorScheme, Appearance } from 'react-native'
export const ColorModeProviderMock: FC<ColorModeProviderProps> = ({
  children,
}) => {
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
    await storage.setItem<ColorModeType>(keys.COLOR_MODE, 'light')
  }

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
