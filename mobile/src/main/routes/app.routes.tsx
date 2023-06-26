import { Routes } from '@/@types/navigation'
import { SingUpWithEmail } from '@/ui/pages/SingUpWithEmail/SingUpWithEmail'
import { SingUpWithNumberPhone } from '@/ui/pages/SingUpWithNumberPhone/SingUpWithNumberPhone'
import { createStackNavigator } from '@react-navigation/stack'

import { Dashboard } from '../../ui/pages/Dashboard/Dashboard'
import AllServicos from '../../ui/pages/Visitante/AllServicos/index'
import Avaliacoes from '../../ui/pages/Visitante/Avaliacao/index'
import Detalhes from '../../ui/pages/Visitante/Detalhes/index'
import Prestadores from '../../ui/pages/Visitante/Prestadores/index'
import Principalll from '../../ui/pages/Visitante/Principal'
const { Navigator, Screen } = createStackNavigator<Routes>()
export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="SingUpWithNumberPhone" component={SingUpWithNumberPhone} />
      <Screen name="SingUpWithEmail" component={SingUpWithEmail} />
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Principalll" component={Principalll} />
      <Screen name="Prestadores" component={Prestadores} />
      <Screen name="Detalhes" component={Detalhes} />
      <Screen name="AllServicos" component={AllServicos} />
      <Screen name="Avaliacoes" component={Avaliacoes} />
    </Navigator>
  )
}
