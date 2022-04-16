import React, { useContext, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { AuthContext } from '../../context/AuthContext';

interface RouteNavigation {
  navigation: NativeStackNavigationProp<any>
}

export default function Register({ navigation }: RouteNavigation) {
  const { handleNewAccount } = useContext(AuthContext);

  const [createLogin, setCreateLogin] = useState<string>('');
  const [createPassword, setCreatePassword] = useState<string>('');

  const handleRegisterButton = () => {
    if(createLogin && createPassword) {
      handleNewAccount(createLogin, createPassword);
    }

    // navigation.navigate('Login');
  }

  const handleRegister = () => {
    navigation.navigate('Login');
  }

  


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Registre</Text>
      <View style={styles.box}>
        <TouchableOpacity onPress={handleRegister} style={styles.opacityButtonBox}>
          <Text style={styles.opacityButton}>Já possui cadastro?</Text>
        </TouchableOpacity>
      
        <TextInput 
          value={createLogin}
          onChangeText={setCreateLogin}
          placeholder='Insira seu e-mail'
        />

        <TextInput 
          value={createPassword}
          onChangeText={setCreatePassword}
          placeholder='Digite uma senha forte'
        />

        <TouchableOpacity onPress={handleRegisterButton} >
          <Text style={styles.button}>Criar perfil</Text>
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