import React from "react"
import { useRouter } from 'next/router'

export default function withAuth(Component, route) {
  const EnhancedComponent = (props) => {
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
