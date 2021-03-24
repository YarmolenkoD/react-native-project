import * as React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'

// components
import { Avatar, Screen, Text } from 'components'
import { useThemedStyles, useUser, useLogout } from 'hooks'

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
  const user = useUser()
  const logout = useLogout()

  return <Screen fullWidth>
    <View style={Styles.header}>
      <Avatar src={user.avatar} size="large" />
    </View>
    <Text preset="h2">
      Profile
    </Text>
  </Screen>
}