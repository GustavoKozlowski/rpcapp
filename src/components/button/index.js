import React from "react";
import styled from "styled-components/native";

export const MyButton = styled.TouchableOpacity`
    margin-top: 20px;
    width:  120px;
    height: 30px;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    background-color: #006497;
    border: 1px solid #000;
`;

export const TextButton = styled.Text`
        color: #fff;
        font-size: 14px;
        font-weight: bold;
`


export default function InputForm({text, onPress}) {
  return (
    <MyButton onPress={onPress} >
        <TextButton>{text}</TextButton>
    </MyButton>
  );
}
