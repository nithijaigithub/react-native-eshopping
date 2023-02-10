import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Breadcrumb({name}) {
    const navigation = useNavigation();
  return (
    <View style={styles.breadcrumbCntr}>
    <Text>
        <Text style={styles.breadcrumbTitle} 
            onPress={() => { 
                navigation.navigate('Home_Screen');
            }}
        >
        {'Home'}
        </Text>
        <Text style={styles.breadcrumbTitleText}> > {name}</Text>
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    breadcrumbCntr: {
        // backgroundColor: '#ffffff',
        // paddingLeft: 22,
        // paddingRight: 22,
        // paddingBottom: 10,
        // paddingTop: 10,
        // borderRadius: 4,
        // margin: 10

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
      breadcrumbTitle: {
        fontSize: 16,
        color: '#7fad39',
        fontWeight: 'bold',
        fontFamily: 'arial',
      },
      breadcrumbTitleText: {
        fontSize: 16,
        color: '#666666',
        fontWeight: 'bold',
        fontFamily: 'arial',
      }
});