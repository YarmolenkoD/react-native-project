import { moderateScale } from 'utils'

/**
 * All the variations of avatars.
 */
export const presets = {
  default: {

  }
}

export const sizePresets = {
  large: {
    container: {
      width: moderateScale(70),
      height: moderateScale(70),
      borderRadius: moderateScale(35)
    },
    image: {
      width: moderateScale(70),
      height: moderateScale(70),
      borderRadius: moderateScale(35),
    }
  },
  medium: {

  },
  small: {

  }
}
/**
 * The variations of screens.
 */
export type AvatarPresets = keyof typeof presets
export type AvatarSizesPresets = keyof typeof sizePresets
