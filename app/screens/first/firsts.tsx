import * as React from 'react'
import { View } from 'react-native'
import { useNavigation } from "@react-navigation/native"

import { Screen, Text, Button } from 'components'
import { useThemedStyles } from 'hooks'
import { images } from 'assets/images'

// styles
import styles from './first.styles'

export function First () {
  const navigation = useNavigation()

  const Styles = useThemedStyles(styles)

  const goTo = (screen) => {
    navigation.navigate(screen)
  }

  return <Screen style={Styles.container} imageBg={images.bg}>
    <Text style={Styles.lightText}>Get the court you want!</Text>
    <View style={Styles.buttonsContainer}>
      <Button
        onPress={goTo.bind(null, 'FirstSignUp')}
        text="Create free account"
        style={Styles.signUpButton}
      />
      <Button
        text="Continue with facebook"
        style={Styles.facebookButton}
      />
      <Text
        style={[Styles.lightText]}
        text="Already have an account?"
      />
      <Button
        preset="secondary"
        text="Login"
        style={Styles.loginButton}
      />
    </View>
  </Screen>
}
