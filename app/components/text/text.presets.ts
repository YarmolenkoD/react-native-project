import { TextStyle } from 'react-native'
import { color, fontWeights } from 'theme'

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  color: color.text,
  fontSize: 18,
}

const lineHeight = (height, multiplier = 1.2) => {
  return {
    minHeight: height * multiplier,
    // This prevents text with multiple lines from working
    // height: height * 1.2,
    fontSize: height,
    lineHeight: height * multiplier,
  }
}

/**
 * All the variations of text weight within the app.
 *
 * You want to customize these to whatever you need in your app.
 */

export const weights = {
  medium: {
    fontFamily: fontWeights.medium,
  },
  bold: {
    fontFamily: fontWeights.bold,
  },
  regular: {
    fontFamily: fontWeights.regular,
  },
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  p: { ...BASE, ...lineHeight(16, 1.5) } as TextStyle,

  d1: {
    ...BASE,
    ...lineHeight(48, 1.5),
  } as TextStyle,

  d2: {
    ...BASE,
    ...lineHeight(42, 1.5),
  } as TextStyle,

  d3: {
    ...BASE,
    ...lineHeight(36, 1.5),
  } as TextStyle,

  h1: {
    ...BASE,
    ...lineHeight(28, 1.5),
  } as TextStyle,

  h2: {
    ...BASE,
    ...lineHeight(24, 1.5),
  } as TextStyle,

  h3: {
    ...BASE,
    ...lineHeight(20, 1.5),
  } as TextStyle,

  h4: {
    ...BASE,
    ...lineHeight(16, 1.5),
  } as TextStyle,

  h5: {
    ...BASE,
    ...lineHeight(14, 1.5),
  } as TextStyle,

  h6: {
    ...BASE,
    ...lineHeight(12, 1.5),
  } as TextStyle,
}

export const PLACEHOLDER_BASE: TextStyle = {
  // margin: 0,
  // padding: 0,
}

export const placeholderPresets = {
  p: { ...PLACEHOLDER_BASE, ...lineHeight(18) },
  d1: { ...PLACEHOLDER_BASE, ...lineHeight(48) },
  d2: { ...PLACEHOLDER_BASE, ...lineHeight(42) },
  d3: { ...PLACEHOLDER_BASE, ...lineHeight(36) },
  h1: { ...PLACEHOLDER_BASE, ...lineHeight(28) },
  h2: { ...PLACEHOLDER_BASE, ...lineHeight(24) },
  h3: { ...PLACEHOLDER_BASE, ...lineHeight(20) },
  h4: { ...PLACEHOLDER_BASE, ...lineHeight(16) },
  h5: { ...PLACEHOLDER_BASE, ...lineHeight(14) },
  h6: { ...PLACEHOLDER_BASE, ...lineHeight(12) },
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets

/**
 * A list of weight names.
 */
export type WeightPresets = keyof typeof weights
