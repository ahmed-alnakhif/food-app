import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../assets/colors/colors';
import styles from './Styles';

export default function Search() {
  return (
    <View style={styles.wrapper}>
      <Feather name="search" size={16} color={colors.textLight} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Search</Text>
      </View>
    </View>
  );
}


