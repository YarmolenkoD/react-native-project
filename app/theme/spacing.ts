import { moderateScale, verticalScale } from "utils/scaling"

/**
 * NOTE TO DEVS:
 *
 * horizontalSpacing, verticalSpacing should consistent and whitespace thought of as a first class technique up
 * there with color and typefaces.
 *
 * Which type of scale you use is based on the design.
 * Whatever you choose, try to stick with these, and not freestyle it everywhere.
 *
 * Values used here are designed for a width of 375 as per the designs
 *
 * Feel free to delete this block.
 */

export const horizontalSpacing = {
  none: 0,
  tiny: moderateScale(3.85), // 4 @375
  small: moderateScale(7.75), // 8 @375
  medium: moderateScale(14.5), // 15 @375
  midLarge: moderateScale(18.25), // 19 @375
  large: moderateScale(23), // 24 @375
  huge: moderateScale(34.75), // 36 @375
  massive: moderateScale(46.35), // 48 @375
  maximum: moderateScale(54), // 56 @ 375
}

export const verticalSpacing = {
  none: 0,
  tiny: verticalScale(3.35), // 4 @375
  small: verticalScale(6.7), // 8 @375
  medium: verticalScale(12.55), // 15 @375
  midLarge: moderateScale(17.2), // 19 @375
  large: verticalScale(20.1), // 24 @375
  huge: verticalScale(30.15), // 36 @375
  massive: verticalScale(40.2), // 48 @375
  maximum: verticalScale(46.9), // 56 @ 375
}

export const fontSizes = {
  none: 0,
  tiny: moderateScale(9.65), // 10 @375
  small: moderateScale(11.6), // 12 @375
  medium: moderateScale(13.5), // 14 @375
  large: moderateScale(15.45), // 16 @375
  huge: moderateScale(19.3), // 20 @375
  massive: moderateScale(25.1), // 26 @375
}
// massive:32, 48, 64, 72]

export const fontWeights = {
  regular: "Roboto_400Regular",
  medium: "Roboto_500Medium",
  bold: "Roboto_700Bold",
}

export const headerSizes = {
  H1: fontSizes.massive,
  H2: fontSizes.huge,
  H3: fontSizes.large,
  H4: fontSizes.medium,
  H5: fontSizes.small,
  H6: fontSizes.tiny,
}
