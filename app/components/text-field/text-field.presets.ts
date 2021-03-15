import { ViewStyle, TextStyle } from 'react-native'
import { color, defaultTheme, fontSizes, fontWeights, verticalSpacing } from 'theme'
import { palette } from '../../theme/palette'
import { verticalScale } from 'utils';

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
const TEXT_FIELD_BASE: TextStyle = {
  width: '100%',
  height: verticalScale(46),
  paddingHorizontal: 20,
  borderRadius: 10,
  fontSize: fontSizes.large,
  fontFamily: fontWeights.regular,
}

/**
 * A base styles for default text field.
 */
const DEFAULT_WRAPPER_STYLE: ViewStyle = {
  width: '100%',
}

const DEFAULT_TEXT_FIELD_STYLE: TextStyle = {
  ...TEXT_FIELD_BASE,
  backgroundColor: palette.white,
  color: color[defaultTheme].text,
  opacity: 0.9,
}

const DEFAULT_LABEL_STYLE: TextStyle = {
  marginBottom: verticalSpacing.small,
  color: palette.white
}

export const wrapperPresets = {
  dark: {
    default: {
      ...DEFAULT_WRAPPER_STYLE
    },
  },
  light: {
    default: {
      ...DEFAULT_WRAPPER_STYLE
    },
  },
}

export const inputPresets = {
  dark: {
    default: {
      ...DEFAULT_TEXT_FIELD_STYLE
    },
  },
  light: {
    default: {
      ...DEFAULT_TEXT_FIELD_STYLE
    },
  }
}

export const labelPresets = {
  dark: {
    default: {
      ...DEFAULT_LABEL_STYLE
    },
  },
  light: {
    default: {
      ...DEFAULT_LABEL_STYLE
    },
  }
}

/**
 * A list of preset names.
 */
export type WrapperPresetNames = keyof typeof wrapperPresets.light
