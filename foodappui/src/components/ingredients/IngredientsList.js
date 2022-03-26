import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './Styles';

export default IngredientsList = ({ item }) => {
  const renderIngredientsItem = ({ item }) => {
    return (
      <View
        style={[
          styles.ingredientItemWrapper,
          {
            marginLeft: item.id === '1' ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.ingredientImage} />
      </View>
    );
  };

  return (
    <View style={styles.ingredientsWrapper}>
      <Text style={styles.ingredientsTitle}>Ingredients</Text>
      <View style={styles.ingredientsListWrapper}>
        <FlatList
          data={item.ingredients}
          renderItem={renderIngredientsItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

