import { useTheme } from '@/hooks/useTheme'
import { Text } from '@/ui/components/shared/Text'
import { View } from '@/ui/components/shared/View'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/native'
import { ForwardRefRenderFunction, memo, forwardRef } from 'react'

import { Button } from './Button'
import { ButtonSecondary } from './ButtonSecondary'
export const ModalBase: ForwardRefRenderFunction<BottomSheetModal> = (
  _,
  ref,
) => {
  const { colors } = useTheme()
  const { navigate } = useNavigation()
  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={[300]}
      backgroundStyle={{ backgroundColor: colors['main-background'] }}
      handleIndicatorStyle={{ backgroundColor: colors['text-primary'] }}
    >
      <View
        backgroundColor="main-background"
        justifyContent="space-between"
        flex={1}
        paddingHorizontal="xl"
        paddingVertical="4xl"
        paddingBottom="9xl"
      >
        <Text variant="body" textAlign="center">
          Como deseja continuar ?
        </Text>
        <Button title="Visitante" onPress={() => {}} />

        <View flexDirection="row" width="100%" gap="md">
          <ButtonSecondary
            title="Celular"
            onPress={() => navigate('SingUpWithNumberPhone')}
          />
          <ButtonSecondary
            title="Email"
            onPress={() => navigate('SingUpWithEmail')}
          />
        </View>
      </View>
    </BottomSheetModal>
  )
}
export const Modal = memo(forwardRef(ModalBase))
