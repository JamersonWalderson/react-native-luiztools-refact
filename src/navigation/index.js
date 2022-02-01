import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppTab from '../navigation/tabs.navigation';

export default function App(){

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AppTab" component={AppTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}