import * as React from 'react'
import { Text as ReactNativeText } from 'react-native'
import { presets, placeholderPresets, weights } from './text.presets'
import { TextProps } from './text.props'
import { translate } from 'i18n'
import { mergeAll, flatten } from 'ramda'
import { Placeholder, Fade, PlaceholderLine } from 'rn-placeholder'

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
  // grab the props
  const {
    isLoading = false,
    preset = 'p',
    weight = 'medium',
    placeholderWidth = 20,
    tx,
    txOptions,
    text,
    children,
    style: styleOverride,
    placeholderStyle: placeholderStyleOverride,
    ...rest
  } = props

  // figure out which content to use
  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const style = mergeAll(
    flatten([presets[preset] || presets.p, weights[weight] || weights.medium, styleOverride]),
  )

  const placeholderStyle = mergeAll(
    flatten([placeholderPresets[preset], placeholderPresets.p, placeholderStyleOverride]),
  )

  /**
   * If data for the text is loading, return a placeholder
   */
  if (isLoading) {
    return (
      <Placeholder Animation={Fade}>
        <PlaceholderLine style={placeholderStyle} width={placeholderWidth}/>
      </Placeholder>
    )
  }

  return (
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  )
}
