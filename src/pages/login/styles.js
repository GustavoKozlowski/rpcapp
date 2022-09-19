import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.View`
  width: 350px;
  height: 250px;
  justify-content: center;
  align-items: center;
  background-color: #006497;
  border: 1px solid #dddddd;
  border-radius: 7px;
  margin-bottom: 150px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    margin-top: 20px;
    width:  120px;
    height: 30px;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #000;
`;

export const ContainerInput = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;

`;

export const TextButton = styled.Text`
        color: #006497;
        font-size: 18px;
`
export const IntroText = styled.Text`
        color: #006497;
        font-size: 12px;
        text-align: center;
        margin-bottom: 10px;
 `

export const BoxTitle = styled.Text`
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 15px;
        font-weight: bold;

`
export const BoxInput = styled.TextInput`
        background-color: #fff;
        color: #006497;
        height: 30px;
        width: 220px;
        margin-top: 10px;
        border: black;
        padding:5px;
`
export const AccountText = styled.Text`
        color: #fff;
        font-size: 15px;
        text-align: center;
        margin-top: 20px;
 `
