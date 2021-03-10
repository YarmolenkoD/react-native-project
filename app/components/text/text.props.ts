import { TextStyle, TextProps as TextProperties } from "react-native"
import { TextPresets, WeightPresets } from "./text.presets"

export interface TextProps extends TextProperties {
  /**
   * If the field is loading, a PlaceholderLine will be rendered in it's place.
   */
  isLoading?: boolean

  /**
   * Children components.
   */
  children?: React.ReactNode

  /**
   * Text which is looked up via i18n.
   */
  tx?: string

  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: object

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  placeholderStyle?: TextStyle | TextStyle[]

  /**
   * An optional style override useful for padding & margin.
   */
  style?: TextStyle | TextStyle[]

  /**
   * One of the different types of text presets.
   */
  preset?: TextPresets

  weight?: WeightPresets

  /**
   *
   */
  placeholderWidth?: number
}
