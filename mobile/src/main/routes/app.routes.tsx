import { type Routes } from '@/@types/navigation'
import { SignUpWithEmail } from '@/ui/pages/authentication/sign-up-with-email/sign-up-with-email'
import { createStackNavigator } from '@react-navigation/stack'

import { Dashboard } from '../../ui/pages/authentication/dashboard/dashboard'
import AllServicos from '../../ui/pages/Visitante/AllServicos/index'
import Avaliacoes from '../../ui/pages/Visitante/Avaliacao/index'
import Detalhes from '../../ui/pages/Visitante/Detalhes/index'
import Prestadores from '../../ui/pages/Visitante/Prestadores/index'
import Principalll from '../../ui/pages/Visitante/Principal'
import { MakeSingInWithEmail } from '../factories/make-sing-in-with-email'
const { Navigator, Screen } = createStackNavigator<Routes>()
export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="sign-in-with-email" component={MakeSingInWithEmail} />
      <Screen name="sign-up-with-email" component={SignUpWithEmail} />
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Principalll" component={Principalll} />
      <Screen name="Prestadores" component={Prestadores} />
      <Screen name="Detalhes" component={Detalhes} />
      <Screen name="AllServicos" component={AllServicos} />
      <Screen name="Avaliacoes" component={Avaliacoes} />
    </Navigator>
  )
}
