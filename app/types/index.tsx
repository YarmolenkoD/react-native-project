import { EdgeInsets } from 'react-native-safe-area-context/src/SafeArea.types'

export type RootStackParamList = {
  Root: undefined
  FirstSignUp: undefined
  SecondSignUp: undefined
  First: undefined
  NotFound: undefined
  Login: undefined
}

export type BottomTabParamList = {
  Inbox: undefined
  Reservations: undefined
  Search: undefined
  Profile: undefined
}

export type SearchParamList = {
  Search: undefined
}

export type InboxParamList = {
  Inbox: undefined
}

export type ReservationsParamList = {
  Reservations: undefined
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
  color: ColorTheme,
  insets: EdgeInsets
}

export interface User {
  firstName: string
  lastName: string
  email: string
  avatar: string
}

export interface Action {
  type: string;
  state?: {
    prop: string;
    value: any;
  }
}