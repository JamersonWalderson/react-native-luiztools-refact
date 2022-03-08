import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppItem({ id, item, quantity }) {

  return (
    <View key={ id } style={styles.item}>
      <Text style={styles.quantity}>{ quantity }</Text>
      <Text style={styles.description}>{ item }</Text>
    </View>
    
  );

}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 5,
  },
  quantity: {

  },
  description: {
    color: 'green',
  }
})