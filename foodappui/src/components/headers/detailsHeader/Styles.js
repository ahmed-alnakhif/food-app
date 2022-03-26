import { StyleSheet } from 'react-native';
import colors from '../../../../assets/colors/colors';

export default styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
  },
});
