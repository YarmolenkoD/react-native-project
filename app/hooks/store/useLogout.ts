import { useDispatch } from 'react-redux'
import { logout } from 'store'

export function useLogout () {
  const dispatch = useDispatch()

  const action = () => {
    dispatch(logout())
  }

  return action
}
