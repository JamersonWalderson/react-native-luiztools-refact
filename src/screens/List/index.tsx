import React, { useContext, useEffect, useState } from "react";
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View, VirtualizedList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppItem from "../../components/AppItem";
import { ProductContext } from '../../context/ProductContext';

interface Props {
  item: string,
  quantity: number,
}

export default function List({ route, navigation }: any) {
  const { product, setProduct } = useContext(ProductContext);
  
  const ItemComponent = ({ description, quantity}: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.quantity}>{ quantity }</Text>
        <Text style={styles.description}>{ description }</Text>
    </View>
    )
  }
    
  useEffect(() => {

  }, [route])

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle='light-content' />
      <View style={styles.container}>
          <Text style={styles.title}>Lista de Compras</Text>

          <View style={styles.header}>
            <Text style={styles.title}>Unidades</Text>
            <Text style={styles.title}>Item</Text>
          </View>

          <View style={styles.scrollContainer}>
            <VirtualizedList
              data={product}
              renderItem={({ item }: any) => <ItemComponent quantity={item.quantity} description={item.description} />}
              initialNumToRender={4}
              getItemCount={() => product.length}
              getItem={(item, index: number) => item[index]}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          
      </View>
    </SafeAreaView>
      
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
      width: '90%',
      marginTop: 10,
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      alignItems: 'stretch',
      backgroundColor: '#fff'
    },

    item: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 5,
    },
    quantity: {
  
    },
    description: {
      color: 'green',
    }
  });