import { Text } from '@/components/shared/Text'
import { View } from '@/components/shared/View'
import { useColorMode } from '@/hooks/useColorMode'
import { useTheme } from '@/hooks/useTheme'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { ForwardRefRenderFunction, memo, forwardRef } from 'react'

import { Button } from './Button'
import { ButtonSecondary } from './ButtonSecondary'
export const ModalBase: ForwardRefRenderFunction<BottomSheetModal> = (
  _,
  ref,
) => {
  const { changeToThemeDark, changeToThemeLight, changeToThemeSystem } =
    useColorMode()
  const { colors } = useTheme()
  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={[300]}
      backgroundStyle={{ backgroundColor: colors.mainBackground }}
      handleIndicatorStyle={{ backgroundColor: colors.textPrimary }}
    >
      <View
        backgroundColor="mainBackground"
        justifyContent="space-between"
        flex={1}
        paddingHorizontal="xl"
        paddingVertical="4xl"
        paddingBottom="9xl"
      >
        <Text variant="body" textAlign="center">
          Como deseja continuar ?
        </Text>
        <Button title="Visitante" onPress={changeToThemeSystem} />

        <View flexDirection="row" width="100%" gap="md">
          <ButtonSecondary title="Celular" onPress={changeToThemeDark} />
          <ButtonSecondary title="Email" onPress={changeToThemeLight} />
        </View>
      </View>
    </BottomSheetModal>
  )
}
export const Modal = memo(forwardRef(ModalBase))
