import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import Logo from "../../components/logo";


export default function Home() {
 
  return (
    <>
      <StatusBar style="auto" />
      <View >
        <Logo
          height={200}
          width={330}
          url={"https:upload.wikimedia.org/wikipedia/pt/thumb/7/76/Logotipo_da_RPC.png/200px-Logotipo_da_RPC.png"}
        />
        <Text>Home</Text>
      </View>
    </>
  )
}
