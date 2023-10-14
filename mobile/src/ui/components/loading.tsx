import { useTheme } from '@/ui/hooks/use-theme'
import { ActivityIndicator } from 'react-native'

import { View } from './shared/view'

export const Loading = () => {
  const { colors } = useTheme()
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <ActivityIndicator size="large" color={colors['text-primary']} />
    </View>
  )
}
