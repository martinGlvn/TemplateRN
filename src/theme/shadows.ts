/**
 * Shadow styles
 * This file contains all the shadow styles used in the application
 */

import { Platform } from 'react-native';
import colors from './colors';

// Helper function to create shadows for both iOS and Android
const createShadow = (
  elevation: number,
  opacity: number = 0.2,
  radius: number = elevation * 0.75,
  height: number = elevation * 0.5,
  width: number = 0
) => {
  return Platform.select({
    ios: {
      shadowColor: colors.black,
      shadowOffset: {
        width,
        height,
      },
      shadowOpacity: opacity,
      shadowRadius: radius,
    },
    android: {
      elevation,
    },
  });
};

export const shadows = {
  none: createShadow(0, 0, 0, 0, 0),
  xs: createShadow(1, 0.15, 1, 1, 0),
  sm: createShadow(2, 0.15, 2, 1, 0),
  md: createShadow(4, 0.15, 3, 2, 0),
  lg: createShadow(6, 0.15, 4, 3, 0),
  xl: createShadow(8, 0.15, 5, 4, 0),
  '2xl': createShadow(12, 0.15, 8, 6, 0),
  '3xl': createShadow(16, 0.15, 12, 8, 0),
};

export default shadows; 