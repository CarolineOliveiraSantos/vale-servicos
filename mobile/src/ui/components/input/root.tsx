/* eslint-disable react-native/no-inline-styles */
import { InputProvider } from '@/ui/contexts/input-context'
import { useInput } from '@/ui/hooks/use-input'
import { useTheme } from '@/ui/hooks/use-theme'
import { type FC, useEffect, useId } from 'react'
import { type ViewProps } from 'react-native'
import Animated, {
  type AnimateProps,
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

import { Text } from '../shared/text'
export interface RootProps extends AnimateProps<ViewProps> {
  _focus?: AnimateProps<ViewProps>['style']
  errorMessage?: string
  label?: string
}
export const RootBase: FC<RootProps> = ({
  errorMessage,
  style,
  _focus,
  label,
  ...props
}) => {
  const { isFocus } = useInput()
  const animatedBorder = useSharedValue<number>(0)
  const animatedColor = useSharedValue<number>(0)

  useEffect(() => {
    animatedBorder.value = withSpring(isFocus ? 2 : 0, { duration: 1000 })
  }, [animatedBorder, isFocus])
  useEffect(() => {
    animatedColor.value = withTiming(errorMessage ? 1 : 0)
  }, [animatedColor, errorMessage])
  const theme = useTheme()
  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderWidth: interpolate(
        animatedBorder.value,
        [0, 2],
        [0, 2],
        Extrapolate.CLAMP,
      ),
      borderColor: interpolateColor(
        animatedColor.value,
        [0, 1],
        [theme.colors['input-border'], theme.colors.error],
      ),
    }
  }, [isFocus])
  const id = useId()
  return (
    <>
      {label ? (
        <Text nativeID={id} variant="body">
          {label}
        </Text>
      ) : null}
      <Animated.View
        {...props}
        accessibilityLabelledBy={id}
        aria-labelledby={id}
        style={[
          {
            backgroundColor: theme.colors['input-background'],
            paddingHorizontal: theme.spacing.sm,
            borderRadius: theme.borderRadii['rounded-lg'],
            height: 52,
            flexDirection: 'row',
            alignItems: 'center',
            gap: theme.spacing.md,
          },
          animatedStyle,
          style,
          isFocus ? _focus : {},
        ]}
      />
      {errorMessage ? <Text variant="error">{errorMessage}</Text> : null}
    </>
  )
}
export const Root: FC<RootProps> = (props) => {
  return (
    <InputProvider>
      <RootBase {...props} />
    </InputProvider>
  )
}
