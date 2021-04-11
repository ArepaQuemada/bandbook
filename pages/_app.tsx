import React from 'react'
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/theme'
import { User } from '../types/user'
import { UserContext } from '../context/usernameContext'

const initialState : User = {
  username: "",
  id: 0
}

function MyApp({ Component, pageProps }) {
  const [user, setUser] = React.useState(initialState)

  return (
    <UserContext.Provider value={{user, setUser}}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContext.Provider>
  )
}

export default MyApp
