import React from 'react';
import {View, Image} from 'react-native';
import Button from '../../components/button';
import styles from './styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContent}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../images/shirt.png')}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button buttonContainerStyle={styles.button1} text="User" />
        <Button buttonContainerStyle={styles.button2} text="Pass" />
      </View>
    </View>
  );
};

export default Login;
