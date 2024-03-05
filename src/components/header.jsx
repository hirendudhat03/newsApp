import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS} from '../helper';

const Header = ({backPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={backPress}>
        <Ionicons name="arrow-back-outline" size={28} color={COLORS.black} />
      </TouchableOpacity>
      <Text style={styles.title}>NEWS Details</Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: '3%',
    fontFamily: FONTS.Medium,
    color: COLORS.black,
    fontSize: 18,
  },
});
