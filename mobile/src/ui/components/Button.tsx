import { useTheme } from '@/hooks/useTheme'
import { FC } from 'react'
import { AccessibilityProps, ActivityIndicator } from 'react-native'

import { Text } from './shared/Text'
import { TouchableOpacity } from './shared/TouchableOpacity'
export interface ButtonProps extends AccessibilityProps {
  onPress(): void
  title: string
  isLoading?: boolean
}
export const Button: FC<ButtonProps> = ({
  onPress,
  title,
  isLoading = false,
  ...props
}) => {
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      testID="button"
      disabled={isLoading}
      width="100%"
      height={52}
      justifyContent="center"
      alignItems="center"
      backgroundColor="primary"
      borderRadius="rounded-md"
      accessibilityRole="button"
      role="button"
      onPress={onPress}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator
          testID="activity-indicator"
          size="small"
          color={colors.white}
        />
      ) : (
        <Text variant="button-primary" color="white">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}
