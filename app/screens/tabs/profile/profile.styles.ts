import { ViewStyle } from 'react-native'
import { color as colorTheme, defaultTheme, horizontalSpacing, verticalSpacing } from 'theme'

interface Styles {
  container: ViewStyle
  header: ViewStyle
}

export default ({ color = colorTheme[defaultTheme] }): Styles => ({
  container: {},
  header: {
    alignItems: 'center',
    paddingVertical: verticalSpacing.large,
    paddingHorizontal: horizontalSpacing.large,
    backgroundColor: color.primary,
  }
})