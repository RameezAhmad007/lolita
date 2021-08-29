import React from 'react';
import {View, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../utils/theme';
import styles from './styles';

const Header = props => {
  const {
    menuHandler = () => {},
    cartHandler = () => {},
    backgroundColor = colors.app.main,
  } = props;
  return (
    <SafeAreaView style={[styles.containerStyle, {backgroundColor}]}>
      <StatusBar backgroundColor={backgroundColor} barStyle="light-content" />
      <View style={[styles.viewStyle, {backgroundColor}]}>
        <TouchableOpacity onPress={menuHandler}>
          <Icon name="menu" size={24} color={colors.text.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={cartHandler}>
          <Icon name="shopping-cart" size={24} color={colors.text.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
