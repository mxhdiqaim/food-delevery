import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#FC6D3F', // orange
  secondary: '#CDCDD2', // gray

  // colors
  black: '#000',
  white: '#FFFFFF',
  color: '#333',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#898C95',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,
  color: '#000',

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontSize: SIZES.h1, color: '#000', lineHeight: 36},
  h2: {fontSize: SIZES.h2, color: '#000', lineHeight: 30},
  h3: {fontSize: SIZES.h3, color: '#000', lineHeight: 22},
  h4: {fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontSize: SIZES.body1, color: '#000', lineHeight: 36},
  body2: {fontSize: SIZES.body2, color: '#000', lineHeight: 30},
  body3: {fontSize: SIZES.body3, color: '#000', lineHeight: 22},
  body4: {fontSize: SIZES.body4, color: '#000', lineHeight: 22},
  body5: {fontSize: SIZES.body5, color: '#000', lineHeight: 22},
};
