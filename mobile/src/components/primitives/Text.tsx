import { useTheme } from '@/hooks/useTheme'
import { Theme } from '@/styles/Theme'
import { ThemeColors } from '@/styles/ThemeColors'
import { memo, forwardRef, ForwardRefRenderFunction } from 'react'
import { Text as RNText, TextProps as RNTextProps } from 'react-native'
export interface TextProps extends RNTextProps {
  color?: keyof typeof ThemeColors.text
  size?: keyof typeof Theme.textSize
  fontFamily?: keyof typeof Theme.fontFamily
}
const TextBase: ForwardRefRenderFunction<RNText, TextProps> = (
  {
    style,
    color = 'primary',
    size = 'md',
    fontFamily = 'Roboto.400',
    ...props
  },
  ref,
) => {
  const { colors, textSize } = useTheme()
  return (
    <RNText
      ref={ref}
      style={[
        {
          color: colors.text[color],
          fontSize: textSize[size].fontSize,
          lineHeight: textSize[size].lineHeight,
        },
        style,
      ]}
      {...props}
    />
  )
}
export const Text = memo(forwardRef(TextBase))
