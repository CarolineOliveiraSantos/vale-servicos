import { type Routes } from '@/@types/navigation'
import { Text } from '@/ui/components/shared/text'
import { View } from '@/ui/components/shared/view'
import { R } from '@/ui/helpers/i18n/resources'
import { useTheme } from '@/ui/hooks/use-theme'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import type { BottomSheetModalProps } from '@gorhom/bottom-sheet'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { type ForwardRefRenderFunction, memo, forwardRef } from 'react'

import { Button } from './button'
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
        <Button
          accessibilityHint={R.string.signInLikeAVisitor}
          title={R.string.visitant}
          onPress={() => {}}
        />
        <Button
          title={R.string.email}
          testID="button-sign-in-with-email"
          accessibilityHint={R.string.signInWithEmail}
          onPress={() => {
            navigate('sign-in-with-email')
          }}
        />
      </View>
    </BottomSheetModal>
  )
}
export const Modal = memo(forwardRef(ModalBase))
