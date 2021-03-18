import * as React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

// components
import { Screen, Text } from 'components'

// hooks
import { useThemedStyles } from 'hooks'

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
  const Styles = useThemedStyles(styles)

  return <Screen preset="scroll" fullWidth>
    <Text preset="h2">
      Inbox
    </Text>
  </Screen>
}