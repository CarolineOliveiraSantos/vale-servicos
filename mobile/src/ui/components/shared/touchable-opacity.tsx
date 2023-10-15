import { type Theme } from '@/ui/styles/theme'
import {
  createRestyleComponent,
  type ColorProps,
  type OpacityProps,
  type VisibleProps,
  type TypographyProps,
  type SpacingProps,
  type TextShadowProps,
  type BackgroundColorProps,
  type LayoutProps,
  type BorderProps,
  type ShadowProps,
  type PositionProps,
  color,
  visible,
  typography,
  spacing,
  textShadow,
  backgroundColor,
  opacity,
  layout,
  border,
  shadow,
  position,
} from '@shopify/restyle'
import type React from 'react'
import {
  type TouchableOpacityProps as RNTouchableOpacityProps,
  TouchableOpacity as RNTouchableOpacity,
} from 'react-native'
export type BaseTouchableOpacityProps = ColorProps<Theme> &
  VisibleProps<Theme> &
  TypographyProps<Theme> &
  SpacingProps<Theme> &
  TextShadowProps<Theme> &
  BackgroundColorProps<Theme> &
  OpacityProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  ShadowProps<Theme> &
  PositionProps<Theme>
export const TouchableOpacity = createRestyleComponent<
  RNTouchableOpacityProps & BaseTouchableOpacityProps,
  Theme
>(
  [
    color,
    visible,
    typography,
    spacing,
    textShadow,
    backgroundColor,
    opacity,
    layout,
    border,
    shadow,
    position,
  ],
  RNTouchableOpacity,
)
export type TouchableOpacityProps = React.ComponentProps<
  typeof TouchableOpacity
>
