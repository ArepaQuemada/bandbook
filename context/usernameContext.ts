import React from 'react'
import { User } from '../types/user'

/**
 * Context state types
 */
interface IUserContext {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

/**
 * User context
 */
export const UserContext = React.createContext<IUserContext | null>(null)

/**
 * Hook that returns user context
 * @returns User context
 */
export const useUserContext = () => {
  const { user, setUser } = React.useContext(UserContext)
  return { user, setUser }
}
