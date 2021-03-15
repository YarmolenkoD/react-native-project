import * as React from 'react'
import { View } from 'react-native'
import { useNavigation } from "@react-navigation/native"

import { Screen, Button, Icon } from 'components'
import { useThemedStyles } from 'hooks'
import { images } from 'assets/images'

// styles
import styles from './first-sign-up.styles'
import { TextField } from '../../components/text-field/text-field';

export function FirstSignUp () {
  const navigation = useNavigation()

  const Styles = useThemedStyles(styles)

  const submit = () => {

  }

  return <Screen style={Styles.container} imageBg={images.bg}>
    <Icon icon="logo" style={Styles.logo}/>
    <TextField
      label="FIRST NAME"
      placeholder="Type your first name"
    />
    <TextField
      label="LAST NAME"
      placeholder="Type your last name"
    />
    <TextField
      label="PHONE NUMBER"
      placeholder="Type your phone number"

    />
    <Button text="Next" onPress={submit} />
  </Screen>
}
