import * as React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

// components
import { Screen, Text } from 'components'

// hooks
import { useStyles } from 'hooks'

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
  const Styles = useStyles(styles)

  return <Screen>
    <Text preset="h2">
      Reservations
    </Text>
  </Screen>
}