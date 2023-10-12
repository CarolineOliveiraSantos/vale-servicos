import ServiceProviders from '@/ui/assets/animations/serviceProviders.json'
import { Icons } from '@/ui/components/Icons/Icons'
import { Text } from '@/ui/components/shared/Text'
import { View } from '@/ui/components/shared/View'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import LottieView from 'lottie-react-native'
import { useRef } from 'react'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { useAuthWithFacebook } from '../../hooks/use-auth-with-facebook'
import { useAuthWithGoogle } from '../../hooks/useAuthWithGoogle'
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
        Bem vindo ao lugar ideal para encontrar prestadores de serviços
      </Text>

      <Button
        icon={<Icons.google />}
        title="Continuar com Google"
        isLoading={authWithGoogle.isLoading}
        onPress={authWithGoogle.execute}
      />
      <Button
        icon={<Icons.facebook />}
        title="Continuar com Facebook"
        isLoading={authWithFacebook.isLoading}
        onPress={authWithFacebook.execute}
      />

      <Button title="Outras opções" onPress={handleOpenModal} />
      <Modal ref={bottomSheetModalRef} />
    </View>
  )
}
export const Dashboard = gestureHandlerRootHOC(() => (
  <BottomSheetModalProvider>
    <DashboardBase />
  </BottomSheetModalProvider>
))
