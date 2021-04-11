import React from 'react'
import withAuth from '../hoc/withAuth'
import Nav from '../components/nav/Nav'
import Button from '../components/button/Button'
import { useUserContext } from '../context/usernameContext'

function dashboard() {
  const { user } = useUserContext()
  console.log(user)
  return (
    <>
      <Nav>
        <Button color="danger">Logout</Button>
      </Nav>
    </>
  )
}

export default withAuth(dashboard, '/login')
