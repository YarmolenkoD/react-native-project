import { ImageStyle, ViewStyle } from 'react-native'
import { color as colorTheme, defaultTheme, horizontalSpacing, verticalSpacing } from 'theme'
import { moderateScale } from 'utils'

interface Styles {
  container: ViewStyle
  header: ViewStyle
  avatarContainer: ViewStyle
  logoutButton: ViewStyle
  logoutIcon: ImageStyle
}

export default ({ color = colorTheme[defaultTheme], insets }): Styles => ({
  container: {},
  header: {
    alignItems: 'center',
    paddingTop: insets.top + verticalSpacing.medium,
    paddingBottom: verticalSpacing.large,
    paddingHorizontal: horizontalSpacing.large,
    backgroundColor: color.primary,
  },
  avatarContainer: {
    marginBottom: verticalSpacing.medium
  },
  logoutButton: {
    position: 'absolute',
    top: insets.top,
    right: horizontalSpacing.large,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutIcon: {
    width: moderateScale(24),
    height: moderateScale(24),
    marginRight: horizontalSpacing.tiny
  },
})