import { ViewStyle } from 'react-native'
import { color as colorTheme, defaultTheme, horizontalSpacing, verticalSpacing } from 'theme'

interface Styles {
  container: ViewStyle
  header: ViewStyle
}

export default ({ color = colorTheme[defaultTheme], insets }): Styles => ({
  container: {},
  header: {
    alignItems: 'center',
    paddingTop: insets.top + verticalSpacing.medium,
    paddingBottom: verticalSpacing.large,
    paddingHorizontal: horizontalSpacing.large,
    backgroundColor: color.primary,
  }
})