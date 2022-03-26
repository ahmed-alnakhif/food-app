import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import popularData from '../../../assets/data/popularData';
import colors from '../../../assets/colors/colors';
import styles from './Styles';

export default function Popular({ navigation }) {
  return (
    <View style={styles.sectionWrapper}>
      <Text style={styles.sectionTitle}>Popular</Text>

      {popularData.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate('DetailsScreen', { item: item })}
          style={[styles.wrapper, { marginTop: item.id == 1 ? 10 : 20 }]}>
          <View style={styles.leftContainer}>
            <View style={styles.topWrapper}>
              <MaterialCommunityIcons
                name="crown"
                size={12}
                color={colors.primary}
              />
              <Text style={styles.headerText}>top of the week</Text>
            </View>

            <View style={styles.midWrapper}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemWeight}>Weight {item.weight}</Text>
            </View>

            <View style={styles.bottomWrapper}>
              <View style={styles.plusButton}>
                <Feather name="plus" size={12} color={colors.black} />
              </View>
              <View style={styles.ratingWrapper}>
                <MaterialCommunityIcons
                  name="star"
                  size={10}
                  color={colors.textDark}
                />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>
          </View>

          <View style={styles.rightContainer}>
            <Image style={styles.cardImage} source={item.image} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

