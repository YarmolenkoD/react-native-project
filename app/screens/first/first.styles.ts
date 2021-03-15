import { TextStyle, ViewStyle } from 'react-native'
import { color as colorTheme, defaultTheme, verticalSpacing } from 'theme'
import { verticalScale } from 'utils'

interface Styles {
  container: ViewStyle
  buttonsContainer: ViewStyle
  facebookButton: ViewStyle
  loginButton: ViewStyle
  signUpButton: ViewStyle
  lightText: TextStyle
}

export default ({ color = colorTheme[defaultTheme] }): Styles => ({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: verticalScale(70),
    paddingBottom: verticalScale(30),
  },
  lightText: {
    color: color.lightText
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  signUpButton: {
    marginBottom: verticalSpacing.medium
  },
  facebookButton: {
    marginBottom: verticalSpacing.huge,
    backgroundColor: '#4666D5',
  },
  loginButton: {
    marginTop: verticalSpacing.medium,
  },
})

