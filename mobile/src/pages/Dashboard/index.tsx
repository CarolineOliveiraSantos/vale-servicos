import ServiceProviders from '@/assets/animations/serviceProviders.json';
import { HStack } from '@/components/HStack';
import { Icons } from '@/components/Icons/Icons';
import { Text } from '@/components/Text';
import { VStack } from '@/components/VStack';
import { useTheme } from '@/hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native';

import { Button } from './components/Button';
export const Dashboard = () => {
  const { navigate } = useNavigation();
  const { colors, size } = useTheme();
  return (
    <VStack
      flex={1}
      backgroundColor="primary"
      padding={8}
      justifyContent="flex-end"
      style={{ gap: size[6] }}
    >
      <LottieView
        source={ServiceProviders}
        autoPlay
        loop
        resizeMode="contain"
        style={{ position: 'relative' }}
      />

      <Text
        fontFamily="Inter.500"
        fontSize="md"
        color="primary"
        style={{ textAlign: 'center' }}
      >
        Bem vindo ao lugar ideal para encontrar prestadores de serviços
      </Text>

      <Button
        icon={<Icons.google color={colors.icons.secondary} />}
        title="Continuar com Google"
        onPress={() => navigate('Principalll')}
      />
      <TouchableOpacity>
        <HStack
          height={20}
          alignItems="center"
          justifyContent="center"
          borderRadius={3}
          backgroundColor="primary"
          style={{ borderColor: '#ccc', borderWidth: 1 }}
        >
          <Text fontSize="sm">Outras opções</Text>
        </HStack>
      </TouchableOpacity>
    </VStack>
  );
};
