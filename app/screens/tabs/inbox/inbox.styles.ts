import { ViewStyle } from 'react-native'
import { color as colorTheme, defaultTheme } from 'theme'

interface Styles {
  container: ViewStyle
}

export default ({ color = colorTheme[defaultTheme] }): Styles => ({
  container: {}
})