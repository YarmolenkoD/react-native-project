import * as React from 'react'
import { useNavigation } from "@react-navigation/native"

import { Screen, Button, Icon, TextField } from 'components'
import { useThemedStyles } from 'hooks'
import { images } from 'assets/images'

// styles
import styles from './first-sign-up.styles'

export function FirstSignUp () {
  const navigation = useNavigation()

  const Styles = useThemedStyles(styles)

  const submit = () => {
    navigation.navigate('SecondSignUp')
  }

  return <Screen style={Styles.container} imageBg={images.bg}>
    <Icon icon="logo" style={Styles.logo}/>
    <TextField
      style={Styles.input}
      label="FIRST NAME"
      placeholder="Type your first name"
    />
    <TextField
      style={Styles.input}
      label="LAST NAME"
      placeholder="Type your last name"
    />
    <TextField
      style={Styles.lastInput}
      label="PHONE NUMBER"
      placeholder="Type your phone number"
    />
    <Button text="Next" onPress={submit} />
  </Screen>
}