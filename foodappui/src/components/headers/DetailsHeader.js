import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default DetailsHeader = ({ navigation }) => {
  const [isFavorite, setIsFavorite] = useState(true);

  return (
    <SafeAreaView>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.headerLeft}>
            <Feather name="chevron-left" size={12} color={colors.textDark} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
          <View
            style={[
              styles.headerRight,
              { 
                backgroundColor: isFavorite ? colors.primary : colors.white,
              },
            ]}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={isFavorite ? colors.white : colors.primary}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
