import { Routes } from '@/@types/navigation'
import { createStackNavigator } from '@react-navigation/stack'

import { Dashboard } from '../../ui/pages/Authentication/pages/Dashboard/Dashboard'
import AllServicos from '../../ui/pages/Visitante/AllServicos/index'
import Avaliacoes from '../../ui/pages/Visitante/Avaliacao/index'
import Detalhes from '../../ui/pages/Visitante/Detalhes/index'
import Prestadores from '../../ui/pages/Visitante/Prestadores/index'
import Principalll from '../../ui/pages/Visitante/Principal'
import { MakeSingUpWithEmail } from '../factories/make-sing-up-with-email'
const { Navigator, Screen } = createStackNavigator<Routes>()
export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="SingUpWithEmail" component={MakeSingUpWithEmail} />
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Principalll" component={Principalll} />
      <Screen name="Prestadores" component={Prestadores} />
      <Screen name="Detalhes" component={Detalhes} />
      <Screen name="AllServicos" component={AllServicos} />
      <Screen name="Avaliacoes" component={Avaliacoes} />
    </Navigator>
  )
}
