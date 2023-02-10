import React, {useEffect, useState, useContext} from 'react';
import Toast from 'react-native-root-toast';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  StyleSheet,
  Pressable
  } from 'react-native';
import { Breadcrumb } from '../components/breadcrumb.js';
import { getProduct } from '../services/productService.js';
import { CartItemsContext } from '../context/CartItems';

export function ProductDetails({route}) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  const [toastFlag, setToastFlag] = useState(false);
  
  const { addItemToCart } = useContext(CartItemsContext);
  
  useEffect(() => {
    setProduct(getProduct(productId));
  });
  
  function onAddToCart() {
    addItemToCart(product.id);
    setToastFlag(true);
    setTimeout(() => setToastFlag(false), 2000);
  }
  
  return (
    <>
        <Toast
        visible={toastFlag}
        position={100}
        shadow={false}
        animation={true}
        hideOnPress={true}
        >Success: You have added {product.name} to your shopping cart!</Toast>
    <Breadcrumb name={product.name} />
    <SafeAreaView style={styles.card}>
        <ScrollView >
            <View style={styles.cardCntr}>
                <Image 
                style={styles.image}
                source={product.image}
                />
                <View style={styles.infoContainer}>

                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>PLN {product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>

                    <Pressable style={styles.button} onPress={onAddToCart}>
                    <Text style={styles.buttonText}>Add to cart</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    height: '100%',
  },
  cardCntr: {
    padding: 10
  },
  image: {
    resizeMode: 'center',
    height: '100%',
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    borderColor: '#7fad39',
    borderWidth: 1
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#7fad39',
    textTransform: 'uppercase'
  }
});