import { Text } from '@/components/shared/Text'
import { TouchableOpacity } from '@/components/shared/TouchableOpacity'
import { View } from '@/components/shared/View'
import { Theme } from '@/styles/theme'
import { useTheme } from '@shopify/restyle'
import { FC, ReactNode } from 'react'
import { AccessibilityProps, ActivityIndicator } from 'react-native'

export type ButtonProps = AccessibilityProps & {
  icon?: ReactNode
  title: string
  onPress: () => void
  isLoading?: boolean
}

export const Button: FC<ButtonProps> = ({
  icon,
  title,
  onPress,
  isLoading = false,
  ...props
}) => {
  const { colors } = useTheme<Theme>()
  return (
    <TouchableOpacity
      disabled={isLoading}
      testID="button"
      width="100%"
      onPress={onPress}
      {...props}
    >
      {isLoading ? (
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          borderRadius="rounded"
          paddingHorizontal="md"
          borderWidth={1}
          height={52}
        >
          <ActivityIndicator size="small" color={colors.textPrimary} />
        </View>
      ) : (
        <View
          height={52}
          borderWidth={1}
          alignItems="center"
          flexDirection="row"
          borderRadius="rounded"
          paddingHorizontal="md"
        >
          {icon}
          <Text variant="button" textAlign="center" style={{ flex: 1 }}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
