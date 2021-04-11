import React from 'react'
import withAuth from '../hoc/withAuth'
import Nav from '../components/nav/Nav'
import Button from '../components/button/Button'
import { useUserContext } from '../context/usernameContext'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Filters from '../components/filters/Filters'
import { Fetch } from '../services/fetch'
import { config } from '../config'
import { FiltersContext } from '../context/filtersContext'

const filtersInitialState: string[] = []

function dashboard({ genres }) {
  const { user } = useUserContext()
  const [filters, setFilters] = React.useState(filtersInitialState)
  const router = useRouter()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
    router.replace('/')
  }

  React.useEffect(() => {
    console.log(filters)
  }, [filters])

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Nav>
        <Nav.Brand>
          <h3>Welcome {user.username}</h3>
        </Nav.Brand>
        <Button color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Nav>
      <FiltersContext.Provider value={{ filters, setFilters }}>
        <Filters title="Genres" filters={genres} />
      </FiltersContext.Provider>
    </>
  )
}

export default withAuth(dashboard, '/login')

export async function getStaticProps() {
  const genres = await new Fetch(config.genres).get()
  const bands = await new Fetch(config.bands).get()
  return {
    props: {
      genres,
      bands,
    },
  }
}
