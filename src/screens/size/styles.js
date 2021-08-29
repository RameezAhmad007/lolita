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
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  imageContainer: {
    height: 200,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  sizeText: {
    color: colors.text.white,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 16,
  },
  sliderValues: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'gold',
    width: 310,
  },
  sliderValueText: {
    color: colors.text.white,
    fontSize: 16,
  },
});

export default styles;
