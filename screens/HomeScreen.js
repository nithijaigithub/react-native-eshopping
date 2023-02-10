import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    FlatList,
} from 'react-native';
import { Category } from '../components/category.js';
import { getCategories } from '../services/categoryService.js';

export default function HomeScreen({ navigation }) {

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
    function renderCategory({item: category}) {
      return (   
        <Category {...category} 
        onPress={() => {
          navigation.navigate('ProductList', {
            categoryId: category.id,
            categoryName: category.name
          });
        }}
        />
      );
    }

    const [categories, setCategories] = useState([]);
    useEffect(() => {
      setCategories(getCategories());
    });

    return (
      <>
        <View style={styles.homeContainer}>
          <Text style={styles.homeHeading}>Welcome to React Native</Text>
          <Text style={styles.homeContent}>React Native is an open source framework for building Android and iOS applications using React and the app platform’s native capabilities. But first, let’s cover how components work in React Native.</Text>
        </View>
        <View style={styles.cartHeader}><Text style={styles.cartTitle}>All Categories</Text></View>
        {/* <FlatList
          contentContainerStyle={styles.productsListContainer}
          keyExtractor={(item) => item.id.toString()}
          data={products}
          renderItem={renderProduct}
        /> */}
        <FlatList
          contentContainerStyle={styles.categoriesListContainer}
          keyExtractor={(item) => item.id.toString()}
          data={categories}
          numColumns={2}
          renderItem={renderCategory}
        />
      </>
      );
}

const styles = StyleSheet.create({
    homeContainer: {
      backgroundColor: '#ffffff',
      margin: 12,
      padding: 16,
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
    homeHeading: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#666'
    },
    cartHeader: {
      backgroundColor: '#7fad39',
      marginLeft: 12,
      marginRight: 12,
      borderRadius: 6,
      padding: 10,
    },
    cartTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff',
      textTransform: 'uppercase'
    },
    homeContent: {
      fontSize: 14,
      paddingTop:6,
      paddingBottom: 6,
      lineHeight: 20
    },
    categoriesListContainer: {
      margin: 5,
    },
});