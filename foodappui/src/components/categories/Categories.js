import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../assets/colors/colors';
import categoriesData from '../../../assets/data/categoriesData';

export default Categories = () => {
  const [categories, setCategories] = useState(categoriesData);
  const [selectedId, setSelectedId] = useState(1);

  const renderCategoryItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={[
          styles.categoryItem.wrapper,
          {
            backgroundColor: item.id == selectedId ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
        <Image style={styles.categoryItem.image} source={item.image} />
        <Text style={styles.categoryItem.title}>{item.title}</Text>
        <View
          style={[
            styles.categoryItem.selectWrapper,
            {
              backgroundColor: item.id == selectedId ? colors.white : colors.secondary,
            },
          ]}>
          <Feather
            style={[
              styles.categoryItem.selectIcon,
              { color: item.id == selectedId ? colors.black : colors.white },
            ]}
            name="chevron-right"
            size={8}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.listWrapper}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    paddingHorizontal: 20,
    fontSize: 16,
    color: colors.textDark,
  },
  listWrapper: {
    paddingTop: 15,
    paddingBottom: 25,
  },
  categoryItem: {
    wrapper: {
      backgroundColor: colors.primary,
      marginVertical: 10,
      marginRight: 20,
      borderRadius: 20,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 3,
    },
    image: {
      width: 60,
      height: 60,
      marginTop: 25,
      alignSelf: 'center',
      marginHorizontal: 20,
    },
    title: {
      textAlign: 'center',
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 14,
      marginTop: 10,
    },
    selectWrapper: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: 20,
      width: 26,
      height: 26,
      borderRadius: 26,
      marginBottom: 20,
    },
    selectIcon: {
      alignSelf: 'center',
    },
  },
});
