import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = props => {
  const {
    onPress = () => {},
    text = 'text',
    buttonContainerStyle,
    buttonTextStyle,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, buttonContainerStyle]}>
      <Text style={[styles.btnText, buttonTextStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
