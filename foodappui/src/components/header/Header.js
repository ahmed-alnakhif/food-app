import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../assets/colors/colors'

export default function Header() {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            style={styles.avatarImage}
            source={require('../../../assets/images/profile.png')}
          />
          <Feather name="menu" size={24} color={colors.textLight} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 20,
    alignItems: 'center',
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
