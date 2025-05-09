/**
 * Spacing values
 * This file contains all the spacing values used in the application
 */

export const spacing = {
  // Base spacing unit (4px)
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
};

// Layout specific spacing
export const layout = {
  screenPadding: spacing[4], // 16px padding for screens
  cardPadding: spacing[4],   // 16px padding for cards
  sectionGap: spacing[6],    // 24px gap between sections
  itemGap: spacing[3],       // 12px gap between items
};

export default {
  spacing,
  layout,
}; 