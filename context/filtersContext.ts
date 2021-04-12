import React from 'react'

/**
 * Context state types
 */
interface IFiltersContext {
  filters: string[]
  setFilters: React.Dispatch<React.SetStateAction<string[]>>
}

/**
 * Filter context
 */
export const FiltersContext = React.createContext<IFiltersContext | null>(null)

/**
 * Hook that returs filters context
 * @returns filters
 */
export const useFiltersContext = () => {
  const { filters, setFilters } = React.useContext(FiltersContext)
  return { filters, setFilters }
}
