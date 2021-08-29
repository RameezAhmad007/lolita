import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../../components/button';
import Header from '../../components/header';
import styles from './styles';

const PaymentOrder = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Payment</Text>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.orderDetail}>
            <View style={styles.orderList}>
              <View style={styles.imageContainer}>
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={require('../../images/shirt.png')}
                />
              </View>
              <View style={styles.divider}></View>
              <Text style={styles.price}>$30</Text>
              <View style={styles.quantityContainer}>
                <Text style={styles.quantity}>2</Text>
              </View>
            </View>

            <View style={styles.totalAmountContainer}>
              <View style={styles.totalDevider}></View>
              <View style={styles.totalContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>$120</Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              buttonContainerStyle={styles.button}
              buttonTextStyle={styles.buttonText}
              text="Pay Now"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default PaymentOrder;
