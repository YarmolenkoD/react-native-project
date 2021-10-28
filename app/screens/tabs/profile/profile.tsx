import * as React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TouchableOpacity, View } from 'react-native'

// types
import { IconTypes } from '../../../components/icon/icons'

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

interface IProfileMenuItem {
  label: string
  icon: IconTypes
  action: () => void
}

const PROFILE_MENU_ITEMS: IProfileMenuItem[] = [
  {
    label: 'screens.profile.menu.settings',
    icon: 'settings',
    action: null
  },
  {
    label: 'screens.profile.menu.payments',
    icon: 'card',
    action: null
  },
  {
    label: 'screens.profile.menu.favorites',
    icon: 'favorite',
    action: null
  },
]

export function Profile(props: ProfileScreenProps) {
  const Styles = useStyles(styles)

  const user = useUser()

  const renderMenuItem = ({ icon, label, action }: IProfileMenuItem) => {
    return <TouchableOpacity onPress={action} style={Styles.menuItem}>
      <Icon
        icon={icon}
        style={Styles.menuIcon}
      />
      <Text tx={label} />
    </TouchableOpacity>
  }

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
    <View>
      {PROFILE_MENU_ITEMS.map(renderMenuItem)}
    </View>
  </Screen>
}