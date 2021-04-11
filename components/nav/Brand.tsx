import React from 'react'
import styled from 'styled-components'

const SBrand = styled.div`
  flex-grow: 1;
  padding-left: 20px;
`
export interface IBrand extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function Brand({ children }: IBrand) {
  return <SBrand>{children}</SBrand>
}
