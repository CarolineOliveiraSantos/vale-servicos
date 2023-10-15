import { ColorModeContext } from '@/ui/contexts/color-mode-context'
import { ThemeLight } from '@/ui/styles/theme'
import { ThemeProvider } from '@shopify/restyle'
import type React from 'react'
import { type FC } from 'react'
export const ColorModeProviderMock: FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ColorModeContext.Provider
      value={{
        changeToThemeDark: async () => {},
        changeToThemeLight: async () => {},
        changeToThemeSystem: async () => {},
        colorMode: 'light',
        themeMode: 'dark',
      }}
    >
      <ThemeProvider theme={ThemeLight}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
