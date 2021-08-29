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
  inputContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  cardNumber: {
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  expirationDate: {
    flex: 0.7,
  },
  expirationDateInput: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  cvv: {
    flex: 0.3,
  },
  cvvInput: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  button: {
    paddingHorizontal: 30,
  },
  buttonText: {
    color: colors.text.black,
    fontWeight: 'bold',
  },
});

export default styles;
