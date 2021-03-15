export type RootStackParamList = {
  Root: undefined
  FirstSignUp: undefined
  SecondSignUp: undefined
  First: undefined
  NotFound: undefined
  Login: undefined
}

export type BottomTabParamList = {
  Search: undefined
  Profile: undefined
}

export type SearchParamList = {
  Search: undefined
}

export type ProfileParamList = {
  Profile: undefined
}

export type ColorTheme = {
  palette: object,
  transparent: string,
  background: string,
  primary: string,
  primaryDarker: string,
  line: string,
  text: string,
  lightText: string,
  dim: string,
  error: string,
  storybookDarkBg: string,
  storybookTextColor: string,
}

export interface Theme {
  color: ColorTheme
}
