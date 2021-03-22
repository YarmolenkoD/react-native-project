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
    image,
  } = props

  const avatar = image || images.avatarPlaceholder
  const sizeContainerStyles = sizePresets[size]
  const sizeImageStyles = sizePresets[size]

  return <View style={[sizeContainerStyles, containerOverrideStyle]}>
    <Image style={[sizeImageStyles, styleOverride]} source={avatar} />
  </View>
}
