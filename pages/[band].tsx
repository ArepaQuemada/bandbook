import React from 'react'
import withAuth from '../hoc/withAuth'
import Layout from '../components/layout'
import { Fetch } from '../services/fetch'
import { config } from '../config'
import styled from 'styled-components'
import Head from 'next/head'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 750px;
  text-align: center;
`

const BandInfo = styled.div`
  text-align: start;
  padding: 20px;
`

const InfoBlock = styled.div`
  padding: 10px;
`

const Section = styled.div<ISection>`
  margin: 10px;
  padding: 20px;
  display: flex;
  justify-content: ${(props) => props.justify ?? 'space-around'};
  flex-wrap: wrap;
`

interface ISection {
  justify?: string
}

const Band = ({ query, albums }) => {
  const band = JSON.parse(query.data.toString())
  const bandAlbums = albums.filter((a) => a.bandId === band.id)

  return (
    <>
      <Head>
        <title>{band.name}</title>
      </Head>
      <Layout>
        <Container>
          <Wrapper>
            <h2>{band.name}</h2>
            <Section>
              <BandInfo>
                <InfoBlock>
                  <span>
                    <b>Country</b>: {band.country}
                  </span>
                </InfoBlock>
                <InfoBlock>
                  <span>
                    <b>Country</b>: {band.country}
                  </span>
                </InfoBlock>
                <InfoBlock>
                  <span>
                    <b>Year</b>: {band.year}
                  </span>
                </InfoBlock>
              </BandInfo>
              <BandInfo>
                {band.members.map((m) => (
                  <InfoBlock key={m.name}>
                    <span>
                      <b>Member</b>: {m.name}
                    </span>
                  </InfoBlock>
                ))}
              </BandInfo>
            </Section>
            {bandAlbums.length > 0 ? (
              <div>
                <h2>Albums</h2>
                <Section justify="flex-start">
                  {bandAlbums.map((a) => (
                    <BandInfo key={a.name}>
                      <InfoBlock>
                        <span>
                          <b>Name: </b>
                          {a.name}
                        </span>
                      </InfoBlock>
                      <InfoBlock>
                        <span>
                          <b>Year: </b>
                          {a.year}
                        </span>
                      </InfoBlock>
                    </BandInfo>
                  ))}
                </Section>
              </div>
            ) : (
              <div />
            )}
          </Wrapper>
        </Container>
      </Layout>
    </>
  )
}

export default withAuth(Band, '/login')

export async function getServerSideProps({ query }) {
  const albums = await new Fetch(config.albumns).get()

  return {
    props: {
      query,
      albums
    }
  }
}
