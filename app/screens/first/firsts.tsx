import * as React from 'react'
import { View } from 'react-native'
import { useNavigation } from "@react-navigation/native"

import { Screen, Text, Button } from 'components'
import { useStyles } from 'hooks'
import { images } from 'assets/images'

// styles
import styles from './first.styles'

export function First () {
  const navigation = useNavigation()

  const Styles = useStyles(styles)

  const goTo = (screen) => {
    navigation.navigate(screen)
  }

  return <Screen style={Styles.container} imageBg={images.bg}>
    <Text tx="screens.first.title" style={Styles.lightText} />
    <View style={Styles.buttonsContainer}>
      <Button
        onPress={goTo.bind(null, 'FirstSignUp')}
        tx="screens.first.button.sign-up"
        style={Styles.signUpButton}
      />
      <Button
        tx="screens.first.button.facebook"
        style={Styles.facebookButton}
      />
      <Text
        style={[Styles.lightText]}
        tx="screens.first.already-have-account"
      />
      <Button
        preset="secondary"
        tx="screens.first.button.login"
        style={Styles.loginButton}
      />
    </View>
  </Screen>
}
