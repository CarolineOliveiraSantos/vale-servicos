import { Text } from '@/components/shared/Text'
import { TouchableOpacity } from '@/components/shared/TouchableOpacity'
import { View } from '@/components/shared/View'
import { Theme } from '@/styles/theme'
import { useTheme } from '@shopify/restyle'
import { FC } from 'react'
import { AccessibilityProps, ActivityIndicator } from 'react-native'

export type ButtonSecondaryProps = AccessibilityProps & {
  title: string
  onPress: () => void
  isLoading?: boolean
}

export const ButtonSecondary: FC<ButtonSecondaryProps> = ({
  title,
  onPress,
  isLoading = false,
  ...props
}) => {
  const { colors } = useTheme<Theme>()
  return (
    <TouchableOpacity
      disabled={isLoading}
      testID="buttonSecondary"
      width="100%"
      flex={1}
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
          justifyContent="center"
          flexDirection="row"
          borderRadius="rounded"
          paddingHorizontal="md"
        >
          <Text variant="button">{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
