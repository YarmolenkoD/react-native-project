import * as React from 'react'
import MapView from 'react-native-maps'
import { View } from 'react-native'

// hooks
import { useStyles } from 'hooks'

// styles
import styles from './map.styles'


interface MapProps {
  children: React.ReactNode
}

export function Map (props: MapProps) {
  const Styles = useStyles(styles)

  return <View style={Styles.container}>
    <MapView style={Styles.map} />
    {props.children}
  </View>
}