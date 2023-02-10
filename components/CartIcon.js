import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CartItemsContext } from '../context/CartItems';

export function CartIcon() {
  const {getItemsCount} = useContext(CartItemsContext);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text} 
        onPress={() => { 
          navigation.navigate('Shopping_Cart');
        }}
      >My Bag ({getItemsCount()})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    backgroundColor: '#ffffff',
    height: 30,
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#7fad39',
    fontWeight: 'bold',
  },
});