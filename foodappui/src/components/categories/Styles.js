import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors/colors';
import fonts from '../../../assets/fonts/fonts';

export default styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
  },
  title: {
    fontFamily: fonts.montserratBold,
    paddingHorizontal: 20,
    fontSize: 16,
    color: colors.textDark,
  },
  listWrapper: {
    paddingTop: 15,
    paddingBottom: 25,
  },
  categoryItem: {
    wrapper: {
      backgroundColor: colors.primary,
      marginVertical: 10,
      marginRight: 20,
      borderRadius: 20,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 3,
    },
    image: {
      width: 60,
      height: 60,
      marginTop: 25,
      alignSelf: 'center',
      marginHorizontal: 20,
    },
    title: {
      textAlign: 'center',
      fontFamily: fonts.montserratSemiBold,
      fontSize: 14,
      marginTop: 10,
    },
    selectWrapper: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: 20,
      width: 26,
      height: 26,
      borderRadius: 26,
      marginBottom: 20,
    },
    selectIcon: {
      alignSelf: 'center',
    },
  },
});
