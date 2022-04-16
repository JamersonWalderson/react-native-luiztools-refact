import { NavigationContainer, Route } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { View } from 'react-native';
import { ProductContext } from '../../context/ProductContext';
import Button from '../../components/Button';

interface RouteNavigation {
  navigation: NativeStackNavigationProp<any>
}

export default function Form({ navigation }: RouteNavigation) {
  const [description, setDescription] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');

  const { product, setProduct } = useContext(ProductContext);

  function handleDescriptionChange(description: string) {
    setDescription(description);
  
  }
  function handleQuantityChange(quantity: string) {
    setQuantity(quantity);
  
  }
  function handleButtonPress() {
    setProduct([...product, 
    {
      quantity: quantity,
      description: description
    }]);
    setQuantity('');
    setDescription('');
      
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item para compra</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={description}
          onChangeText={handleDescriptionChange} 
          style={styles.input}
          placeholder='O que está faltando em casa?'
        />

        <TextInput
          value={quantity}
          keyboardType='numeric'
          onChangeText={handleQuantityChange}
          style={styles.input}
          placeholder='Digite a quantidade'
        />
       <Button label='Salvar' onPress={handleButtonPress}/>
      </View>
      <StatusBar barStyle='light-content'/>
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 10,
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'

      
  },

});