import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from '../pages/Dashboard';
import AllServicos from './../pages/Visitante/AllServicos/index';
import Avaliacoes from './../pages/Visitante/Avaliacao/index';
import Detalhes from './../pages/Visitante/Detalhes/index';
import Prestadores from './../pages/Visitante/Prestadores/index';
import Principalll from './../pages/Visitante/Principal';
const { Navigator, Screen } = createStackNavigator();
export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Principalll" component={Principalll} />
      <Screen name="Prestadores" component={Prestadores} />
      <Screen name="Detalhes" component={Detalhes} />
      <Screen name="AllServicos" component={AllServicos} />
      <Screen name="Avaliacoes" component={Avaliacoes} />
    </Navigator>
  );
};
