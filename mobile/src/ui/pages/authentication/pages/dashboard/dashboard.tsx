import ServiceProviders from '@/ui/assets/animations/serviceProviders.json'
import { Icons } from '@/ui/components/icons/icons'
import { Text } from '@/ui/components/shared/text'
import { View } from '@/ui/components/shared/view'
import { R } from '@/ui/helpers/i18n/resources'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import LottieView from 'lottie-react-native'
import { useRef } from 'react'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { useAuthWithFacebook } from '../../hooks/use-auth-with-facebook'
import { useAuthWithGoogle } from '../../hooks/use-auth-with-google'
import { Button } from './components/Button'
import { Modal } from './components/Modal'
const DashboardBase = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const handleOpenModal = () => {
    bottomSheetModalRef.current?.present()
  }
  const authWithGoogle = useAuthWithGoogle()
  const authWithFacebook = useAuthWithFacebook()
  return (
    <View
      backgroundColor="main-background"
      gap="md"
      flex={1}
      padding="xl"
      justifyContent="flex-end"
    >
      <LottieView
        source={ServiceProviders}
        autoPlay
        loop
        resizeMode="contain"
        style={{ position: 'relative' }}
      />

      <Text variant="header" textAlign="center">
        {R.string.welcomeToTheIdealPlaceToFindServiceProviders}
      </Text>

      <Button
        icon={<Icons.google />}
        title={R.string.singInWithGoogle}
        isLoading={authWithGoogle.isLoading}
        onPress={authWithGoogle.execute}
      />
      <Button
        icon={<Icons.facebook />}
        title={R.string.singInWithFacebook}
        isLoading={authWithFacebook.isLoading}
        onPress={authWithFacebook.execute}
      />

      <Button title={R.string.otherOptions} onPress={handleOpenModal} />
      <Modal ref={bottomSheetModalRef} />
    </View>
  )
}
export const Dashboard = gestureHandlerRootHOC(() => (
  <BottomSheetModalProvider>
    <DashboardBase />
  </BottomSheetModalProvider>
))
