import React from 'react'
import styled from 'styled-components'
import Brand from './Brand'

/**
 * Component styles
 */
const SNav = styled.nav`
  width: 100%;
  padding: 15px;
  background-color: ${(props) => props.theme.colors[props.color ?? 'primary']};
  box-shadow: 0 0 15px
    ${(props) => props.theme.colors[props.color ?? 'primary']};
  display: flex;
`

/**
 * Navbar component
 * @param props
 */
const Nav = ({ children, ...props }) => {
  return <SNav {...props}>{children}</SNav>
}

/**
 * Compound with Brand component
 */
Nav.Brand = Brand

export default Nav
