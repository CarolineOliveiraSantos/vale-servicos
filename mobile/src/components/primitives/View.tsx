import { useTheme } from '@/hooks/useTheme'
import { ThemeColors } from '@/styles/ThemeColors'
import { memo, forwardRef, ForwardRefRenderFunction } from 'react'
import { View as RNView, ViewProps as RNViewProps } from 'react-native'
export interface ViewProps extends RNViewProps {
  backgroundColor?: keyof typeof ThemeColors.bg
}
const ViewBase: ForwardRefRenderFunction<RNView, ViewProps> = (
  { style, backgroundColor = 'primary', ...props },
  ref,
) => {
  const { colors } = useTheme()
  return (
    <RNView
      ref={ref}
      style={[{ backgroundColor: colors.bg[backgroundColor] }, style]}
      {...props}
    />
  )
}
export const View = memo(forwardRef(ViewBase))
