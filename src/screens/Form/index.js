import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

export default function Form() {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');

    function handleDescriptionChange(description) {
        setDescription(description);
    
    }
    function handleQuantityChange(quantity) {
        setQuantity(quantity);
    
    }
    function handleButtonPress() {
        console.log({id: newDate('2022-01-25').getTime(), description, quantity});
        Navigation.navigate('AppList');

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Item para compra</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={handleDescriptionChange} 
                    style={styles.input}
                    placeholder='O que está faltando em casa?'
                />

                <TextInput
                    onChangeText={handleQuantityChange}
                    style={styles.input}
                    placeholder='Digite a quantidade'
                    keyboardType='numeric'
                />
                <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
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
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

  });