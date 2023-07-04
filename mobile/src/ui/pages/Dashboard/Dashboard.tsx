import { useAuth } from '@/hooks/useAuth'
import ServiceProviders from '@/ui/assets/animations/serviceProviders.json'
import { Icons } from '@/ui/components/Icons/Icons'
import { Text } from '@/ui/components/shared/Text'
import { View } from '@/ui/components/shared/View'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import LottieView from 'lottie-react-native'
import { useRef, useState } from 'react'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { Button } from './components/Button'
import { Modal } from './components/Modal'
import { useTheme } from '@/hooks/useTheme'
const DashboardBase = () => {
  const { promptFacebookSingIn, promptGoogleSingIn } = useAuth()
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const {colors} = useTheme()
  const handleOpenModal = () => {
    bottomSheetModalRef.current?.present()

  }
  const [isLoadingGoogle, setIsLoadingGoogle] = useState<boolean>(false)
  const [isLoadingFacebook, setIsLoadingFacebook] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

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
        isLoading={isLoadingGoogle}
        onPress={async () => {
          try {
            setIsLoadingGoogle(true)
            await promptGoogleSingIn()
          } finally {
            setIsLoadingGoogle(false)
          }
        }}
      />
      <Button
        icon={<Icons.facebook />}
        title="Continuar com Facebook"
        isLoading={isLoadingFacebook}
        onPress={async () => {
          try {
            setIsLoadingFacebook(true)
            await promptFacebookSingIn()
          } finally {
            setIsLoadingFacebook(false)
          }
        }}
      />
       <Button
        icon={<Icons.apple color={colors['text-primary']} />}
        title="Continuar com Apple"
        isLoading={isLoadingFacebook}
        onPress={async () => {
          try {
            setIsLoadingFacebook(true)
            await promptFacebookSingIn()
          } finally {
            setIsLoadingFacebook(false)
          }
        }}
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
