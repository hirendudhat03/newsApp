/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// helper
import {COLORS, FONTS, routes} from '../helper';
// screens
import Home from '../screens/home';
import Politics from '../screens/politics';
import Business from '../screens/business';
import Tech from '../screens/tech';

const Tab = createMaterialTopTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.home}
      screenOptions={{
        tabBarIndicatorStyle: {
          borderBottomColor: COLORS.orange,
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen
        name={routes.home}
        component={Home}
        options={() => ({
          tabBarLabel: () => <Text style={styles.title}>Trending News</Text>,
        })}
      />
      <Tab.Screen
        name={routes.tech}
        component={Tech}
        options={() => ({
          tabBarLabel: () => <Text style={styles.title}>Tech</Text>,
        })}
      />
      <Tab.Screen
        name={routes.politics}
        component={Politics}
        options={() => ({
          tabBarLabel: () => <Text style={styles.title}>Politics</Text>,
        })}
      />
      <Tab.Screen
        name={routes.business}
        component={Business}
        options={() => ({
          tabBarLabel: () => <Text style={styles.title}>Business</Text>,
        })}
      />
    </Tab.Navigator>
  );
};
export default TabBar;
const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.Medium,
    color: COLORS.black,
    fontSize: 14,
  },
});
