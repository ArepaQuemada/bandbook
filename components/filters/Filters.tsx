import React from 'react'
import styled from 'styled-components'
import FilterButton from "../filter-button/FilterButton";

const Container = styled.section`
  width: 45%;
  padding: 20px;
  @media (max-width: 500px) {
    width: 100%;
  }
`

const List = styled.ul`
  list-style: none;
  @media (max-width: 500px) {
    padding-inline-start: 0px;
    display: flex;
    flex-wrap: wrap;
  }
`

const Li = styled.li`
  padding: 15px;
`

type TFilters = {
  code: string
  name: string
}

interface IFilters {
  title: string
  filters: TFilters[]
}

export default function Filters({ title, filters }: IFilters) {
  return (
    <Container>
      <h3>{title}</h3>
      <List>
        {filters.map((f) => {
          return (
            <Li key={f.code}>
              <FilterButton name={f.code}>{f.name}</FilterButton>
            </Li>
          )
        })}
      </List>
    </Container>
  )
}
