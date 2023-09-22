import { useTheme } from '@/hooks/useTheme'
import { Text } from '@/ui/components/shared/Text'
import { View } from '@/ui/components/shared/View'
import { BottomSheetModal, BottomSheetModalProps } from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/native'
import { ForwardRefRenderFunction, memo, forwardRef } from 'react'

import { Button } from './Button'
export const ModalBase: ForwardRefRenderFunction<
  BottomSheetModal,
  Pick<BottomSheetModalProps, 'onDismiss'>
> = (props, ref) => {
  const { colors } = useTheme()
  const { navigate } = useNavigation()
  return (
    <BottomSheetModal
      onDismiss={props.onDismiss}
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
        <Button title="Email" onPress={() => navigate('SingUpWithEmail')} />
      </View>
    </BottomSheetModal>
  )
}
export const Modal = memo(forwardRef(ModalBase))
