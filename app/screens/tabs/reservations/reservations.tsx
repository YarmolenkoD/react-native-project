import * as React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

// components
import { Screen, Text } from 'components'

// hooks
import { useThemedStyles } from 'hooks'

// styles
import styles from "./reservations.styles"


interface ScreenParams {

}

interface ReservationsProps {
  navigation: BottomTabNavigationProp<any>
  route: {
    params: ScreenParams,
  }
}

export function Reservations(props: ReservationsProps) {
  const Styles = useThemedStyles(styles)

  return <Screen preset="scroll" fullWidth>
    <Text preset="h2">
      Reservations
    </Text>
  </Screen>
}