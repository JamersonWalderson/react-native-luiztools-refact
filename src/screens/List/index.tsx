import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import AppItem from "../../components/AppItem";

export default function List({ route, navigation }: any) {
    const [items, setItems] = useState([
    {
      'id': 1,
      'quantity': 2,
      'description': 'alguma coisa!',
    },
    {
      'id': 2,
      'quantity': 1,
      'description': 'alguma coisa!!',
    },
  ]);

    useEffect(() => {
        // console.log("Tela lista");

    }, [route])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Compras</Text>
            <View style={styles.header}>
              <Text style={styles.title}>Unidades</Text>
              <Text style={styles.title}>Item</Text>
            </View>
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.itemsContainer}>
                {
                    items.map((item) => {
                        return <AppItem key={item.id} id={item.id} quantity={item.quantity} item={item.description} />
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
    header: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%'
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