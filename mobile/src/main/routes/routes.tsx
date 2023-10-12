import { useTheme } from '@/ui/hooks/use-theme'
import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'
export const Routes = () => {
  const { colors } = useTheme()
  return (
    <NavigationContainer
      theme={{
        colors: {
          primary: colors.primary,
          border: colors['input-border'],
          card: colors.primary,
          notification: colors.primary,
          background: colors['main-background'],
          text: colors['text-primary'],
        },
        dark: true,
      }}
    >
      <AppRoutes />
    </NavigationContainer>
  )
}
