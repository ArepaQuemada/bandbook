import React from 'react'
import styled from 'styled-components'

/**
 * Component styles
 */
const SBrand = styled.div`
  flex-grow: 1;
  padding-left: 20px;
`
/**
 * Component props
 */
export interface IBrand extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

/**
 * Brand shown on the left side of a navbar component
 * @param props
 */
export default function Brand({ children }: IBrand) {
  return <SBrand>{children}</SBrand>
}
