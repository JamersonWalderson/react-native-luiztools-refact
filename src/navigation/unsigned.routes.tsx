import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../screens/Login';
import Register from "../screens/Register";


type ParamListBase = {
  Login: undefined;
  Register: undefined;
  AppTab: undefined;
}
export default function UnsignedRoutes(){
  const Stack = createNativeStackNavigator<ParamListBase>();

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}