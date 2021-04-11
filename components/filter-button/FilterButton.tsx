import React from 'react'
import styled from 'styled-components'
import Button, { IButton } from '../button/Button'
import { useFiltersContext } from '../../context/filtersContext'

const SFilterButton = styled(Button)<IFilterButton>`
  background-color: ${(props) =>
    props.active ? props.theme.colors.primary : 'transparent'};
  border-style: none;
  cursor: pointer;
  outline: none;
`

interface IFilterButton extends IButton {
  active?: boolean
  name?: string
}

export default function FilterButton({ children, name, ...props }: IFilterButton) {
  const [active, setActive] = React.useState(false)
  const { setFilters } = useFiltersContext()

  React.useEffect(() => {
    if (active) {
      return setFilters(prev => {
        return [...prev, name]
      })
    }
    setFilters(prev => {
      return prev.filter(f => f !== name)
    })
  }, [active])

  const handleClick = () => setActive(!active)

  return (
    <SFilterButton active={active} name={name} {...props} onClick={handleClick}>
      {children}
    </SFilterButton>
  )
}
