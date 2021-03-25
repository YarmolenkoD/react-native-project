import * as React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

// components
import { Screen, Text } from 'components'

// hooks
import { useStyles } from 'hooks'

// styles
import styles from "./inbox.styles"

interface ScreenParams {

}

interface InboxProps {
  navigation: BottomTabNavigationProp<any>
  route: {
    params: ScreenParams,
  }
}

export function Inbox(props: InboxProps) {
  const Styles = useStyles(styles)

  return <Screen>
    <Text preset="h2">
      Inbox
    </Text>
  </Screen>
}