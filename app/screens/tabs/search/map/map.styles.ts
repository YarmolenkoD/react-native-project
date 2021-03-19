import { ViewStyle } from 'react-native'
import { color as colorTheme, defaultTheme } from 'theme'
import { deviceSizes } from 'utils'

interface Styles {
  container: ViewStyle
  map: ViewStyle
}

export default ({ color = colorTheme[defaultTheme] }): Styles => ({
  container: {
    flex: 1,
  },
  map: {
    width: deviceSizes.width,
    height: deviceSizes.height,
  },
})