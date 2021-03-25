import * as React from 'react'
import { useNavigation } from "@react-navigation/native"

import { Screen, Button, Icon, TextField } from 'components'
import { useStyles } from 'hooks'
import { images } from 'assets/images'

// styles
import styles from './second-sign-up.styles'

export function SecondSignUp () {
  const navigation = useNavigation()

  const Styles = useStyles(styles)

  const submit = () => {
    navigation.navigate('Root')
  }

  return <Screen style={Styles.container} imageBg={images.bg}>
    <Icon icon="logo" style={Styles.logo}/>
    <TextField
      style={Styles.input}
      labelTx="screens.sign-up.label.email"
      placeholderTx="screens.sign-up.placeholder.email"
    />
    <TextField
      style={Styles.input}
      labelTx="screens.sign-up.label.password"
      placeholderTx="screens.sign-up.placeholder.password"
    />
    <TextField
      style={Styles.lastInput}
      labelTx="screens.sign-up.label.repeat-password"
      placeholderTx="screens.sign-up.placeholder.password"
    />
    <Button tx="common.next" onPress={submit} />
  </Screen>
}
