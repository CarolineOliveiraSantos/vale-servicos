import { FC } from 'react'
import {
  StatusBar as ReactNativeStatusBar,
  StatusBarProps as ReactNativeStatusBarProps,
} from 'react-native'
export const StatusBar: FC<ReactNativeStatusBarProps> = (props) => {
  return (
    <ReactNativeStatusBar
      translucent
      backgroundColor="transparent"
      barStyle="dark-content"
      {...props}
    />
  )
}
