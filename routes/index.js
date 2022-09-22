import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Form from "../src/pages/form";
import Home from "../src/pages/home";
import Login from "../src/pages/login";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false, headerTransparent: true, title: "" }}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Formulario" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}