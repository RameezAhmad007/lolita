import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/button';
import Header from '../../components/header';
import Input from '../../components/input';
import styles from './styles';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCvv] = useState('');
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Payment</Text>
        </View>
        <View style={styles.inputContent}>
          <Input
            inputContainerStyle={styles.cardNumber}
            label="Credit Card Number"
            onChangeText={value => setCardNumber(value)}
            value={cardNumber}
            keyboardType="numeric"
          />
          <View style={styles.inputContainer}>
            <Input
              inputContainerStyle={styles.expirationDate}
              inputStyle={styles.expirationDateInput}
              label="Expiration Date"
              onChangeText={value => setExpireDate(value)}
              value={expireDate}
            />
            <Input
              inputContainerStyle={styles.cvv}
              inputStyle={styles.cvvInput}
              label="CVV"
              onChangeText={value => setCvv(value)}
              value={cvv}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              buttonContainerStyle={styles.button}
              buttonTextStyle={styles.buttonText}
              text="Place Order"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Payment;
