import { createStackNavigator } from '@react-navigation/stack'

import AllServicoss from './../pages/Contratante/AllServicos'
import AlterarDadoss from './../pages/Contratante/AlterarDados'
import Avaliacaoo from './../pages/Contratante/Avaliacao'
import Avaliar from './../pages/Contratante/Avaliar'
import cadastroContratante from './../pages/Contratante/Cadastro'
import DadosPessoaiss from './../pages/Contratante/DadosPessoais'
import Detalhess from './../pages/Contratante/Detalhe'
import homeContratante from './../pages/Contratante/Home'
import loginContratante from './../pages/Contratante/Login'
import Prestadoress from './../pages/Contratante/Prestadores'
import RecuperarAcessoo from './../pages/Contratante/RecuperarAcesso'

const { Navigator, Screen } = createStackNavigator()
export const EmployerRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="loginContratante" component={loginContratante} />
      <Screen name="cadastroContratante" component={cadastroContratante} />
      <Screen name="RecuperarAcessoo" component={RecuperarAcessoo} />
      <Screen name="homeContratante" component={homeContratante} />
      <Screen name="DadosPessoaiss" component={DadosPessoaiss} />
      <Screen name="AlterarDadoss" component={AlterarDadoss} />
      <Screen name="Prestadoress" component={Prestadoress} />
      <Screen name="Detalhess" component={Detalhess} />
      <Screen name="Avaliar" component={Avaliar} />
      <Screen name="Avaliacaoo" component={Avaliacaoo} />
      <Screen name="AllServicoss" component={AllServicoss} />
    </Navigator>
  )
}
