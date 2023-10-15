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
  type KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
} from 'react-native'
export type BaseKeyboardAvoidingViewProps = ColorProps<Theme> &
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
export const KeyboardAvoidingView = createRestyleComponent<
  RNKeyboardAvoidingViewProps & BaseKeyboardAvoidingViewProps,
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
  RNKeyboardAvoidingView,
)
export type KeyboardAvoidingViewProps = React.ComponentProps<
  typeof KeyboardAvoidingView
>
