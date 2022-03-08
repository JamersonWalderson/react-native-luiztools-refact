import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface AppItemData {
  id: number,
  item: string,
  quantity: number,
}

export default function AppItem({ id, item, quantity }: AppItemData) {

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
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  quantity: {

  },
  description: {
    color: 'green',
  }
})