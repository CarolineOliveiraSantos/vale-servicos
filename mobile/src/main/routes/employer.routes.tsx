import { createStackNavigator } from '@react-navigation/stack'

import AllServicoss from '../../ui/pages/Contratante/AllServicos'
import AlterarDadoss from '../../ui/pages/Contratante/AlterarDados'
import Avaliacaoo from '../../ui/pages/Contratante/Avaliacao'
import Avaliar from '../../ui/pages/Contratante/Avaliar'
import cadastroContratante from '../../ui/pages/Contratante/Cadastro'
import DadosPessoaiss from '../../ui/pages/Contratante/DadosPessoais'
import Detalhess from '../../ui/pages/Contratante/Detalhe'
import homeContratante from '../../ui/pages/Contratante/Home'
import loginContratante from '../../ui/pages/Contratante/Login'
import Prestadoress from '../../ui/pages/Contratante/Prestadores'
import RecuperarAcessoo from '../../ui/pages/Contratante/RecuperarAcesso'

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
