import { User, Action } from 'types'

export const SET_USER = '_SET_USER'
export const LOGOUT = '_LOGOUT'

export function setUser(
  value: User,
  reducer = 'user'
): Action {
  return {
    type: reducer.toUpperCase() + SET_USER,
    state: {
      prop: 'user',
      value
    }
  }
}

export function logout(reducer = 'user'): Action {
  return {
    type: reducer.toUpperCase() + LOGOUT,
  }
}
