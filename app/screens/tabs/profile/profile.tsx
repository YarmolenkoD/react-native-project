import * as React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

// components
import { Screen, Text } from 'components'

// styles
// import Styles from "./profile.styles"

interface ScreenParams {

}

interface ProfileScreenProps {
  navigation: BottomTabNavigationProp<any>
  route: {
    params: ScreenParams,
  }
}

export function Profile(props: ProfileScreenProps) {

  return <Screen preset="scroll" fullWidth>
    <Text preset="h2">
      Profile
    </Text>
  </Screen>
}