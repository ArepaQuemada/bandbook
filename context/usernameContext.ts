import React from 'react'
import { User } from '../types/user'

interface IUserContext {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = React.createContext<IUserContext | null>(null)

export const useUserContext = () => {
  const { user, setUser } = React.useContext(UserContext)
  return { user, setUser }
}
