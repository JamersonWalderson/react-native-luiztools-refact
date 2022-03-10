import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function login() {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleAccessButton = () => {
    Alert.alert('Atenção', 'Você está logado!');
  }

  return (
    <SafeAreaView style={style.container}>
      <View>
        <TextInput 
          value={login}
          onChangeText={setLogin}
          placeholder='Insira seu login'
        />

        <TextInput 
          value={password}
          onChangeText={setPassword}
          placeholder='Entre com sua senha'
        />
        <Button 
          title='Entrar'
          onPress={handleAccessButton}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})