/**
 * Theme index
 * This file exports all theme elements for easy access
 */

import colors from './colors';
import typography from './typography';
import spacing from './spacing';
import shadows from './shadows';

// Border radius values
const borderRadius = {
  none: 0,
  sm: 2,
  md: 4,
  lg: 8,
  xl: 12,
  '2xl': 16,
  '3xl': 24,
  full: 9999,
};

// Z-index values
const zIndex = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  auto: 'auto',
  modal: 1000,
  tooltip: 1100,
  toast: 1200,
};

// Animation timing
const animation = {
  fast: 200,
  normal: 300,
  slow: 500,
};

// Export the complete theme
const theme = {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  zIndex,
  animation,
};

export type Theme = typeof theme;

export {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  zIndex,
  animation,
};

export default theme; 