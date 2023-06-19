import { Text } from '@/components/shared/Text'
import { View } from '@/components/shared/View'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { ForwardRefRenderFunction, memo, forwardRef } from 'react'

import { Button } from './Button'
import { ButtonSecondary } from './ButtonSecondary'
export const ModalBase: ForwardRefRenderFunction<BottomSheetModal> = (
  _,
  ref,
) => {
  return (
    <BottomSheetModal ref={ref} snapPoints={[300]}>
      <View
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
          <ButtonSecondary title="Celular" onPress={() => {}} />
          <ButtonSecondary title="Email" onPress={() => {}} />
        </View>
      </View>
    </BottomSheetModal>
  )
}
export const Modal = memo(forwardRef(ModalBase))
