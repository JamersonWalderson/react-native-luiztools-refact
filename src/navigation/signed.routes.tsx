import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AppTab from './tabs.navigation';

export default function SignedRoutes() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AppTab' component={AppTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}