import { NavigationProp } from '@react-navigation/native'
/* eslint-disable no-unused-vars */
export type Routes = {
  Login: undefined
  Principalll: undefined
  loginContratante: undefined
  Prestadores: { id: string }
  'sign-in-with-email': undefined
  'sign-up-with-email': undefined
  Dashboard: undefined
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
    type RootParamList = Routes
  }
}
