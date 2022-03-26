import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors/colors';
import fonts from '../../../assets/fonts/fonts';

export default styles = StyleSheet.create({
  sectionWrapper: {
    paddingHorizontal: 20,
    marginBottom: 18,
  },
  sectionTitle: {
    fontFamily: fonts.montserratBold,
    color: colors.textDark,
    fontSize: 16,
  },
  wrapper: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  leftContainer: {},
  rightContainer: {
    marginLeft: 40,
  },
  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 10,
    fontFamily: fonts.montserratBold,
    fontSize: 14,
    color: colors.textDark,
  },
  midWrapper: {
    marginTop: 20,
  },
  itemTitle: {
    fontFamily: fonts.montserratBold,
    fontSize: 13,
    color: colors.textDark,
  },
  itemWeight: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  bottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  plusButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  ratingText: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  cardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
