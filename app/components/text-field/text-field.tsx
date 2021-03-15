import * as React from 'react'
import { TextInput, View } from 'react-native'
import { flatten, mergeAll } from 'ramda'

import { wrapperPresets, inputPresets, labelPresets } from './text-field.presets'
import { TextFieldProps } from './text-field.props'

import { Text } from 'components'
import { useColorScheme, useLocale } from 'hooks'
import { translate } from 'i18n'

/**
 * For your text field displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function TextField(props: TextFieldProps) {
  const {
    preset = 'default',
    style: wrapperStyleOverride,
    labelStyle: labelStyleOverride,
    inputStyle: inputStyleOverride,
    label,
    labelTx,
    placeholder: placeholderText,
    placeholderTx,
    ...rest
  } = props

  const locale = useLocale()
  const theme = useColorScheme()

  const themedWrapperPresets = wrapperPresets[theme]
  const themedInputPresets = inputPresets[theme]
  const themedLabelPresets = labelPresets[theme]

  const wrapperStyle = mergeAll(
    flatten([themedWrapperPresets[preset], wrapperStyleOverride]),
  )
  const inputStyle = mergeAll(
    flatten([themedInputPresets[preset], inputStyleOverride]),
  )
  const labelStyle = mergeAll(
    flatten([themedLabelPresets[preset], labelStyleOverride]),
  )

  // figure out which content to use
  const i18nPlaceholder = placeholderTx && translate(placeholderTx, { locale })
  const placeholder = i18nPlaceholder || placeholderText

  return (
    <View style={wrapperStyle}>
      <Text
        style={labelStyle}
        text={label}
        tx={labelTx}
      />
      <TextInput placeholder={placeholder} style={inputStyle} {...rest} />
    </View>
  )
}
