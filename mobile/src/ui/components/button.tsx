import { useTheme } from '@/ui/hooks/use-theme'
import { FC } from 'react'
import { AccessibilityProps, ActivityIndicator } from 'react-native'

import { Text } from './shared/text'
import { TouchableOpacity } from './shared/touchable-opacity'
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
      borderRadius="rounded-lg"
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
