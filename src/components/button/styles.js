import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.button.white,
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: colors.button.main,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default styles;
