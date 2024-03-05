import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// tabBar
import TabBar from './tabBar';
// screens
import Details from '../screens/details';
// helper
import {routes} from '../helper';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.tabBar} component={TabBar} />
      <Stack.Screen name={routes.details} component={Details} />
    </Stack.Navigator>
  );
};
export default Router;
