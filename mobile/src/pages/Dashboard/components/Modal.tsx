import { Text } from '@/components/primitives/Text'
import { View } from '@/components/primitives/View'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { ForwardRefRenderFunction, memo, forwardRef } from 'react'

import { Button } from './Button'
export const ModalBase: ForwardRefRenderFunction<BottomSheetModal> = (
  _,
  ref,
) => {
  return (
    <BottomSheetModal ref={ref} snapPoints={[300]}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 30,
          paddingBottom: 50,
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <Text fontFamily="Inter.500" size="lg" style={{ textAlign: 'center' }}>
          Como deseja continuar ?
        </Text>
        <Button title="Visitante" onPress={() => {}} />

        <View style={{ flexDirection: 'row', gap: 10, width: '100%' }}>
          <Button title="Celular" style={{ flex: 1 }} onPress={() => {}} />
          <Button title="Email" style={{ flex: 1 }} onPress={() => {}} />
        </View>
      </View>
    </BottomSheetModal>
  )
}
export const Modal = memo(forwardRef(ModalBase))
