import { Text } from '@/components/Text';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
export interface ServicoModel {
  id: string;
  name: string;
  info: string;
}
export interface ServiceProps {
  servico: ServicoModel;
}

export const Service: FC<ServiceProps> = ({ servico }) => {
  const { navigate } = useNavigation();
  function handleNavigateToPrestadores() {
    navigate('Prestadores', { id: servico.id });
  }
  return (
    <TouchableOpacity
      style={[styles.descriptionContainer, { marginTop: 15 }]}
      onPress={handleNavigateToPrestadores}
      activeOpacity={0.8}
    >
      <View>
        <Text color="primary" style={styles.description}>
          {servico.name}
        </Text>
        <Text color="primary" fontFamily="Roboto.500" style={styles.dataValue}>
          {servico.info}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 1,
    height: 160,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    fontSize: 15,
    backgroundColor: 'rgba(4, 38, 176, 0.4)',
    paddingHorizontal: 5,
    color: '#41414d',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
    paddingLeft: 15,
  },
  description: {
    marginStart: 110,
    paddingHorizontal: 10,
    fontSize: 17,
    flexDirection: 'row',
    color: 'black',
  },
  dataValue: {
    marginStart: 110,
    paddingHorizontal: 10,
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
    color: 'black',
  },
});
