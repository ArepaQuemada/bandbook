import React from "react"
import { useRouter } from 'next/router'

/**
 * HOC that handles auth redirects to protect dashboard and Dynamic band route
 * @param Component 
 * @param route 
 * @returns 
 */
export default function withAuth(Component, route) {
  const EnhancedComponent = (props) => {

    /**
     * Checks for browser enviorment and if there's a token
     */
    if (process.browser) {
      const router = useRouter()

      const token = localStorage.getItem('token')
      if (!token) {
        router.push(route)
        return null;
      }
      return <Component {...props} />
    }
    return null
  }
  return EnhancedComponent
}
