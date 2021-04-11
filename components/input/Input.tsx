import React from 'react'
import styled from 'styled-components'

const SInput = styled.input<IInput>`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border-color: ${props => props.theme.colors[props.color ?? "primary"]};
  border-width: 1px;
  &:focus {
    box-shadow: 0 0 5px ${props => props.theme.colors[props.color ?? "primary"]};
  }
`

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: 'primary' | 'secondary' | 'danger' | 'success'
  fullWidth?: boolean
}

export default function Input({ ...props }: IInput) {
  return <SInput {...props} />
}
