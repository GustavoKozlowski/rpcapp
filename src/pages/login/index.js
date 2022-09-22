import { CommonActions, Link, useNavigation } from "@react-navigation/native";
import { React, useState } from "react";
import { Alert, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../components/logo";
import {
  Container,
  Box,
  ButtonLogin,
  TextButton,
  IntroText,
  BoxInput,
  BoxTitle,
  AccountText,
} from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = {
    name: "oi",
    password: "luka",
  };

  const navigation = useNavigation();
  const entrar = () => {
    email === users?.name && password === users?.password
      ? navigation.dispatch(
          CommonActions.navigate({
            name: "Programas",
          })
        )
      : Alert.alert( "Erro ao efetuar o Login","E-mail ou Senha inválidos");
  };
  return (
    <Container>
      <StatusBar style="auto" />
      <Logo
        width={200}
        height={140}
        url="https:upload.wikimedia.org/wikipedia/pt/thumb/7/76/Logotipo_da_RPC.png/200px-Logotipo_da_RPC.png"
      />

      <IntroText>
        Faça o Login, e acesse a nossa programação aonde e quando quiser
      </IntroText>
      <Box>
        <BoxTitle>Login</BoxTitle>
        <BoxInput
          placeholder="email"
          onChangeText={(value) => setEmail(value)}
          value={email}
        />
        <BoxInput
          placeholder="senha"
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
          value={password}
        />
        <ButtonLogin onPress={() => entrar()}>
          <TextButton>Entrar</TextButton>
        </ButtonLogin>
        <AccountText>
          Ainda não possui conta?
          <Link to={{ screen: "Formulario" }}> Clique aqui!</Link>
        </AccountText>
      </Box>
      <Text>{email}</Text>
      <Text>{password}</Text>
    </Container>
  );
}
