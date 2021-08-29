import React from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../components/header';
import styles from './styles';

const Products = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Pre-made</Text>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('../../images/shirt.png')}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('../../images/shirt.png')}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('../../images/shirt.png')}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('../../images/shirt.png')}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Products;
