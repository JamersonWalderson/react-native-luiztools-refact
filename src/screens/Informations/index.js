import React, { useContext, useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

import { InformationContext } from '../../context/InformationContext';

export default function Information() {

    const { developer } = useContext(InformationContext);
    console.warn(developer);

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content'/>
            <Text style={styles.title}>Informações de contato</Text>
            <View style={styles.inputContainer}>
                <Text>Desenvolvido por { developer.name }</Text>
            </View>
            
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