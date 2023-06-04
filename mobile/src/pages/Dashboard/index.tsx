import ServiceProviders from '@/assets/animations/serviceProviders.json'
import { Icons } from '@/components/Icons/Icons'
import { Text } from '@/components/primitives/Text'
import { View } from '@/components/primitives/View'
import { useAuth } from '@/hooks/useAuth'
import { useTheme } from '@/hooks/useTheme'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import { useRef } from 'react'
import { TouchableOpacity } from 'react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { Button } from './components/Button'
import { Modal } from './components/Modal'
const DashboardBase = () => {
  const { navigate } = useNavigation()
  const { colors, fonts } = useTheme()
  const { promptFacebookSingIn, promptGoogleSingIn, promptAppleSingIn } =
    useAuth()
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const handleOpenModal = () => {
    bottomSheetModalRef.current?.present()
  }
  return (
    <View
      style={{
        gap: 15,
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end',
      }}
    >
      <LottieView
        source={ServiceProviders}
        autoPlay
        loop
        resizeMode="contain"
        style={{ position: 'relative' }}
      />

      <Text
        size="lg"
        fontFamily="Inter.500"
        style={{
          textAlign: 'center',
          fontFamily: fonts.Inter[500],
        }}
      >
        Bem vindo ao lugar ideal para encontrar prestadores de serviços
      </Text>

      <Button
        icon={<Icons.google color={colors.icons.secondary} />}
        title="Continuar com Google"
        onPress={async () => {
          await promptGoogleSingIn()
        }}
      />
      <Button
        icon={<Icons.apple color={colors.icons.secondary} />}
        title="Continuar com Apple"
        onPress={promptAppleSingIn}
      />
      <Button
        icon={<Icons.facebook color={colors.icons.secondary} />}
        title="Continuar com Facebook"
        onPress={promptFacebookSingIn}
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
