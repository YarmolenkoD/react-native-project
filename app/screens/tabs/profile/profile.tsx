import * as React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TouchableOpacity, View } from 'react-native'

// components
import { Avatar, Icon, Screen, Text } from 'components'
import { useStyles, useUser } from 'hooks'

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
  const Styles = useStyles(styles)

  const user = useUser()

  const renderLogoutButton = () => {
    return <TouchableOpacity
      onPress={user.logout}
      style={Styles.logoutButton}
    >
      <Icon
        icon="logout"
        style={Styles.logoutIcon}
      />
      <Text
        light
        preset="h4"
        tx="screens.profile.button.logout"
      />
    </TouchableOpacity>
  }

  return <Screen fullWidth>
    <View style={Styles.header}>
      {renderLogoutButton()}
      <Avatar containerStyle={Styles.avatarContainer} src={user.avatar} size="large" />
      <Text light preset="h3" weight="bold">
        {user.fullName}
      </Text>
      <Text light preset="h4" weight="regular">
        {user.email}
      </Text>
    </View>
    <Text preset="h2">
      Profile
    </Text>
  </Screen>
}