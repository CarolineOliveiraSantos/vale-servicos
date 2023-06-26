import { createStackNavigator } from '@react-navigation/stack'

import AdServicos from '../../ui/pages/Prestador/AdServicos'
import AlterarDados from '../../ui/pages/Prestador/AlterarDados'
import AlterarServicos from '../../ui/pages/Prestador/AlterarServicos'
import Cadastro from '../../ui/pages/Prestador/Cadastro'
import DadosPessoais from '../../ui/pages/Prestador/DadosPessoais'
import ListaServicos from '../../ui/pages/Prestador/ListaServicos'
import Login from '../../ui/pages/Prestador/Login'
import Principal from '../../ui/pages/Prestador/Principal'
import RecuperarAcesso from '../../ui/pages/Prestador/RecuperarAcesso'
import VerServicos from '../../ui/pages/Prestador/VerServicos'

const { Navigator, Screen } = createStackNavigator()

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
  )
}
