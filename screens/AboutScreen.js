import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AboutScreen() {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.homeContainer}>
                <Text style={styles.homeHeading}>About Us</Text>
                <Text style={styles.homeContent}>The working principles of React Native are virtually identical to React except that React Native does not manipulate the DOM via the Virtual DOM. It runs in a background process (which interprets the JavaScript written by the developers) directly on the end-device and communicates with the native platform via serialized data over an asynchronous and batched bridge.</Text>
                <Text style={styles.homeContent}>React components wrap existing native code and interact with native APIs via React's declarative UI paradigm and JavaScript.</Text>
                <Text style={styles.homeHeading}>Sample Application</Text>
                <Text style={styles.homeContent}>Click the below sample "eShopping" React Native application and its built with Expo.</Text>
                <Button
                    title="eShopping"
                    color="#7fad39"
                    onPress={() => {navigation.navigate('Home_Screen')}}
                />
                <Text style={styles.homeContent}>This application provides number of sections and screens. They are as follows,</Text>
                <Text style={styles.homeContent}>Screens: Home Screen (with all available categories), About US screen, static help & support screen, category wise products list screen, Product details screen, and shopping cart screen with items total.</Text>
            </View>
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
    
    homeContent: {
      fontSize: 14,
      paddingTop:6,
      paddingBottom: 6,
      lineHeight: 20
    },
    
});