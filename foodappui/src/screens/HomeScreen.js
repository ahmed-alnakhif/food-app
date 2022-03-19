import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import Categories from '../components/categories/Categories';
import Popular from '../components/popular/Popular';
import colors from '../../assets/colors/colors';

export default HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <Header />

        <View style={styles.titles.wrapper}>
          <Text style={styles.titles.subtitle}>Food</Text>
          <Text style={styles.titles.title}>Delivery</Text>
        </View>

        <Search />

        <Categories />

        <Popular />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titles: {
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
  },
});
