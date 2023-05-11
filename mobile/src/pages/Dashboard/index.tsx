import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image } from 'react-native';

import { Text } from '../../components/Text';
import { useTheme } from '../../hooks/useTheme';
import Logo from './../../assets/logo.png';
import { Button } from './components/Button';
export const Dashboard = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg.primary, padding: 32 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Image source={Logo} />
        <Text
          font="Roboto.400"
          size="md"
          color="dashboard"
          style={{
            marginTop: 25,
            maxWidth: '70%',
          }}
        >
          Bem vindo ao lugar ideal para encontrar prestadores de serviços
          domésticos.
        </Text>
      </View>

      <Button
        type="SECONDARY"
        icon={
          <MaterialCommunityIcons
            name="badge-account-horizontal-outline"
            size={24}
            color="#FFF"
          />
        }
        title="Visitante"
        onPress={() => navigate('Principalll')}
      />
      <Button
        icon={<Feather name="arrow-right" color="#FFF" size={24} />}
        title="Entrar como Contratante"
        onPress={() => navigate('loginContratante')}
      />
      <Button
        icon={<Feather name="arrow-right" color="#FFF" size={24} />}
        title="Entrar como Prestador"
        onPress={() => navigate('Login')}
      />
    </View>
  );
};
