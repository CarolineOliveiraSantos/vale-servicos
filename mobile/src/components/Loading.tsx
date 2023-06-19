import { Theme } from '@/styles/theme'
import { useTheme } from '@shopify/restyle'
import { ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { View } from './shared/View'

export const Loading = () => {
  const { colors } = useTheme<Theme>()
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator size="large" color={colors.textPrimary} />
      </View>
    </SafeAreaView>
  )
}
