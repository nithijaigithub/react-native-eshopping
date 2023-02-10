import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

import { Product } from '../components/product.js';
import { Breadcrumb } from '../components/breadcrumb.js';
import { getProductsByCategory } from '../services/productService.js';

export function ProductList ({navigation, route}) {

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryId, categoryName } = route.params;

  useEffect(() => {
    console.log(route);
    setIsLoading(true);
    setTimeout(() => {
        setProducts(getProductsByCategory(categoryId));
        setIsLoading(false);
    }, 1000)
    navigation.setOptions({
        title: categoryName,
    });
  }, [categoryId, navigation]);
  
  return (
    <>
    <Breadcrumb name={categoryName} />
    {isLoading && products ? 
        <View style={[styles.indicatorContainer, styles.indicatorHorizontal]}>
        <ActivityIndicator color="#7fad39" size="large" />
        </View> : 
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    /> }
    </>
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  indicatorHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  }
});