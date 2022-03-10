import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppTab from './tabs.navigation';
import Login from '../screens/Login';
import Register from "../screens/Register";


type ParamListBase = {
  Login: undefined;
  Register: undefined;
  AppTab: undefined;
}
export default function App(){

  const Stack = createNativeStackNavigator<ParamListBase>();

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="AppTab" component={AppTab} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}