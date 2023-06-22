import { NavigationProp } from '@react-navigation/native'
/* eslint-disable no-unused-vars */
export type Routes = {
  Login: undefined
  Principalll: undefined
  loginContratante: undefined
  Prestadores: { id: string }
  SingUpWithEmail: undefined
  Dashboard: undefined
  SingUpWithNumberPhone: undefined
  Detalhes: {
    prestador: any
    serv: any
  }
  AllServicos: { prestador: any }
  Avaliacoes: { prestador: any }
}
export type RoutesProps = NavigationProp<Routes>
declare global {
  namespace ReactNavigation {
    interface RootParamList extends Routes {}
  }
}
