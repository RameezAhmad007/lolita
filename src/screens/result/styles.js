import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app.main,
  },
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.text.white,
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 9,
    paddingVertical: 6,
    alignItems: 'center',
  },
  imageContainer: {
    height: 200,
    width: 150,
    // backgroundColor: colors.app.white,
    marginTop: 40,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
