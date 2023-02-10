import React, { useState } from 'react';
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from 'react-hook-form';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableHighlight,
    Button
} from 'react-native';
import { TextInput } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

export default function ContactScreen() {
    
    const navigation = useNavigation();
    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm({
        criteriaMode: "all"
      });
      const onSubmit = (data) => console.log(data);
    
 
    return (
        <>
            <View style={styles.homeContainer}>
                <Text style={styles.homeHeading}>Help & Support</Text>
                <Text style={styles.homeContent}>Let our dedicated enterprise team deliver the best service. We are here to help maximise your business growth and take your website to a whole new level.</Text>
                <Text style={styles.homeContent}>Have more questions on eShopping services offered? Drop us an email and we will get back to you as soon as possible.</Text>
                <SafeAreaView>
                <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput activeUnderlineColor="#7fad39" style={{ backgroundColor: '#F8F9FA'  }} label="First Name" />
                <TextInput activeUnderlineColor="#7fad39" style={{ backgroundColor: '#F8F9FA' }} label="Last Name" />
                <TextInput activeUnderlineColor="#7fad39" style={{ backgroundColor: '#F8F9FA' }} label="Email" />
                <TextInput activeUnderlineColor="#7fad39" style={{ backgroundColor: '#F8F9FA' }} label="Mobile Number" />
                <TextInput activeUnderlineColor="#7fad39" style={{ backgroundColor: '#F8F9FA' }} label="Message" />
                <Button
                    title="Send Message"
                    color="#7fad39"
                    onPress={() => {navigation.navigate('Home_Screen')}}
                />
                
                </form>


                
                </SafeAreaView>
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
    emailInput: {
        width: 250,
        height: 50,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        padding: 2,
    },
    button: {
        backgroundColor: 'lightgreen',
        borderRadius: 15,
        marginTop: 25,
        padding: 10,
        alignItems: 'center'
      },
      buttonText: {
        color: 'white'
    },
    input: {
        borderColor: '#cccccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
    }
});