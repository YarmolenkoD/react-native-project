import { ViewStyle } from 'react-native'
import { color as colorTheme, defaultTheme } from 'theme'
import { moderateScale, verticalScale } from 'utils'

interface Styles {
  container: ViewStyle
  logo: ViewStyle
  fullWidth: ViewStyle
  input: ViewStyle
  lastInput: ViewStyle
}

export default ({ color = colorTheme[defaultTheme] }): Styles => ({
  container: {
    alignItems: 'center',
    paddingTop: verticalScale(70),
    paddingBottom: verticalScale(70),
  },
  logo: {
    width: moderateScale(167),
    height: moderateScale(70),
    marginBottom: verticalScale(70),
  },
  fullWidth: {
    width: '100%'
  },
  input: {
    marginBottom: verticalScale(20)
  },
  lastInput: {
    marginBottom: verticalScale(50)
  },
})

