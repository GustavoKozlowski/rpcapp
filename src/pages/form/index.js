import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import InputForm from "../../components/input";
import { Container, Box } from "./styles";
import Logo from "../../components/logo";
import MyButton from "../../components/button";
import { Alert, Text } from "react-native";

export default function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const txt = <Text>Cadastrar</Text>;

  function createUser() {
    Alert.alert("Ainda estamos finalizando essa parte!");
  }

  return (
    <Container>
      <StatusBar style="auto" />
      <Box>
        <Logo
          width={100}
          height={70}
          url="https:upload.wikimedia.org/wikipedia/pt/thumb/7/76/Logotipo_da_RPC.png/200px-Logotipo_da_RPC.png"
        />
        <InputForm
          onChangeText={(value) => setName(value)}
          value={name}
          placeholder="Nome"
          errorMessage={errorName}
        />
        <InputForm
          onChangeText={(value) => setEmail(value)}
          value={email}
          placeholder="E-mail"
          errorMessage={errorEmail}
        />
        <InputForm
          onChangeText={(value) => setPassword(value)}
          value={password}
          placeholder="Senha"
          errorMessage={errorPassword}
        />
        <MyButton onPress={() => createUser()} text={txt} />
      </Box>
    </Container>
  );
}
