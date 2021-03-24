import * as React from 'react'
import { View, Image } from 'react-native'

import { images } from 'assets'

import { AvatarProps } from './avatar.props'
import { presets, sizePresets } from './avatar.presets'

export function Avatar (props: AvatarProps) {
  const {
    containerStyle: containerOverrideStyle,
    style: styleOverride,
    size = 'medium',
    preset = 'default',
    image,
  } = props

  const avatar = image || images.avatarPlaceholder
  const sizeContainerStyles = sizePresets[size].container
  const sizeImageStyles = sizePresets[size].image

  const presetContainerStyles = presets[preset]
  const presetImageStyles = presets[preset]

  return <View style={[presetContainerStyles, sizeContainerStyles, containerOverrideStyle]}>
    <Image style={[presetImageStyles, sizeImageStyles, styleOverride]} source={avatar} />
  </View>
}
