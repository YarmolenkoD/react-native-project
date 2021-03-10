import { ViewStyle, Platform } from "react-native"
import { isNil } from "ramda"
import { getStatusBarHeight, isIPhoneX } from "react-native-status-bar-height"
import { color, horizontalSpacing } from "theme"

/**
 * All screen keyboard offsets.
 */
export const offsets = {
  none: 0,
}

/**
 * The variations of keyboard offsets.
 */
export type KeyboardOffsets = keyof typeof offsets

/**
 * All the variations of screens.
 */
export const presets = {
  /**
   * No scrolling. Suitable for full-screen carousels and components
   * which have built-in scrolling like FlatList.
   */
  fixed: {
    statusBar: {
      paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0,
    },
    outer: {
      backgroundColor: color.background,
      flex: 1,
      height: "100%",
    } as ViewStyle,
    inner: {
      justifyContent: "flex-start",
      alignItems: "stretch",
      height: "100%",
      width: "100%",
      paddingTop: isIPhoneX() ? 40 : 20,
      paddingHorizontal: 20,
    } as ViewStyle,
  },

  /**
   * Scrolls. Suitable for forms or other things requiring a keyboard.
   *
   * Pick this one if you don't know which one you want yet.
   */
  scroll: {
    statusBar: {
      paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0,
    },
    outer: {
      backgroundColor: color.background,
      flex: 1,
      height: "100%",
    } as ViewStyle,
    inner: {
      justifyContent: "flex-start",
      alignItems: "stretch",
      paddingTop: isIPhoneX() ? 40 : 20,
      paddingHorizontal: 25,
    } as ViewStyle,
  },

  notFullWidth: {
    paddingHorizontal: horizontalSpacing.medium,
  } as ViewStyle,
  fullWidth: {} as ViewStyle,
}

/**
 * The variations of screens.
 */
export type ScreenPresets = keyof typeof presets

/**
 * Is this preset a non-scrolling one?
 *
 * @param preset The preset to check
 */
export function isNonScrolling(preset: ScreenPresets) {
  // any of these things will make you scroll
  return isNil(preset) || !preset.length || isNil(presets[preset]) || preset === "fixed"
}
