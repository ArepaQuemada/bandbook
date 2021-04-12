import React from 'react'
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/theme'
import { User } from '../types/user'
import { UserContext } from '../context/usernameContext'

/**
 * initial state
 */
const initialState: User = {
  username: '',
  id: 0,
}

/**
 * Entry point
 * @param props
 * @returns 
 */
function MyApp({ Component, pageProps }) {
  const [user, setUser] = React.useState(initialState)

  /**
   * Sets user context
   */
  React.useEffect(() => {
    const userFromLocalStorage = window.localStorage.getItem('user')
    if (userFromLocalStorage) {
      setUser(JSON.parse(userFromLocalStorage))
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContext.Provider>
  )
}

export default MyApp
