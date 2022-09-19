import React from "react";
import styled from "styled-components/native";

const MyInput = styled.TextInput`
  background-color: #fff;
  color: #006497;
  height: 30px;
  width: 70%;
  border-bottom-color: black;
  border-bottom-width: 2px;
  padding: 5px;
  margin: 7px;
`;

export default function InputForm({ placeholder, onChangeText, value }) {
  return (
    <MyInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
    />
  );
}
