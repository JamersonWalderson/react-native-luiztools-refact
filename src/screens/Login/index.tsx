import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function login() {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleAccessButton = () => {
    Alert.alert('Atenção', 'Você está logado!');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Entre com suas credênciais</Text>
      <View style={styles.box}>
      
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
        <TouchableOpacity onPress={handleAccessButton} >
          <Text style={styles.button}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
    padding: 20
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  box: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  button: {
    borderRadius: 50,
    backgroundColor: 'red',
    textAlign: 'center',
    padding: 10,
    color: '#fff'
  }
})