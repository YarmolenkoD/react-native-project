import { ViewStyle, TextStyle } from 'react-native'
import { color, fontSizes, fontWeights, defaultTheme } from 'theme'
import { palette } from '../../theme/palette'
import { moderateScale } from 'utils';

/**
 * All the variations of button styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */

const BUTTON_BASE: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '100%',
  height: moderateScale(44),
  borderRadius: 10,
}

const TEXT_BASE: TextStyle = {
  fontSize: fontSizes.large,
  fontFamily: fontWeights.bold,
}

/**
 * A base styles for primary button.
 */
const PRIMARY_BUTTON_BASE: ViewStyle = {
  ...BUTTON_BASE,
  backgroundColor: color[defaultTheme].primary
}

const PRIMARY_TEXT_BASE: TextStyle = {
  ...TEXT_BASE,
  color: color[defaultTheme].lightText
}

/**
 * A base styles for secondary button.
 */
const SECONDARY_BUTTON_BASE: ViewStyle = {
  ...BUTTON_BASE,
  backgroundColor: palette.white
}

const SECONDARY_TEXT_BASE: TextStyle = {
  ...TEXT_BASE,
  color: color[defaultTheme].primary
}

export const viewPresets = {
  dark: {
    primary: {
      ...PRIMARY_BUTTON_BASE
    },
    secondary: {
      ...SECONDARY_BUTTON_BASE
    }
  },
  light: {
    primary: {
      ...PRIMARY_BUTTON_BASE
    },
    secondary: {
      ...SECONDARY_BUTTON_BASE
    }
  },
}

export const textPresets = {
  dark: {
    primary: {
      ...PRIMARY_TEXT_BASE
    },
    secondary: {
      ...SECONDARY_TEXT_BASE
    }
  },
  light: {
    primary: {
      ...PRIMARY_TEXT_BASE
    },
    secondary: {
      ...SECONDARY_TEXT_BASE
    }
  }
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets.light
