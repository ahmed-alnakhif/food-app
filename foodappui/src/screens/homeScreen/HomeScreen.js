import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HomeHeader from '../../components/headers/homeHeader/HomeHeader';
import Search from '../../components/search/Search';
import Categories from '../../components/categories/Categories';
import Popular from '../../components/popular/Popular';
import styles from './Styles';

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


