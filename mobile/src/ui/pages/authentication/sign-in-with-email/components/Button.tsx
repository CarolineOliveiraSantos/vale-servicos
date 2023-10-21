import { Text } from '@/ui/components/shared/text'
import { View } from '@/ui/components/shared/view'
import { useTheme } from '@/ui/hooks/use-theme'
import { type FC, type ReactNode } from 'react'
import {
  type AccessibilityProps,
  ActivityIndicator,
  TouchableNativeFeedback,
} from 'react-native'

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
    <TouchableNativeFeedback
      disabled={isLoading}
      testID="button"
      style={{ width: '100%' }}
      onPress={onPress}
      accessibilityRole="button"
      role="button"
      {...props}
    >
      <View
        height={52}
        borderWidth={1}
        alignItems="center"
        flexDirection="row"
        borderRadius="rounded-lg"
        paddingHorizontal="md"
        borderColor="button-border"
      >
        {icon}
        {isLoading ? (
          <ActivityIndicator
            testID="activity-indicator"
            size="small"
            color={colors['text-primary']}
          />
        ) : (
          <Text variant="button" textAlign="center" style={{ flex: 1 }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableNativeFeedback>
  )
}
