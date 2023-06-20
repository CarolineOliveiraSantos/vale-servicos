import { useTheme } from '@/hooks/useTheme'
import { FC } from 'react'
import {
  StatusBar as ReactNativeStatusBar,
  StatusBarProps as ReactNativeStatusBarProps,
} from 'react-native'
export const StatusBar: FC<ReactNativeStatusBarProps> = (props) => {
  const { colors } = useTheme()
  return (
    <ReactNativeStatusBar
      translucent
      backgroundColor={colors.mainBackground}
      barStyle="dark-content"
      {...props}
    />
  )
}
