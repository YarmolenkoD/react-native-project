import * as React from 'react'
import { ImageBackground, View } from 'react-native'

import { Screen, Text } from 'components'
import { images } from 'assets/images'

// styles
import Styles from './first.styles'

export function First () {
  return <Screen imageBg={images.bg}>
    {/*<ImageBackground source={images.bg}>*/}
    {/*  <View style={}>*/}

    {/*  </View>*/}
    {/*</ImageBackground>*/}
  </Screen>
}
