import { useTheme } from '@/hooks/useTheme'
import { ActivityIndicator } from 'react-native'

import { View } from './shared/View'

export const Loading = () => {
  const { colors } = useTheme()
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <ActivityIndicator size="large" color={colors['text-primary']} />
    </View>
  )
}
