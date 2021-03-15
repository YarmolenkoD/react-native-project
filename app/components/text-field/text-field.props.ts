import { GestureResponderEvent, TextInputProps, TextStyle, ViewStyle } from 'react-native'
import { WrapperPresetNames } from './text-field.presets'

export interface TextFieldProps extends TextInputProps {
  /**
   * The placeholder i18n key.
   */
  placeholderTx?: string

  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string

  /**
   * The label i18n key.
   */
  labelTx?: string

  /**
   * The label text if no labelTx is provided.
   */
  label?: string

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: ViewStyle | ViewStyle[]

  /**
   * Optional container style overrides useful for margins & padding.
   */
  wrapperStyle?: ViewStyle | ViewStyle[]

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: TextStyle | TextStyle[]

  /**
   * Optional style overrides for the label.
   */
  labelStyle?: TextStyle | TextStyle[]

  /**
   * Various look & feels.
   */
  preset?: WrapperPresetNames

  forwardedRef?: any

  /**
   * Text input mask
   */
  mask?: string

  error?: string

  /**
   * Text field subtext, a cta for that input. Press to call onSubtext.
   */
  subtext?: string

  /**
   * Subtext action.
   */
  onSubtext?: (event: GestureResponderEvent) => void
}
