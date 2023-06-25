import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import api from 'src/services/api'

import { Service, ServicoModel } from './components/Service'

const Principalll = () => {
  const navigation = useNavigation()

  function handleNavigateToBack() {
    navigation.goBack()
  }

  const [servicos, setServicos] = useState<ServicoModel[]>([])

  useEffect(() => {
    const fetchServicesList = async () => {
      const { data } = await api.get<ServicoModel[]>('servicoslist')
      setServicos(data)
    }
    fetchServicesList()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[{ marginTop: 5 }]} onPress={handleNavigateToBack}>
          <Text>
            <Icon name="arrow-left" size={30} color="#0426B0" />
          </Text>
        </Text>
        <View style={styles.searchSection}>
          <Text
            style={[
              {
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: 5,
                marginLeft: 80,
              },
            ]}
          >
            Área do Visitante
          </Text>
        </View>
      </View>
      <FlatList
        data={servicos}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item }) => <Service servico={item} />}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  icon: {
    width: '100',
    height: '100',
    // color: "black",
  },
  headerText: {
    fontSize: 16,
    borderRadius: 5,
    textAlign: 'center',
    paddingTop: 12,
  },
  input: {
    width: 240,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
  },
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
    fontWeight: 'bold',
  },
  dataValue: {
    marginStart: 110,
    paddingHorizontal: 10,
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
    color: 'black',
  },
  text: {},
})
export default Principalll
