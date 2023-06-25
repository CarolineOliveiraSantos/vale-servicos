import { Icons } from '@/components/Icons/Icons'
import { Text } from '@/components/shared/Text'
import { TouchableOpacity } from '@/components/shared/TouchableOpacity'
import { View } from '@/components/shared/View'
import { useTheme } from '@/hooks/useTheme'
import { useNavigation } from '@react-navigation/native'
import { memo } from 'react'

const HeaderBase = () => {
  const { colors } = useTheme()
  const { goBack } = useNavigation()
  return (
    <View
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      paddingVertical="sm"
    >
      <TouchableOpacity
        onPress={goBack}
        accessibilityLabel="Voltar"
        accessibilityHint="Navegar para a tela anterior"
      >
        <View flexDirection="row" gap="xs">
          <Icons.arrowLeft color={colors['text-primary']} />
          <Text variant="body">Voltar</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
export const Header = memo(HeaderBase)
