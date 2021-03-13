import { ViewStyle, ImageSourcePropType } from 'react-native'
import { KeyboardOffsets, ScreenPresets } from "./screen.presets"

export interface ScreenProps {
  /**
   * Children components.
   */
  children?: React.ReactNode

  statusStyle?: ViewStyle

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle

  /**
   * One of the different types of presets.
   */
  preset?: ScreenPresets

  /**
   * An optional background color
   */
  backgroundColor?: string

  /**
   * An optional status bar setting. Defaults to dark-content.
   */
  statusBar?: "light-content" | "dark-content"

  /**
   * Should we not wrap in SafeAreaView? Defaults to false.
   */
  unsafe?: boolean

  /**
   * If false, add a standard amount of horizontal padding
   */
  fullWidth?: boolean

  /**
   * By how much should we offset the keyboard? Defaults to none.
   */
  keyboardOffset?: KeyboardOffsets
  /**
   * By how much should we offset the keyboard? Defaults to none.
   */
  imageBg?: ImageSourcePropType
}
