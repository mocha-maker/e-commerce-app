import { createContext, useState, useEffect } from 'react'
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils'
import { useNavigate } from 'react-router-dom'

// the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }
  const navigate = useNavigate()

  // Update context on firebase auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      user && createUserDocFromAuth(user)
      setCurrentUser(user)
      navigate('/')
    })
    return unsubscribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
