import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app.main,
  },
  imageContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  button1: {
    paddingHorizontal: 30,
  },
  button2: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
});

export default styles;
