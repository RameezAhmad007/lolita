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
    padding: 16,
    marginTop: 20,
  },
  orderDetail: {
    backgroundColor: colors.app.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  orderList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  imageContainer: {
    height: 66,
    width: 60,
    borderWidth: 2,
    borderColor: colors.app.main,
    borderRadius: 10,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  divider: {
    flex: 1,
    backgroundColor: colors.app.white,
    borderWidth: 2,
    borderColor: colors.app.main,
    borderRadius: 50,
    marginHorizontal: 10,
    height: 6,
  },
  price: {
    fontWeight: 'bold',
    color: colors.text.black,
    marginRight: 10,
  },
  quantityContainer: {
    borderWidth: 2,
    borderColor: colors.app.main,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    width: 24,
  },
  quantity: {
    color: colors.text.black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  totalAmountContainer: {
    paddingVertical: 60,
    paddingHorizontal: 5,
  },
  totalDevider: {
    backgroundColor: colors.app.white,
    borderWidth: 4,
    borderColor: colors.app.main,
    borderRadius: 50,
    height: 12,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
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
