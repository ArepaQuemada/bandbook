import React from 'react'
import Button from './button/Button'
import Nav from './nav/Nav'
import { useUserContext } from '../context/usernameContext'
import { useRouter } from 'next/router'

export default function layout({ children }) {
  const { user } = useUserContext()
  const router = useRouter()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
    router.replace('/')
  }

  return (
    <>
      <Nav>
        <Nav.Brand>
          <h3>Welcome {user.username}</h3>
        </Nav.Brand>
        <Button color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Nav>
      {children}
    </>
  )
}
