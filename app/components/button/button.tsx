import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { mergeAll, flatten } from 'ramda'

import { viewPresets, textPresets } from './button.presets'
import { ButtonProps } from './button.props'

import { Text } from 'components'
import { useColorScheme } from 'hooks'

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = 'primary',
    tx,
    text,
    style,
    textStyle: textStyleOverride,
    children,
    ...rest
  } = props

  const theme = useColorScheme()
  const themedViewPresets = viewPresets[theme]
  const themedTextPresets = textPresets[theme]

  const styleOverride = mergeAll(
    flatten([themedViewPresets[preset], style]),
  )
  const textStyle = mergeAll(
    flatten([themedTextPresets[preset], textStyleOverride]),
  )

  let viewStyle

  if (rest.disabled) {
    viewStyle = {
      ...styleOverride,
      opacity: 0.6
    }
  } else {
    viewStyle = {
      ...styleOverride,
    }
  }

  const activeOpacity = 0.7

  const content = children || <Text tx={tx} text={text} style={textStyle}/>

  return (
    <TouchableOpacity style={viewStyle} activeOpacity={activeOpacity} {...rest}>
      {content}
    </TouchableOpacity>
  )
}
