import { useTheme } from '@/hooks/useTheme'
import { Text } from '@/ui/components/shared/Text'
import { TouchableOpacity } from '@/ui/components/shared/TouchableOpacity'
import { View } from '@/ui/components/shared/View'
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
          borderRadius="rounded-lg"
          paddingHorizontal="md"
          borderWidth={1}
          borderColor="button-border"
          height={52}
        >
          <ActivityIndicator
            testID="activity-indicator"
            size="small"
            color={colors['text-primary']}
          />
        </View>
      ) : (
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
          <Text variant="button" textAlign="center" style={{ flex: 1 }}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
