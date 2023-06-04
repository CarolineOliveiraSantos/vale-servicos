import { Text } from '@/components/primitives/Text'
import { View } from '@/components/primitives/View'
import { useTheme } from '@/hooks/useTheme'
import { FC, ReactNode } from 'react'
import {
  TouchableOpacity,
  AccessibilityProps,
  TouchableOpacityProps,
} from 'react-native'
export type ButtonProps = AccessibilityProps & {
  icon?: ReactNode
  title: string
  onPress: () => void
  style?: TouchableOpacityProps['style']
}

export const Button: FC<ButtonProps> = ({
  icon,
  title,
  style,
  onPress,
  ...props
}) => {
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      style={[{ width: '100%' }, style]}
      onPress={onPress}
      {...props}
    >
      <View
        style={{
          borderColor: colors.button.dashboard.border,
          borderRadius: 4,
          paddingHorizontal: 10,
          borderWidth: 1,
          height: 52,
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        {icon}
        <Text
          fontFamily="Roboto.400"
          style={{
            flex: 1,
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
