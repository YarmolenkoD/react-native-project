import * as React from 'react'
import { useNavigation } from "@react-navigation/native"

import { Screen, Button, Icon, TextField } from 'components'
import { useStyles } from 'hooks'
import { images } from 'assets/images'

// styles
import styles from './first-sign-up.styles'

export function FirstSignUp () {
  const navigation = useNavigation()

  const Styles = useStyles(styles)

  const submit = () => {
    navigation.navigate('SecondSignUp')
  }

  return <Screen style={Styles.container} imageBg={images.bg}>
    <Icon icon="logo" style={Styles.logo}/>
    <TextField
      style={Styles.input}
      labelTx="screens.sign-up.label.first-name"
      placeholderTx="screens.sign-up.placeholder.first-name"
    />
    <TextField
      style={Styles.input}
      labelTx="screens.sign-up.label.last-name"
      placeholderTx="screens.sign-up.placeholder.last-name"
    />
    <TextField
      style={Styles.lastInput}
      labelTx="screens.sign-up.label.number"
      placeholderTx="screens.sign-up.placeholder.number"
    />
    <Button tx="common.next" onPress={submit} />
  </Screen>
}
