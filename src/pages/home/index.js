import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState}from "react";
import { Text, View } from "react-native";
import Logo from "../../components/logo";
import Programa from "../../components/programas";

export default function Home() {
  const programas = [
    {  title: "BBB",
       description: "Os assuntos mais importantes do Brasil e do mundo, com apresentação de Roberto Kovalick.",
       ImagemURL: "https://s3.glbimg.com/v1/AUTH_947d0a0390ad47fbba7a4b93423e1004/Imagem/2855.png"  },
    {  title: "Hora Um",
       description: "Os assuntos mais importantes do Brasil e do mundo, com apresentação de Roberto Kovalick.",
       ImagemURL: "https://s3.glbimg.com/v1/AUTH_947d0a0390ad47fbba7a4b93423e1004/Imagem/11927.jpg"   },
    {  title: "Hora Um",
       description: "Os assuntos mais importantes do Brasil e do mundo, com apresentação de Roberto Kovalick.",
       ImagemURL: "https://s3.glbimg.com/v1/AUTH_947d0a0390ad47fbba7a4b93423e1004/Imagem/11927.jpg"   },
]

  return (
    <>
      <StatusBar style="auto" />
      <Programa data={programas} />
    </>
  )
}
