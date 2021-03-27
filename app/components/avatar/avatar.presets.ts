import { moderateScale } from 'utils'

/**
 * All the variations of avatars.
 */
export const presets = {
  default: {

  }
}

const LARGE_BASE_STYLES = {
  width: moderateScale(74),
  height: moderateScale(74),
  borderRadius: moderateScale(37)
}

const MEDIUM_BASE_STYLES = {
  width: moderateScale(40),
  height: moderateScale(40),
  borderRadius: moderateScale(20)
}

const SMALL_BASE_STYLES = {
  width: moderateScale(20),
  height: moderateScale(20),
  borderRadius: moderateScale(10)
}


export const sizePresets = {
  large: {
    container: {
      ...LARGE_BASE_STYLES
    },
    image: {
      ...LARGE_BASE_STYLES
    }
  },
  medium: {
    container: {
      ...MEDIUM_BASE_STYLES
    },
    image: {
      ...MEDIUM_BASE_STYLES
    }
  },
  small: {
    container: {
      ...SMALL_BASE_STYLES
    },
    image: {
      ...SMALL_BASE_STYLES
    }
  }
}
/**
 * The variations of screens.
 */
export type AvatarPresets = keyof typeof presets
export type AvatarSizesPresets = keyof typeof sizePresets
