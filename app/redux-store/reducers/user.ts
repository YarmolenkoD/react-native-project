import produce from 'immer'

import { SET_USER, LOGOUT } from '../actions'
import { User, Action } from 'types'

const REDUCER = 'USER'

export interface UserState {
  user: User
}

const initialState: UserState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
  }
}

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case REDUCER + SET_USER:
      if (action.state) {
        const { prop, value } = action.state
        return produce(state, newState => {
          newState[prop as keyof UserState] = value
        })
      }
      return state
    case REDUCER + LOGOUT:
      return initialState
    default:
      return state
  }
}