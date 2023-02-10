import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { CartItemsContext } from '../context/CartItems';
import { Breadcrumb } from '../components/breadcrumb';
import { useNavigation } from '@react-navigation/native';

export function ShoppingCart () {
  const navigation = useNavigation();
  const {items, getTotalPrice} = useContext(CartItemsContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
       <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>PLN {total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
       </View>
    );
  }
  
  function renderItem({item}) {
    return (
        <View style={styles.cartLine}>
            <Text style={styles.lineLeft}>
              <TouchableOpacity onPress={() => {
                navigation.navigate('ProductDetails', {
                  productId: item.id,
                });
              }}>
                <Image
                source={item.product.image}
                style={{
                resizeMode: 'center',
                height: 50,
                width: 70,
                }}
                /> 
                </TouchableOpacity>
            </Text> 
            <Text>
                {item.product.name} <br></br>Quantity: {item.qty} <br></br>
                            </Text>
            <Text style={styles.lineRight}>PLN {item.totalPrice.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
    </View>
    );
  }
  
  return (
    <>
        <Breadcrumb name={'My Bag Items'} />
        { items.length > 0 ?
            <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.product.id.toString()}
            ListFooterComponent={Totals}
            /> : <Text style={styles.emptyContainer}>Empty Cart!</Text>
        }
        
    </>
  );
}

const styles = StyleSheet.create({
  cartCntr: {
    backgroundColor: '#ffffff',
    height: '100%'
  },
  cartLine: { 
    flexDirection: 'row',
    backgroundColor: '#ffffff',
      margin: 6,
      padding: 10,
      fontFamily: 'arial',
      color: '#666',
      borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    margin: 10,
    padding: 10
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 14,  
    color:'#000',
  },
  lineRight: { 
    flex: 1,
    fontSize: 14, 
    fontWeight: 'bold', 
    color:'#333333', 
    textAlign:'right',
    textAlignVertical: 'center'
  },
  itemsList: {
    backgroundColor: '#ffffff',
  },
  itemsListContainer: {
    backgroundColor: '#ffffff',
  },
  emptyContainer: {
    backgroundColor: '#ffffff',
    height: '100%',
    padding: 20
  }
});