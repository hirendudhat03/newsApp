import {Dimensions} from 'react-native';

export const COLORS = {
  black: '#000000',
  white: '#ffffff',
  orange: '#F98121',
  grey: '#6e6d6d',
};

export const FONTS = {
  Bold: 'Poppins-Bold',
  Medium: 'Poppins-Medium',
  Regular: 'Poppins-Regular',
  SemiBold: 'Poppins-SemiBold',
};

export const routes = {
  tabBar: 'tabBar',
  homeStack: 'homeStack',
  home: 'home',
  details: 'details',
  politics: 'politics',
  business: 'business',
  tech: 'tech',
};

export const {height, width} = Dimensions.get('window');
