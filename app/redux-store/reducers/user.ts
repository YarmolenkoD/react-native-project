import produce from 'immer'

import { SET_USER, LOGOUT } from '../actions'
import { User, Action } from 'types'

const REDUCER = 'USER'

const initialState: User | null = {
  firstName: 'John',
  lastName: 'White',
  email: 'john.white@yopmail.com',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
}

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case REDUCER + SET_USER:
      if (action.state) {
        const { prop, value } = action.state
        return produce(state, newState => {
          newState[prop as keyof User] = value
        })
      }
      return state
    case REDUCER + LOGOUT:
      return initialState
    default:
      return state
  }
}