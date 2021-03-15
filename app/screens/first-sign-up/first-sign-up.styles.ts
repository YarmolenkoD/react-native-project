import { ViewStyle } from 'react-native'
import { color as colorTheme, defaultTheme } from 'theme'
import { moderateScale, verticalScale } from 'utils'

interface Styles {
  container: ViewStyle
  logo: ViewStyle
  input: ViewStyle
}

export default ({ color = colorTheme[defaultTheme] }): Styles => ({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: verticalScale(70),
    paddingBottom: verticalScale(30),
  },
  logo: {
    width: moderateScale(167),
    height: moderateScale(70),
    marginBottom: verticalScale(65),
  },
  input: {

  }
})

