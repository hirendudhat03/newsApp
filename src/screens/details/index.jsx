import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
// components
import Container from '../../components/container';
import Header from '../../components/header';
// helper
import {COLORS, FONTS, height, width} from '../../helper';

const Details = ({navigation, route}) => {
  const {data} = route.params;
  return (
    <Container>
      <Header backPress={() => navigation.goBack()} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          {data.urlToImage ? (
            <Image
              source={{uri: data?.urlToImage}}
              resizeMode="cover"
              style={styles.image}
            />
          ) : (
            <Text style={styles.noImage}>No Image</Text>
          )}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data?.title}</Text>
        </View>
        <Text style={styles.content}>{data?.content}</Text>
      </ScrollView>
    </Container>
  );
};
export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: '20%',
  },
  imageContainer: {
    height: height / 3,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: height / 3,
    width: width,
  },
  noImage: {
    color: COLORS.black,
    fontFamily: FONTS.SemiBold,
    fontSize: 20,
  },
  titleContainer: {
    marginHorizontal: '5%',
    marginTop: '5%',
    borderLeftWidth: 4,
    borderLeftColor: COLORS.orange,
  },
  title: {
    color: COLORS.black,
    fontFamily: FONTS.SemiBold,
    fontSize: 20,
    marginLeft: '2%',
  },
  content: {
    marginHorizontal: '5%',
    marginTop: '5%',
    color: COLORS.grey,
    fontFamily: FONTS.Regular,
    fontSize: 14,
  },
});
