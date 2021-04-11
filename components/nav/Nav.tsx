import React from "react"
import styled from "styled-components";

const SNav = styled.nav`
  width: 100%;
  padding: 15px;
  background-color: ${props => props.theme.colors[props.color ?? "primary"]};
  box-shadow: 0 0 15px ${props => props.theme.colors[props.color ?? "primary"]};
`

const Nav = ({children, ...props}) => {
  return (
    <SNav {...props}>
      {children}
    </SNav>
  )
}

export default Nav