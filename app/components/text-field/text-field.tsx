import * as React from 'react'
import { TextInput, View } from 'react-native'
import { flatten, mergeAll } from 'ramda'

import { wrapperPresets, inputPresets, labelPresets } from './text-field.presets'
import { TextFieldProps } from './text-field.props'

import { Text } from 'components'
import { useColorScheme } from 'hooks'

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
    ...rest
  } = props

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

  return (
    <View style={wrapperStyle}>
      <Text
        style={labelStyle}
        text={label}
      />
      <TextInput style={inputStyle} {...rest} />
    </View>
  )
}
