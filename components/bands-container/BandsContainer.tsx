import React from 'react'
import styled from 'styled-components'
import Button from '../button/Button'
import { useRouter } from 'next/router'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const guitar = require('../../assets/guitarra.svg') as string

/**
 * Components styles
 */
const Container = styled.section`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  @media (max-width: 500px) {
    width: 100%;
  }
`

const BandCard = styled.div`
  margin: 10px;
  padding: 10px;
  width: 100%;
  max-width: 245px;
  max-height: 300px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  box-shadow: 0 0 5px ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
`

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const STitle = styled.div`
  text-align: center;
`

const Footer = styled.div`
  padding: 20px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  max-height: 80px;
`

type Band = {
  id: number
  name: string
  genreCode: string
  year: number
  country: string
  members: {
    name: string
  }[]
}

interface IBandsContainer {
  bands: Band[]
}

/**
 * Band container component that renders every band fetched
 * @param bands 
 */
export default function BandsContainer({ bands }: IBandsContainer) {
  const router = useRouter()

  /**
   * Creates the uri and redirects to Dynamic band page
   * @param b Band that will be passed to Dynamic page
   */
  const handleClick = (b) => {
    const query = { data: JSON.stringify(b) }
    const url = { pathname: `/${b.name}`, query }
    const urlAs = { pathname: `/${b.name}`, query }

    router.push(url, urlAs)
  }
  return (
    <>
      <Container>
        {bands.map((b) => (
          <BandCard key={b.id}>
            <Head>
              <Img src={guitar} />
            </Head>
            <STitle>
              <h4>{b.name}</h4>
            </STitle>
            <Footer>
              <Button fullWidth onClick={() => handleClick(b)}>
                Info
              </Button>
            </Footer>
          </BandCard>
        ))}
      </Container>
    </>
  )
}
