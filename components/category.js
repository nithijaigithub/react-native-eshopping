import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export function Category({name, image, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.imageContainer}>
      <Image
        source={image}
        style={{
            resizeMode: 'center',
            height: 80,
            width: 100,
          }}
      />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 4,
    margin: 6,
    width: '45%',
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
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  infoContainer: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666'
  }
});