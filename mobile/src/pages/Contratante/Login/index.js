import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  AsyncStorage,
} from "react-native";
import { BaseButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather as Icon } from "@expo/vector-icons";
import api from "../../../services/api";

const loginContratante = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation();

  function handleNavigateToHomeContratante(contratante) {
    navigation.navigate("homeContratante", { contratante });
  }
  function handleNavigateToHome() {
    navigation.goBack("Home");
  }
  function handleNavigateToCadastroContratante() {
    navigation.navigate("cadastroContratante");
  }
  function handleNavigateToRecuperarAcesso() {
    navigation.navigate("RecuperarAcessoo");
  }

  async function handleLogin() {
    try {
      const response = await api.post("sessioncontratante", { email, senha });
      if (!response.data.email & !response.data.senha) {
        return erroLogin();
      } else {
        AsyncStorage.setItem("email", email);
        AsyncStorage.setItem("senha", senha);
        AsyncStorage.setItem("nome", response.data.nome);
        AsyncStorage.setItem("contratante", response.data);
        const contratante = response.data;
        // console.log(email, response.data);
        return handleNavigateToHomeContratante(contratante);
      }
    } catch (err) {
      return erroLogin();
    }
  }

  const erroLogin = () =>
    Alert.alert("Erro na Autenticação", "Dados incorretos, tente novamente!", [
      {
        text: "Ok",
        onPress: () => console.log(),
      },
    ]);

  return (
    <View style={[styles.container]}>
      <Text
        style={[{ marginLeft: 10, marginStart: 10 }]}
        onPress={handleNavigateToHome}
      >
        <Text>
          <Icon name="arrow-left" size={30} color="#0426B0" />
        </Text>
      </Text>
      <View style={styles.vieww}>
        <View style={styles.buttonIcon}>
          <Text>
            <FontAwesome5 name="user-circle" size={70} color="#0426B0" />
          </Text>
        </View>
        <Text style={styles.text}>Login do Contratante</Text>
        <Text
          style={[
            styles.description,
            {
              textAlign: "center",
              backgroundColor: "rgba(4, 38, 176, 0.3)",
              marginBottom: 19,
              // marginTop: 5,
              marginLeft: 20,
              marginRight: 20,
              fontSize: 4,
            },
          ]}
        ></Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
          placeholder="Digite seu email"
        />
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          autoCorrect={false}
          secureTextEntry={true}
          placeholder="Digite sua senha"
        />
        <BaseButton style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </BaseButton>
        <View style={[styles.link]}>
          <Text
            style={{ fontSize: 16 }}
            onPress={handleNavigateToCadastroContratante}
          >
            Cadastre-se
          </Text>
          <Text
            style={{ fontSize: 16 }}
            onPress={handleNavigateToRecuperarAcesso}
          >
            Esqueceu a senha?
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  vieww: {
    flex: 1,
    justifyContent: "center",
    // jus: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 15,
    fontSize: 20,
  },
  buttonIcon: {
    alignItems: "center",
    marginBottom: 7,
  },
  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0426B0",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },
  link: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 15,
    marginTop: 7,
  },
  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
  },
});
export default loginContratante;
