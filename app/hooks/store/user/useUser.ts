import { useSelector } from 'react-redux'

// action hooks
import { useLogout } from './useLogout'

export function useUser () {
  const user = useSelector(state => state.user)
  const logout = useLogout()

  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
    logout
  }
}
