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
    <Text tx="screens.first.title" style={Styles.lightText} />
    <View style={Styles.buttonsContainer}>
      <Button
        onPress={goTo.bind(null, 'FirstSignUp')}
        tx="screens.first.signUpButton"
        style={Styles.signUpButton}
      />
      <Button
        tx="screens.first.facebookButton"
        style={Styles.facebookButton}
      />
      <Text
        style={[Styles.lightText]}
        tx="screens.first.alreadyHaveAccount"
      />
      <Button
        preset="secondary"
        tx="screens.first.login"
        style={Styles.loginButton}
      />
    </View>
  </Screen>
}
