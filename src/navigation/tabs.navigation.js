import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import List from '../screens/List';
import Form from '../screens/Form';
import Information from '../screens/Informations';

const Tab = createBottomTabNavigator();

export default function AppTab(){
    const screenOptions= {
        tabBarActiveTintColor: "#32264d",
        tabBarInactiveTintColor: "#c1bccc",
        tabBarActiveBackgroundColor: "#ebebf5",
        tabBarInactiveBackgroundColor: "#fafafc",
        tabBarLabelStyle: {
            fontSize: 13,
            position: 'absolute',
            top: 15,
            bottom: 0,
            left: 0,
            right: 0
        },
        tabBarIconStyle: { display: "none" }
    };

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="List" component={List} options={{tabBarLabel: 'Compras'}} />
            <Tab.Screen name="Form" component={Form} options={{tabBarLabel: 'Adicionar'}} />
            <Tab.Screen name="Information" component={Information} options={{tabBarLabel: 'Informações'}} />
        </Tab.Navigator>
    )
}