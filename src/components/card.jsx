/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTS, height, routes} from '../helper';

const Card = ({data, navigation}) => {
  const renderItem = useCallback(({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.renderContainer}
        onPress={() => navigation.navigate(routes.details, {data: item})}>
        <View style={styles.imageContainer}>
          {item.urlToImage ? (
            <Image
              source={{uri: item.urlToImage}}
              resizeMode="cover"
              style={styles.image}
            />
          ) : (
            <Text style={styles.renderTitle}>No Image</Text>
          )}
        </View>
        <View style={styles.renderContentContainer}>
          <View style={styles.renderTitleContainer}>
            <Text numberOfLines={2} style={styles.renderTitle}>
              {item.title}
            </Text>
          </View>
          <View style={styles.authorContainer}>
            <Text style={styles.authorText} numberOfLines={1}>
              {item.author ? item.author : 'No Author'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={styles.listContainer}>
      {data.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No News Found</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};
export default Card;
const styles = StyleSheet.create({
  contentContainerStyle: {
    gap: 30,
  },
  listContainer: {
    flex: 1,
    padding: '5%',
  },
  renderContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: height / 10,
    width: '90%',
    borderRadius: 10,
  },
  renderContentContainer: {
    flex: 2,
    paddingHorizontal: '2%',
  },
  renderTitleContainer: {
    flex: 5,
    justifyContent: 'center',
  },
  renderTitle: {
    color: COLORS.black,
    fontFamily: FONTS.SemiBold,
    fontSize: 14,
  },
  authorContainer: {
    flex: 1,
  },
  authorText: {
    color: COLORS.grey,
    fontFamily: FONTS.SemiBold,
    fontSize: 11,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: FONTS.SemiBold,
    fontSize: 20,
    color: COLORS.orange,
  },
});
