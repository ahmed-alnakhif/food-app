import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors/colors';
import fonts from '../../../assets/fonts/fonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontFamily: fonts.montserratRegular,
    fontSize: 16,
    color: colors.textDark,
  },
  title: {
    fontFamily: fonts.montserratBold,
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
});
