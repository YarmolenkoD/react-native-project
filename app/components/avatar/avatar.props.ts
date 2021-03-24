import { ImageSourcePropType, ImageStyle, ViewStyle } from 'react-native'
import { AvatarPresets, AvatarSizesPresets } from './avatar.presets'

export interface AvatarProps {
  /**
   * Style overrides for the icon image
   */
  style?: ImageStyle

  /**
   * Style overrides for the icon container
   */

  containerStyle?: ViewStyle

  /**
   * The image source
   */

  image?: ImageSourcePropType

  /**
   * The avatar size
   */

  size?: AvatarSizesPresets

  /**
   * The avatar presets
   */

  preset?: AvatarPresets
}
