import React from 'react'
import Button from '../components/button/Button'
import Input from '../components/input/Input'
import styled from 'styled-components'
import { config } from '../config'
import { Fetch } from '../services/fetch'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useUserContext } from '../context/usernameContext'

/**
 * Component styles
 */
const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MiddleEffect = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.neutral};
  font-size: 1.5rem;
  height: 50vh;
  top: 0;
  padding: 10px;
  padding-left: 50px;
  width: 100%;
`

const Wrapper = styled.div`
  z-index: 2;
  width: 75%;
  max-width: 700px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 25px;
  background-color: ${(props) => props.theme.colors.neutral};
`

const Section = styled.div`
  padding: 20px;
`

const ErrorText = styled.small`
  position: absolute;
  color: ${(props) => props.theme.colors.danger};
`

const initialState = {
  username: '',
  password: ''
}

/**
 * Login page
 */
const Login = () => {
  const [credentials, setCredentials] = React.useState(initialState)
  const [error, setError] = React.useState(false)
  const { setUser } = useUserContext()
  const router = useRouter()

  /**
   * If user it's logged in it will redirect to dashboard
   */
  if (process.browser) {
    const token = window.localStorage.getItem('token')
    if (token) {
      router.replace('/dashboard')
      return null
    }
  }

  /**
   * Checks user credentials and if it's successfull will set token and user
   * and then redirect to dashboard
   * @param e
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { status, data } = await new Fetch(
      `${config.host}${config.login}`
    ).post(credentials)

    setError(status !== 200)

    if (status === 200) {
      setUser(data.user)
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      router.replace('/dashboard')
    }
  }

  /**
   * Sets credentials
   * @param e
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false)
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <Head>
        <title>Bandbook Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <MiddleEffect>
          <h1>Bandbook</h1>
        </MiddleEffect>
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <Section>
              <label htmlFor="user">Username</label>
              <Input
                type="text"
                id="username"
                placeholder="Enter your username"
                fullWidth
                name="username"
                onChange={handleChange}
              />
            </Section>
            <Section>
              <label htmlFor="user">Password</label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                fullWidth
                name="password"
                onChange={handleChange}
              />
            </Section>
            <Section>
              <Button color="secondary" fullWidth>
                Signin
              </Button>
            </Section>
            <Section>
              {error && <ErrorText>User or password invalid</ErrorText>}
              <small></small>
            </Section>
          </form>
        </Wrapper>
      </Container>
    </>
  )
}

export default Login
