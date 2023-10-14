import { Routes } from '@/@types/navigation'
import { Text } from '@/ui/components/shared/text'
import { View } from '@/ui/components/shared/view'
import { R } from '@/ui/helpers/i18n/resources'
import { useTheme } from '@/ui/hooks/use-theme'
import { BottomSheetModal, BottomSheetModalProps } from '@gorhom/bottom-sheet'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { ForwardRefRenderFunction, memo, forwardRef } from 'react'

import { Button } from './Button'
export const ModalBase: ForwardRefRenderFunction<
  BottomSheetModal,
  Pick<BottomSheetModalProps, 'onDismiss'>
> = (props, ref) => {
  const { colors } = useTheme()
  const { navigate } = useNavigation<NavigationProp<Routes>>()
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
          {R.string.howDoYouWantToContinue}
        </Text>
        <Button title={R.string.visitor} onPress={() => {}} />
        <Button
          title={R.string.email}
          onPress={() => navigate('sign-in-with-email')}
        />
      </View>
    </BottomSheetModal>
  )
}
export const Modal = memo(forwardRef(ModalBase))
