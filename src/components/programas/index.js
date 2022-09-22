import React from "react";
import { FlatList } from "react-native";
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
export const TitleHeader = styled.Text`
  color: #fff;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
`;

const Container = styled.View`
  height: 270;
  flex-direction: column;
  border-radius: 12px;
  background-color: #006497;
  margin: 10px;
  border-color: #000;
  border: 1px;
  text-align: center;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;
const Header = styled.View`
  height: 50;
  color: #ffff;
  background-color: #006497;
  border-color: #000;
  border: 1px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export default function Programa({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => {
        return (
          <Container key={index}>
            <Title>{item.title}</Title>
            <Img url={item.imagemURL} height={170} width={300} />
            <Description>Resumo: {item.description}</Description>
          </Container>
        );
      }}
      ListHeaderComponent={() => (
        <Header>
          <TitleHeader>Programação do dia</TitleHeader>
        </Header>
      )}
    />
  );
}
