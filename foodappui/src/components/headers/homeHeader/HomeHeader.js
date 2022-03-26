import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Styles';

export default function HomeHeader() {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            style={styles.avatarImage}
            source={require('../../../../assets/images/profile.png')}
          />
          <Feather name="menu" size={24} color={colors.textLight} />
        </View>
      </SafeAreaView>
    </View>
  );
}
