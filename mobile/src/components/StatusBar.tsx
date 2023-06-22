import { useColorMode } from '@/hooks/useColorMode'
import { useTheme } from '@/hooks/useTheme'
import { FC } from 'react'
import {
  StatusBar as ReactNativeStatusBar,
  StatusBarProps as ReactNativeStatusBarProps,
} from 'react-native'
export const StatusBar: FC<ReactNativeStatusBarProps> = (props) => {
  const { colors } = useTheme()
  const { themeMode } = useColorMode()
  return (
    <ReactNativeStatusBar
      translucent
      backgroundColor={colors['main-background']}
      barStyle={themeMode === 'light' ? 'dark-content' : 'light-content'}
      {...props}
    />
  )
}
