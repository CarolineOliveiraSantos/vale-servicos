import { createStackNavigator } from '@react-navigation/stack';

import AdServicos from './../pages/Prestador/AdServicos';
import AlterarDados from './../pages/Prestador/AlterarDados';
import AlterarServicos from './../pages/Prestador/AlterarServicos';
import Cadastro from './../pages/Prestador/Cadastro';
import DadosPessoais from './../pages/Prestador/DadosPessoais';
import ListaServicos from './../pages/Prestador/ListaServicos';
import Login from './../pages/Prestador/Login';
import Principal from './../pages/Prestador/Principal';
import RecuperarAcesso from './../pages/Prestador/RecuperarAcesso';
import VerServicos from './../pages/Prestador/VerServicos';

const { Navigator, Screen } = createStackNavigator();

export const Worker = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Cadastro" component={Cadastro} />
      <Screen name="RecuperarAcesso" component={RecuperarAcesso} />
      <Screen name="Principal" component={Principal} />
      <Screen name="DadosPessoais" component={DadosPessoais} />
      <Screen name="AdServicos" component={AdServicos} />
      <Screen name="ListaServicos" component={ListaServicos} />
      <Screen name="AlterarDados" component={AlterarDados} />
      <Screen name="AlterarServicos" component={AlterarServicos} />
      <Screen name="VerServicos" component={VerServicos} />
    </Navigator>
  );
};
