import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const Input = props => {
  const {
    inputContainerStyle,
    inputLabelStyle,
    inputStyle,
    onChangeText,
    value,
    label,
    ...rest
  } = props;
  return (
    <View style={[styles.inputContainer, inputContainerStyle]}>
      <Text style={[styles.inputLable, inputLabelStyle]}>{label}</Text>
      <TextInput
        style={[styles.input, inputStyle]}
        onChangeText={onChangeText}
        value={value}
        {...rest}
      />
    </View>
  );
};

export default Input;
