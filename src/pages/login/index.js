import { React, useState } from "react";
import { Alert, TouchableOpacity, StatusBar, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Container,
  Box,
  ButtonLogin,
  TextButton,
  Rpc,
  IntroText,
  BoxInput,
  BoxTitle,
  AccountText
} from "./styles";

export default function Login() {
  const [user, setUser] = useState("asahsuah");
  const [pass, setPass] = useState("");

  const users = {
    name: "oi",
    password: "luka",
  };

  const entrar = () => {
    user === users?.name && pass === users?.password
      ? Alert.alert("entrouuuuu!")
      : Alert.alert("SENHA INCORRETA");
  };
  return (
    <Container>
      <Rpc
        source={{
          uri: "https:upload.wikimedia.org/wikipedia/pt/thumb/7/76/Logotipo_da_RPC.png/200px-Logotipo_da_RPC.png",
        }}
      />

      <IntroText>
        Faça o Login, e acesse a nossa programação aonde e quando quiser
      </IntroText>
      <Box>
        <BoxTitle>Login</BoxTitle>
        <BoxInput
          placeholder="usuário"
          onChangeText={(value) => setUser(value)}
        />
        <BoxInput
          placeholder="senha"
          onChangeText={(value) => setPass(value)}
          secureTextEntry={true}
        />
        <ButtonLogin onPress={() => entrar()}>
          <TextButton>Entrar</TextButton>
        </ButtonLogin>
        <AccountText>
          Ainda não tem conta? Clique aqui
        </AccountText>
      </Box>
      <Text>{user}</Text>
      <Text>{pass}</Text>
    </Container>
  );
}
