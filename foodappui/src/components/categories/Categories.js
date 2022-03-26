import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Styles';
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


