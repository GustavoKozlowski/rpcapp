import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import Programa from "../../components/programas";

import api from "../../services/api";

export default function Home() {
  const programas = [
    {
      title: "BBB",
      description:
        "Os assuntos mais importantes do Brasil e do mundo, com apresentação de Roberto Kovalick.",
      imagemURL:
        "https://s3.glbimg.com/v1/AUTH_947d0a0390ad47fbba7a4b93423e1004/Imagem/2855.png",
    },
    {
      title: "Hora Um",
      description:
        "Os assuntos mais importantes do Brasil e do mundo, com apresentação de Roberto Kovalick.",
      imagemURL:
        "https://s3.glbimg.com/v1/AUTH_947d0a0390ad47fbba7a4b93423e1004/Imagem/11927.jpg",
    },
    {
      title: "Hora Um",
      description:
        "Os assuntos mais importantes do Brasil e do mundo, com apresentação de Roberto Kovalick.",
      imagemURL:
        "https://s3.glbimg.com/v1/AUTH_947d0a0390ad47fbba7a4b93423e1004/Imagem/11927.jpg",
    },
  ];
  // Me diga porque eu não consigo consumir essa API??
  api.get("/1337?date=2022-07-28").then((response) => {
    response.data;
    console.log(response);
  });

  const [data, setData] = useState([]);
  return (
    <>
      <StatusBar style="auto" />

      <Programa data={programas} />
    </>
  );
}
