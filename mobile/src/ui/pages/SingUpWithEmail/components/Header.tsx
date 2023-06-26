import { useTheme } from '@/hooks/useTheme'
import { Icons } from '@/ui/components/Icons/Icons'
import { Text } from '@/ui/components/shared/Text'
import { TouchableOpacity } from '@/ui/components/shared/TouchableOpacity'
import { View } from '@/ui/components/shared/View'
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
