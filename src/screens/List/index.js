import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function List({ route, navigation }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.warn("Tela lista")

    }, [route])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Compras</Text>
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.itemsContainer}>
                {
                    items.map((item) => {
                        return <AppItem key={item.id} id={item.id} item={item.quantity + '  de ' + item.description} />
                    })
                }
            </ScrollView>
            <StatusBar barStyle='light-content' />
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D93600',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: 20
    },
    scrollContainer: {
      flex: 1,
      width: '90%'
    },
    itemsContainer: {
      marginTop: 10,
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      alignItems: 'stretch',
      backgroundColor: '#fff'
    },
  });