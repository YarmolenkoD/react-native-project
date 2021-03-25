import * as React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

// components
import { Screen, Text } from 'components'
import { Map } from './map/map'

// hooks
import { useStyles } from 'hooks'

// styles
import styles from './search.styles'

interface ScreenParams {

}

interface SearchScreenProps {
  navigation: BottomTabNavigationProp<any>
  route: {
    params: ScreenParams,
  }
}

export function Search(props: SearchScreenProps) {
  const Styles = useStyles(styles)

  return <Screen fullWidth>
    <Map>
      <Text>HELLO</Text>
    </Map>
  </Screen>
}