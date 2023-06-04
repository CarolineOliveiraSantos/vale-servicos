import ServiceProviders from '@/assets/animations/serviceProviders.json'
import { Icons } from '@/components/Icons/Icons'
import { Text } from '@/components/primitives/Text'
import { View } from '@/components/primitives/View'
import { useAuth } from '@/hooks/useAuth'
import { useStorage } from '@/hooks/useStorage'
import { useTheme } from '@/hooks/useTheme'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import { TouchableOpacity } from 'react-native'

import { Button } from './components/Button'
export const Dashboard = () => {
  const { navigate } = useNavigation()
  const { colors, size, fonts } = useTheme()
  const { promptAppleSingIn, promptFacebookSingIn, promptGoogleSingIn } =
    useAuth()
  return (
    <View
      style={{
        gap: size[6],
        flex: 1,
        padding: size[8],
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
        onPress={() => navigate('Principalll')}
      />
      <Button
        icon={<Icons.facebook color={colors.icons.secondary} />}
        title="Continuar com Facebook"
        onPress={() => navigate('Principalll')}
      />

      <TouchableOpacity>
        <View
          style={{
            borderRadius: size[3],
            justifyContent: 'center',
            borderColor: colors.button.dashboard.border,
            borderWidth: 1,
            height: size[20],
            alignItems: 'center',
          }}
        >
          <Text size="sm" color="primary">
            Outras opções
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
