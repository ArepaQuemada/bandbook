import React from 'react'

interface IFiltersContext {
  filters: string[]
  setFilters: React.Dispatch<React.SetStateAction<string[]>>
}

export const FiltersContext = React.createContext<IFiltersContext | null>(null)

export const useFiltersContext = () => {
  const { filters, setFilters } = React.useContext(FiltersContext)
  return { filters, setFilters }
}
