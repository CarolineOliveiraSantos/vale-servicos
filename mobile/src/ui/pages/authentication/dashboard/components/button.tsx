import { Text } from '@/ui/components/shared/text'
import { TouchableOpacity } from '@/ui/components/shared/touchable-opacity'
import { View } from '@/ui/components/shared/view'
import { useTheme } from '@/ui/hooks/use-theme'
import { type FC, type ReactNode } from 'react'
import {
  type AccessibilityProps,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'

export type ButtonProps = AccessibilityProps & {
  icon?: ReactNode
  title: string
  onPress: () => void
  isLoading?: boolean
  testID?: string
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
          <Text variant="button" textAlign="center" style={styles.text}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  text: {
    flex: 1,
  },
})
