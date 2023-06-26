import api from '@/services/api'
import { Feather as Icon, Entypo, AntDesign } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native'

const homeContratante = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const contratante = route.params.contratante

  function handleNavigateToBack() {
    navigation.goBack()
  }
  function handleNavigateToPrestadores(servico, contratante) {
    navigation.navigate('Prestadoress', { servico, contratante })
  }
  function handleNavigateToDadosPessoais(contratante) {
    navigation.navigate('DadosPessoaiss', { contratante })
  }
  function handleNavigateToHome() {
    navigation.navigate('Home')
  }
  const createAlert = () =>
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log(),
        },
        {
          text: 'Sair',
          onPress: () => {
            return handleNavigateToHome()
          },
        },
      ],
      { cancelable: false },
    )

  const [servicos, setServicos] = useState([])

  useEffect(() => {
    api.get('servicoslist').then((res) => {
      setServicos(res.data)
    })
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <View style={styles.searchSection}> */}
        <Text
          style={[{ marginTop: 5, paddingRight: 10 }]}
          onPress={() => handleNavigateToDadosPessoais(contratante)}
        >
          <Text>
            <Icon name="user" size={30} color="#0426B0" />
          </Text>
        </Text>
        <Text style={[{ fontWeight: 'bold', fontSize: 20, marginTop: 5 }]}>
          Área do Contratante
        </Text>
        {/* </View> */}
        {/* <View style={styles.searchSection}> */}

        <Text style={[{ marginTop: 5 }]} onPress={createAlert}>
          <Text>
            <Icon name="log-out" size={30} color="#0426B0" />
          </Text>
        </Text>
      </View>
      {/* </View> */}
      <ScrollView>
        {servicos.map((servico) => (
          <TouchableOpacity
            keyExtractor={(servico) => String(servico.id)}
            style={[styles.descriptionContainer, { marginTop: 15 }]}
            onPress={() => handleNavigateToPrestadores(servico, contratante)}
            activeOpacity={0.8}
          >
            {/* <SvgUri
              width="100"
              height="100"
              //   style={styles.icon}
              source={{
                uri: `http://192.168.42.110:3333/uploadsServs/${servico.img}`,
                // uri: servico.image_url,
              }}
              //   source={require({servico.image_url})}
            /> */}
            {/* <Text style={[{ marginStart: 8, marginTop: 5 }]}>
                            <Entypo name="home" size={100} color="black" />
                        </Text> */}
            <View style={styles.text}>
              <Text style={styles.description}>{servico.name}</Text>
              <Text style={styles.dataValue}>{servico.info}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 15,
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
export default homeContratante
