import { Icons } from '@/ui/components/Icons/Icons'
import { RoundedIcon } from '@/ui/components/RoundedIcon'
import { View } from '@/ui/components/shared/View'
import { useTheme } from '@/ui/hooks/use-theme'
import { useNavigation } from '@react-navigation/native'
import React, { memo } from 'react'

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
      <RoundedIcon
        onPress={goBack}
        accessibilityLabel="Voltar"
        accessibilityHint="Navegar para a tela anterior"
      >
        <Icons.arrowLeft color={colors['text-primary']} />
      </RoundedIcon>
    </View>
  )
}
export const Header = memo(HeaderBase)
