import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HomeHeader from '../components/headers/HomeHeader';
import Search from '../components/search/Search';
import Categories from '../components/categories/Categories';
import Popular from '../components/popular/Popular';
import colors from '../../assets/colors/colors';

export default HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <HomeHeader />

        <View style={styles.wrapper}>
          <Text style={styles.subtitle}>Food</Text>
          <Text style={styles.title}>Delivery</Text>
        </View>

        <Search />

        <Categories />

        <Popular navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
});
