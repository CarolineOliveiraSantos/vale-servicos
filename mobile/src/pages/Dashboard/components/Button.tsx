import { Text } from '@/components/shared/Text'
import { TouchableOpacity } from '@/components/shared/TouchableOpacity'
import { View } from '@/components/shared/View'
import { useTheme } from '@/hooks/useTheme'
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
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      disabled={isLoading}
      testID="button"
      width="100%"
      onPress={onPress}
      accessibilityRole="button"
      role="button"
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
          borderColor="buttonBorder"
          height={52}
        >
          <ActivityIndicator
            testID="activity-indicator"
            size="small"
            color={colors.textPrimary}
          />
        </View>
      ) : (
        <View
          height={52}
          borderWidth={1}
          alignItems="center"
          flexDirection="row"
          borderRadius="rounded"
          paddingHorizontal="md"
          borderColor="buttonBorder"
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
