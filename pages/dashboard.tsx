import React from 'react'
import styled from 'styled-components'
import withAuth from '../hoc/withAuth'
import Head from 'next/head'
import Filters from '../components/filters/Filters'
import { Fetch } from '../services/fetch'
import { config } from '../config'
import { FiltersContext } from '../context/filtersContext'
import BandsContainer from '../components/bands-container/BandsContainer'
import Layout from '../components/layout'

/**
 * Component styles
 */
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

/**
 * Initial state
 */
const filtersInitialState: string[] = []

/**
 * Dashboard page
 * @param props
 */
function dashboard({ genres, bands }) {
  const [filters, setFilters] = React.useState(filtersInitialState)
  const [bandsFilter, setBandsFilter] = React.useState(bands)

  /**
   * If there's any filter it will show bands that match said filter
   * else it will show every band
   */
  React.useEffect(() => {
    if (filters.length === 0) {
      return setBandsFilter(() => [...bands])
    }
    setBandsFilter((prev) => {
      return prev.filter((b) => filters.every((f) => f === b.genreCode))
    })
  }, [filters])

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Layout>
        <FiltersContext.Provider value={{ filters, setFilters }}>
          <Container>
            <Filters title="Genres" filters={genres} />
            <BandsContainer bands={bandsFilter} />
          </Container>
        </FiltersContext.Provider>
      </Layout>
    </>
  )
}

export default withAuth(dashboard, '/login')

/**
 * Fetch genres and bands
 */
export async function getStaticProps() {
  const genres = await new Fetch(config.genres).get()
  const bands = await new Fetch(config.bands).get()
  return {
    props: {
      genres,
      bands
    }
  }
}
