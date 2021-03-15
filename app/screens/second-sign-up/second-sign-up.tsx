import * as React from 'react'
import { useNavigation } from "@react-navigation/native"

import { Screen, Button, Icon, TextField } from 'components'
import { useThemedStyles } from 'hooks'
import { images } from 'assets/images'

// styles
import styles from './second-sign-up.styles'

export function SecondSignUp () {
  const navigation = useNavigation()

  const Styles = useThemedStyles(styles)

  const submit = () => {
    navigation.navigate('SecondSignUp')
  }

  return <Screen style={Styles.container} imageBg={images.bg}>
    <Icon icon="logo" style={Styles.logo}/>
    <TextField
      style={Styles.input}
      label="EMAIL"
      placeholder="Type your email"
    />
    <TextField
      style={Styles.input}
      label="PASSWORD"
      placeholder="Type password"
    />
    <TextField
      style={Styles.lastInput}
      label="REPEAT PASSWORD"
      placeholder="Type password"
    />
    <Button text="Next" onPress={submit} />
  </Screen>
}
