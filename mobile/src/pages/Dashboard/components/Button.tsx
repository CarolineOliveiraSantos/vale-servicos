import { Text } from '@/components/primitives/Text'
import { View } from '@/components/primitives/View'
import { useTheme } from '@/hooks/useTheme'
import { FC, ReactNode } from 'react'
import { TouchableOpacity, AccessibilityProps } from 'react-native'
export type ButtonProps = AccessibilityProps & {
  icon: ReactNode
  title: string
  onPress: () => void
}

export const Button: FC<ButtonProps> = ({ icon, title, onPress, ...props }) => {
  const { fonts, size, colors } = useTheme()
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <View
        style={{
          borderColor: colors.button.dashboard.border,
          borderRadius: size[3],
          paddingHorizontal: size[10],
          borderWidth: 1,
          height: size[20],
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        {icon}
        <Text
          style={{
            fontFamily: fonts.Roboto[400],
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
