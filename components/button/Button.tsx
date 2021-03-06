import React from 'react'
import styled from 'styled-components'

/**
 * Styles for button component
 */
const SButton = styled.button<IButton>`
  background-color: ${(props) => props.theme.colors[props.color ?? 'primary']};
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  padding: 15px;
  outline: none;
  border-style: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: ${props => props.disabled ? "initial" : "pointer"};
  &:hover, &:active {
    box-shadow: 0 0 5px ${props => props.theme.colors[props.color ?? "primary"]};
  }
`

/**
 * Button props
 */
export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'danger' | 'success'
  fullWidth?: boolean
}

/**
 * Button component
 * @param props
 */
export default function Button({ children, ...props }: IButton) {
  return <SButton {...props}>{children}</SButton>
}
