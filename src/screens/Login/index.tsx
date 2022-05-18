import React, { useContext, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { AuthContext } from "../../context/AuthContext";

interface RouteNavigation {
  navigation: NativeStackNavigationProp<any>
}

export default function Login({ navigation }: RouteNavigation) {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signature, setSignature } = useContext(AuthContext);

  const handleAccessButton = () => {
    // Alert.alert('Atenção', 'Você está logado!');
    setSignature(true);

  }

  const handleRegister = () => {
    navigation.navigate('Register');
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

        <TouchableOpacity onPress={handleRegister} style={styles.opacityButtonBox}>
          <Text style={styles.opacityButton}>Ainda não tem cadastro?</Text>
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
  },
  opacityButton: {
    color: 'red',
  },
  opacityButtonBox: {
    flexDirection: 'row-reverse',
    marginTop: 12,
  }
})