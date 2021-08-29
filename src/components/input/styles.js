import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

const styles = StyleSheet.create({
  inputContainer: {},
  inputLable: {
    color: colors.text.white,
    fontSize: 16,
    marginBottom: 3,
  },
  input: {
    backgroundColor: colors.app.white,
    borderRadius: 6,
    padding: 10,
    color: colors.text.black,
  },
});

export default styles;
