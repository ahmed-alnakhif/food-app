import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles'

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


