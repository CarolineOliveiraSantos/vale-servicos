import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

// TODOS
import AllServicoss from './pages/Contratante/AllServicos';
import AlterarDadoss from './pages/Contratante/AlterarDados';
import Avaliacaoo from './pages/Contratante/Avaliacao';
import Avaliar from './pages/Contratante/Avaliar';
import cadastroContratante from './pages/Contratante/Cadastro';
import DadosPessoaiss from './pages/Contratante/DadosPessoais';
import Detalhess from './pages/Contratante/Detalhe';
import homeContratante from './pages/Contratante/Home';
import loginContratante from './pages/Contratante/Login';
import Prestadoress from './pages/Contratante/Prestadores';
import RecuperarAcessoo from './pages/Contratante/RecuperarAcesso';
import Home from './pages/Dashboard';
// PRESTADOR
import AdServicos from './pages/Prestador/AdServicos';
import AlterarDados from './pages/Prestador/AlterarDados';
import AlterarServicos from './pages/Prestador/AlterarServicos';
import Cadastro from './pages/Prestador/Cadastro';
import DadosPessoais from './pages/Prestador/DadosPessoais';
import ListaServicos from './pages/Prestador/ListaServicos';
import Login from './pages/Prestador/Login';
import Principal from './pages/Prestador/Principal';
import RecuperarAcesso from './pages/Prestador/RecuperarAcesso';
import VerServicos from './pages/Prestador/VerServicos';
// CONTRATANTE
// VISITANTE
import AllServicos from './pages/Visitante/AllServicos/index';
import Avaliacoes from './pages/Visitante/Avaliacao/index';
import Detalhes from './pages/Visitante/Detalhes/index';
import Prestadores from './pages/Visitante/Prestadores/index';
import Principalll from './pages/Visitante/Principal';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {/* TODOS */}
        <AppStack.Screen name="Home" component={Home} />
        {/* PRESTADOR */}
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Cadastro" component={Cadastro} />
        <AppStack.Screen name="RecuperarAcesso" component={RecuperarAcesso} />
        <AppStack.Screen name="Principal" component={Principal} />
        <AppStack.Screen name="DadosPessoais" component={DadosPessoais} />
        <AppStack.Screen name="AdServicos" component={AdServicos} />
        <AppStack.Screen name="ListaServicos" component={ListaServicos} />
        <AppStack.Screen name="AlterarDados" component={AlterarDados} />
        <AppStack.Screen name="AlterarServicos" component={AlterarServicos} />
        <AppStack.Screen name="VerServicos" component={VerServicos} />
        {/* CONTRATANTE */}
        <AppStack.Screen name="loginContratante" component={loginContratante} />
        <AppStack.Screen
          name="cadastroContratante"
          component={cadastroContratante}
        />
        <AppStack.Screen name="RecuperarAcessoo" component={RecuperarAcessoo} />
        <AppStack.Screen name="homeContratante" component={homeContratante} />
        <AppStack.Screen name="DadosPessoaiss" component={DadosPessoaiss} />
        <AppStack.Screen name="AlterarDadoss" component={AlterarDadoss} />
        <AppStack.Screen name="Prestadoress" component={Prestadoress} />
        <AppStack.Screen name="Detalhess" component={Detalhess} />
        <AppStack.Screen name="Avaliar" component={Avaliar} />
        <AppStack.Screen name="Avaliacaoo" component={Avaliacaoo} />
        <AppStack.Screen name="AllServicoss" component={AllServicoss} />
        {/* VISITANTE */}
        <AppStack.Screen name="Principalll" component={Principalll} />
        <AppStack.Screen name="Prestadores" component={Prestadores} />
        <AppStack.Screen name="Detalhes" component={Detalhes} />
        <AppStack.Screen name="AllServicos" component={AllServicos} />
        <AppStack.Screen name="Avaliacoes" component={Avaliacoes} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
