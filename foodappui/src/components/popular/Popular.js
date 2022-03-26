import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import popularData from '../../../assets/data/popularData';
import colors from '../../../assets/colors/colors';

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

const styles = StyleSheet.create({
  sectionWrapper: {
    paddingHorizontal: 20,
    marginBottom: 18,
  },
  sectionTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  wrapper: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  leftContainer: {},
  rightContainer: {
    marginLeft: 40,
  },
  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  midWrapper: {
    marginTop: 20,
  },
  itemTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,
    color: colors.textDark,
  },
  itemWeight: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,
    color: colors.textLight,
    marginTop: 5,
  },
  bottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  plusButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  ratingText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  cardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
