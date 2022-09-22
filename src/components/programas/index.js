import React from "react";
import { FlatList, View, Text } from "react-native";
import styled from "styled-components/native";
import Img from "../img";

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Description = styled.Text`
  color: #fff;
  font-size: 15px;
  text-align: center;
  
`;

const Container = styled.View`
  height: 270;
  flex-direction: column;
  border-radius: 12px;
  background-color:#006497;
  margin: 10px;
  border-color: #000;
  border: 1px;
  text-align: center;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export default function Programa({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => {
        return (
          <Container>
            <Title>{item.title}</Title>
            <Img
              url={
                "https://s3.glbimg.com/v1/AUTH_947d0a0390ad47fbba7a4b93423e1004/Imagem/11927.jpg"
              }
              height={170}
              width={300}
            />
            <Description>Resumo: {item.description}</Description>
            
          </Container>
        );
      }}
      keyExtractor={(elemento,index) => String(index) }
    />
  );
}
