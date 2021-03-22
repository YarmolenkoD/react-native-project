import * as React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'

// components
import { Screen, Text } from 'components'
import { useThemedStyles } from 'hooks'

// styles
import styles from './profile.styles'

interface ScreenParams {

}

interface ProfileScreenProps {
  navigation: BottomTabNavigationProp<any>
  route: {
    params: ScreenParams,
  }
}

export function Profile(props: ProfileScreenProps) {
  const Styles = useThemedStyles(styles)

  return <Screen fullWidth>
    <View style={Styles.header}>

    </View>
    <Text preset="h2">
      Profile
    </Text>
  </Screen>
}