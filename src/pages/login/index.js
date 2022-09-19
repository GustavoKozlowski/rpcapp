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
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const users = {
    name: "oi",
    password: "luka",
  };

  const navigation = useNavigation();
  const entrar = () => {
    user === users?.name && pass === users?.password
      ? navigation.dispatch(
          CommonActions.navigate({
            name: "Home",
          })
        )
      : Alert.alert("SENHA INCORRETA");
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
          Ainda não possui conta?
          <Link to={{ screen: "Form" }}> Clique aqui!</Link>
        </AccountText>
      </Box>
      <Text>{user}</Text>
      <Text>{pass}</Text>
    </Container>
  );
}
